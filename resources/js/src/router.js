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
window.axios = require('axios');

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
              ],
              pageTitle: "Home",
            }
          },


          // USER CRUD PAGES
          {
            path: '/user',
            name: 'user',
            beforeEnter: guard, // Using guard before entering the route
            component: () => import('./views/User/Users.vue'),
            meta: {
              breadcrumb: [
                { title: 'Home', url: '/'},
                { title: 'User', active: true}
              ],
              pageTitle: "Users",
              permission: 'browse-users'
            }
          },
          {
            path: '/user/create',
            name: 'create-user',
            beforeEnter: guard, // Using guard before entering the route
            component: () => import('./views/User/Create.vue'),
            meta: {
              breadcrumb: [
                { title: 'Home', url: '/'},
                { title: 'User', url: '/user'},
                { title: 'Create User', active: true}
              ],
              pageTitle: "Create User",
              permission: 'add-users'
            }
          },
          {
            path: '/user/:id',
            name: 'view-user',
            beforeEnter: guard, // Using guard before entering the route
            component: () => import('./views/User/View.vue'),
            meta: {
              breadcrumb: [
                { title: 'Home', url: '/'},
                { title: 'User', url: '/user'},
                { title: 'User Information', active: true}
              ],
              pageTitle: "User Information",
              permission: 'view-users'
            }
          },
          {
            path: '/user/edit/:id',
            name: 'edit-user',
            beforeEnter: guard, // Using guard before entering the route
            component: () => import('./views/User/Edit.vue'),
            meta: {
              breadcrumb: [
                { title: 'Home', url: '/'},
                { title: 'Users', url: '/user'},
                { title: 'Edit User', active: true}
              ],
              pageTitle: "Edit User",
              permission: 'edit-users'
            }
          },




          // ROLE CRUD PAGES
          {
            path: '/role',
            name: 'role',
            beforeEnter: guard, // Using guard before entering the route
            component: () => import('./views/Role/Roles.vue'),
            meta: {
              breadcrumb: [
                { title: 'Home', url: '/'},
                { title: 'Roles', active: true}
              ],
              pageTitle: "Roles",
              permission: 'browse-roles'
            }
          },
          {
            path: '/role/create',
            name: 'create-role',
            beforeEnter: guard, // Using guard before entering the route
            component: () => import('./views/Role/Create.vue'),
            meta: {
              breadcrumb: [
                { title: 'Home', url: '/'},
                { title: 'Roles', url: '/role'},
                { title: 'Create Role', active: true}
              ],
              pageTitle: "Create Role",
              permission: 'add-roles'
            }
          },
          {
            path: '/role/:id',
            name: 'view-role',
            beforeEnter: guard, // Using guard before entering the route
            component: () => import('./views/Role/View.vue'),
            meta: {
              breadcrumb: [
                { title: 'Home', url: '/'},
                { title: 'Roles', url: '/role'},
                { title: 'Role Information', active: true}
              ],
              pageTitle: "Role Information",
              permission: 'view-roles'
            }
          },
          {
            path: '/role/edit/:id',
            name: 'edit-role',
            beforeEnter: guard, // Using guard before entering the route
            component: () => import('./views/Role/Edit.vue'),
            meta: {
              breadcrumb: [
                { title: 'Home', url: '/'},
                { title: 'Roles', url: '/role'},
                { title: 'Edit Role', active: true}
              ],
              pageTitle: "Edit Role",
              permission: 'edit-roles'
            }
          },


            // =============================================================================
            // Clients Routes
            // =============================================================================

            {
                path: '/client',
                name: 'client',
                beforeEnter: guard, // Using guard before entering the route
                component: () => import('./views/Client/Clients.vue'),
                meta: {
                    breadcrumb: [
                        { title: 'Home', url: '/'},
                        { title: 'Clients', url: '/client', active: true},
                    ],
                    pageTitle: "Clients"
                }
            },
            {
                path: '/client/create',
                name: 'create-client',
                beforeEnter: guard, // Using guard before entering the route
                component: () => import('./views/Client/Create.vue'),
                meta: {
                    breadcrumb: [
                        { title: 'Home', url: '/'},
                        { title: 'Clients', url: '/client'},
                        { title: 'Create Client', active: true}
                    ],
                    pageTitle: "Create Client"
                }
            },
            {
                path: '/client/edit/:id',
                name: 'edit-client',
                beforeEnter: guard, // Using guard before entering the route
                component: () => import('./views/Client/Edit.vue'),
                meta: {
                    breadcrumb: [
                        { title: 'Home', url: '/'},
                        { title: 'Clients', url: '/client'},
                        { title: 'Edit Client', active: true}
                    ],
                    pageTitle: "Edit Client"
                }
            },
            {
                path: '/client/:id',
                name: 'view-client',
                beforeEnter: guard, // Using guard before entering the route
                component: () => import('./views/Client/View.vue'),
                meta: {
                    breadcrumb: [
                        { title: 'Home', url: '/'},
                        { title: 'Clients', url: '/client'},
                        { title: 'Client Information', active: true}
                    ],
                    pageTitle: "Client Information"
                }
            },



          // PROFILE PAGE
          {
            path: '/profile',
            name: 'profile',
            beforeEnter: guard, // Using guard before entering the route
            component: () => import('./views/Profile/Profile.vue'),
            meta: {
              breadcrumb: [
                { title: 'Home', url: '/'},
                { title: 'Profile', active: true}
              ],
              pageTitle: "Profile"
            }
          },

          // PACKAGES CRUD PAGES
          {
            path: '/package',
            name: 'package',
            beforeEnter: guard, // Using guard before entering the route
            component: () => import('./views/Package/Packages.vue'),
            meta: {
              breadcrumb: [
                { title: 'Home', url: '/'},
                { title: 'Package', active: true}
              ],
              pageTitle: "Packages",
              permission: 'package-list'
            }
          },
          {
            path: '/package/create',
            name: 'create-package',
            beforeEnter: guard, // Using guard before entering the route
            component: () => import('./views/Package/Create.vue'),
            meta: {
              breadcrumb: [
                { title: 'Home', url: '/'},
                { title: 'Package', url: '/package'},
                { title: 'Create Package', active: true}
              ],
              pageTitle: "Create Packages",
              permission: 'package-create'
            }
          },
          {
            path: '/package/:id',
            name: 'view-package',
            beforeEnter: guard, // Using guard before entering the route
            component: () => import('./views/Package/View.vue'),
            meta: {
              breadcrumb: [
                { title: 'Home', url: '/'},
                { title: 'Package', url: '/package'},
                { title: 'Package Information', active: true}
              ],
              pageTitle: "Package Information",
              permission: 'package-list'
            }
          },
          {
            path: '/package/edit/:id',
            name: 'edit-package',
            beforeEnter: guard, // Using guard before entering the route
            component: () => import('./views/Package/Edit.vue'),
            meta: {
              breadcrumb: [
                { title: 'Home', url: '/'},
                { title: 'Package', url: '/package'},
                { title: 'Edit Package', active: true}
              ],
              pageTitle: "Edit Package",
              permission: 'package-edit'
            }
          },

            // FEATURE CRUD PAGES
            {
                path: '/feature',
                name: 'feature',
                beforeEnter: guard, // Using guard before entering the route
                component: () => import('./views/Feature/Features.vue'),
                meta: {
                    breadcrumb: [
                        { title: 'Home', url: '/'},
                        { title: 'Feature', active: true}
                    ],
                    pageTitle: "Feature",
                    permission: 'feature-list'
                }
            },
            {
                path: '/feature/create',
                name: 'create-feature',
                beforeEnter: guard, // Using guard before entering the route
                component: () => import('./views/Feature/Create.vue'),
                meta: {
                    breadcrumb: [
                        { title: 'Home', url: '/'},
                        { title: 'Feature', url: '/feature'},
                        { title: 'Create Feature', active: true}
                    ],
                    pageTitle: "Create Features",
                    permission: 'feature-create'
                }
            },
            {
                path: '/feature/:id',
                name: 'view-feature',
                beforeEnter: guard, // Using guard before entering the route
                component: () => import('./views/Feature/View.vue'),
                meta: {
                    breadcrumb: [
                        { title: 'Home', url: '/'},
                        { title: 'Feature', url: '/feature'},
                        { title: 'Feature Information', active: true}
                    ],
                    pageTitle: "Feature Information",
                    permission: 'feature-list'
                }
            },
            {
                path: '/feature/edit/:id',
                name: 'edit-feature',
                beforeEnter: guard, // Using guard before entering the route
                component: () => import('./views/Feature/Edit.vue'),
                meta: {
                    breadcrumb: [
                        { title: 'Home', url: '/'},
                        { title: 'Feature', url: '/feature'},
                        { title: 'Edit Feature', active: true}
                    ],
                    pageTitle: "Edit Feature",
                    permission: 'feature-edit'
                }
            },
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
          {
            path: '/error-403',
            name: 'pageError403',
            component: () => import('@/views/auth/NotAuthorized.vue')
          },
        ]
      },
      // Redirect to 404 page, if no match found
      {
        path: '*',
        redirect: '/error-404'
      },
    ],
});



router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = "none";
  }
});

function guard(to, from, next) {
  const formData = new FormData();
  if (to.meta.permission != undefined){
    formData.append('permissions', to.meta.permission);
  }
  axios.post('/api/authorize', formData, store.state.config).then(function(response){
    next();
  }).catch(error=>{
      console.log("cc", error.response.status);
    if (error.response.status == 403){ // unauthorized
      next('/error-403');
    }else if (error.response.status == 401){ // unauthenticated
      next('/login');
    }
  });
}



export default router
