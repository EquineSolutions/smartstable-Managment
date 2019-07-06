/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  Object Strucutre:
                    path => router path
                    name => router name
                    component(lazy loading) => component to load
                    meta : {
                      rule => which user can have access (ACL)
                      breadcrumb => Add breadcrumb to specific page
                      pageTitle => Display title besides breadcrumb
                    }
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: '/',
    routes: [
      {
    // =============================================================================
    // MAIN LAYOUT ROUTES
    // =============================================================================
        path: '',
        component: () => import('./layouts/main/Main.vue'),
        children: [
      // =============================================================================
      // Theme Routes
      // =============================================================================
          {
            path: '/',
            name: 'home',
            beforeEnter: guard, // Using guard before entering the route
            component: () => import('./views/Home.vue'),
            meta: {
              breadcrumb: [
                { title: 'Home', active: true}
              ]
            }
          },
          {
            path: '/page2',
            name: 'page2',
            component: () => import('./views/Page2.vue'),
          },
          ,
          {
            path: '/user',
            name: 'user',
            beforeEnter: guard, // Using guard before entering the route
            component: () => import('./views/User/Users.vue'),
            meta: {
              breadcrumb: [
                { title: 'Home', url: '/'},
                { title: 'User', active: true}
              ]
            }
          },
          {
            path: '/user/create',
            name: 'create-user',
            component: () => import('./views/User/Create.vue'),
            meta: {
              breadcrumb: [
                { title: 'Home', url: '/'},
                { title: 'User', url: '/user'},
                { title: 'Create User', active: true}
              ]
            }
          },
          {
            path: '/user/:id',
            name: 'view-user',
            component: () => import('./views/User/View.vue'),
            meta: {
              breadcrumb: [
                { title: 'Home', url: '/'},
                { title: 'User', url: '/user'},
                { title: 'User Information', active: true}
              ]
            }
          },
          {
            path: '/user/edit/:id',
            name: 'edit-user',
            component: () => import('./views/User/Edit.vue'),
            meta: {
              breadcrumb: [
                { title: 'Home', url: '/'},
                { title: 'Users', url: '/user'},
                { title: 'Edit User', active: true}
              ]
            }
          }
        ],
      },
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =================================================================================
      {
        path: '',
        component: () => import('@/layouts/full-page/FullPage.vue'),
        children: [
      // =============================================================================
      // Auth
      // =============================================================================
          {
            path: '/login',
            name: 'pageLogin',
            component: () => import('@/views/auth/Login.vue')
          },
          {
            path: '/error-404',
            name: 'pageError404',
            component: () => import('@/views/auth/Error404.vue')
          },
        ]
      },
      // Redirect to 404 page, if no match found
      {
        path: '*',
        redirect: '/error-404'
      }
    ],
});



router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = "none";
  }
});



function guard(to, from, next){
  let now = Date.now();
  if(store.state.tokens.access_token != null || now >= store.state.tokens.expires_in ) {
    // or however you store your logged in state
    next(); // allow to enter route
  } else{
    next('/login'); // go to '/login';
  }
}



export default router
