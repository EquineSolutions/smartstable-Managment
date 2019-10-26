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

          {
            path: '/admin/club',
            name: 'Admin Club',
            component: () => import('./views/Club/ClubUser.vue'),
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
              permission: 'browse-packages'
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
              permission: 'add-packages'
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
              permission: 'browse-packages'
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
              permission: 'edit-packages'
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
                    permission: 'browse-features'
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
                    permission: 'add-features'
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
                    permission: 'browse-features'
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
                    permission: 'edit-features'
                }
            },
            {
                path: '/club',
                name: 'Club',
                // beforeEnter: guard, // Using guard before entering the route
                component: () => import('./views/Club/Clubs.vue'),
                meta: {
                    breadcrumb: [
                        { title: 'Home', url: '/'},
                        { title: 'Club', active: true}
                    ],
                    pageTitle: "Clubs",
                    // permission: 'browse-clubs'
                }
            },
            {
                path: '/club/create',
                name: 'create-club',
                // beforeEnter: guard, // Using guard before entering the route
                component: () => import('./views/Club/Create.vue'),
                meta: {
                    breadcrumb: [
                        { title: 'Home', url: '/'},
                        { title: 'Club', url: '/club'},
                        { title: 'Create Clubs', active: true}
                    ],
                    pageTitle: "Create Clubs",
                    // permission: 'add-clubs'
                }
            },
            {
                path: '/club/:id',
                name: 'view-club',
                // beforeEnter: guard, // Using guard before entering the route
                component: () => import('./views/Club/View.vue'),
                meta: {
                    breadcrumb: [
                        { title: 'Home', url: '/'},
                        { title: 'Clubs', active: true}
                    ],
                    pageTitle: "Clubs"
                }
            },
            {
                path: '/club/edit/:id',
                name: 'edit-club',
                // beforeEnter: guard, // Using guard before entering the route
                component: () => import('./views/Club/Edit.vue'),
                meta: {
                    breadcrumb: [
                        { title: 'Home', url: '/'},
                        { title: 'Club', url: '/club'},
                        { title: 'Edit Club', active: true}
                    ],
                    pageTitle: "Edit Club",
                }
            },
            {
                path: '/club/assign/:id',
                name: 'assign-package',
                // beforeEnter: guard, // Using guard before entering the route
                component: () => import('./views/Club/ClubPackages.vue'),
                meta: {
                    breadcrumb: [
                        { title: 'Home', url: '/'},
                        { title: 'Club', url: '/club'},
                        { title: 'Assign package', active: true}
                    ],
                    pageTitle: "Assign packages",
                }
            },

            {
                path: '/pending_club',
                name: 'pending_club',
                // beforeEnter: guard, // Using guard before entering the route
                component: () => import('./views/Club/PendingRequest.vue'),
                meta: {
                    breadcrumb: [
                        { title: 'Home', url: '/'},
                        { title: 'Pending request', active: true}
                    ],
                    pageTitle: "Pending request",
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
                path: '/clubs/create_club',
                name: 'create-club',
                component: () => import('@/views/Club/CreateClub.vue')
            },
            {
                path: '/clubs/more_data',
                name: 'create-club',
                component: () => import('./views/Club/MoreClubData.vue'),
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


/**
 * Check if the authenticated user can perform an action.
 *
 * @param permission
 * @returns {boolean}
 */
function can(permission) {
  let hasPermission = false;
  store.state.userPermissions.forEach((userPermission) => {
    if(userPermission.name == permission){
      hasPermission = true;
    }
  });

  return hasPermission;
}


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
