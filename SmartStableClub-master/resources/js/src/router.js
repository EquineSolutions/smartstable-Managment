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
      // Main Routes
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

            // =============================================================================
            // User Routes
            // =============================================================================
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

            // =============================================================================
            // Roles Routes
            // =============================================================================
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
            // Horses Routes
            // =============================================================================
            {
                path: '/horse',
                name: 'horse',
                beforeEnter: guard, // Using guard before entering the route
                component: () => import('./views/Horse/Horses.vue'),
                meta: {
                    breadcrumb: [
                        { title: 'Home', url: '/'},
                        { title: 'Horses', url: '/horse', active: true},
                    ],
                    pageTitle: "Horses"
                }
            },
            {
                path: '/horse/create',
                name: 'create-horse',
                beforeEnter: guard, // Using guard before entering the route
                component: () => import('./views/Horse/Create.vue'),
                meta: {
                    breadcrumb: [
                        { title: 'Home', url: '/'},
                        { title: 'Horses', url: '/horse'},
                        { title: 'Create Horse', active: true}
                    ],
                    pageTitle: "Create Horse"

                }
            },
            {
                path: '/horse/edit/:id',
                name: 'edit-horse',
                beforeEnter: guard, // Using guard before entering the route
                component: () => import('./views/Horse/Edit.vue'),
                meta: {
                    breadcrumb: [
                        { title: 'Home', url: '/'},
                        { title: 'Horses', url: '/horse'},
                        { title: 'Edit Horse', active: true}
                    ],
                    pageTitle: "Edit Horse"
                }
            },
            {
                path: '/horse/:id',
                name: 'view-horse',
                beforeEnter: guard, // Using guard before entering the route
                component: () => import('./views/Horse/View.vue'),
                meta: {
                    breadcrumb: [
                        { title: 'Home', url: '/'},
                        { title: 'Horses', url: '/horse'},
                        { title: 'Horse Information', active: true}
                    ],
                    pageTitle: "Horse Information"
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
            {
                path: '/coming-soon',
                name: 'coming-soon',
                component: () => import('@/views/auth/ComingSoon.vue')
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
    if (error.response.status == 403){ // unauthorized
      next('/error-403');
    }else if (error.response.status == 401){ // unauthenticated
      next('/login');
    }
  });
}



export default router
