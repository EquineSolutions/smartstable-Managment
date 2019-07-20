/*=========================================================================================
  File Name: actions.js
  Description: Vuex Store - actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


const actions = {

    // ////////////////////////////////////////////
    // SIDEBAR & UI UX
    // ////////////////////////////////////////////

    updateSidebarWidth({ commit }, width) {
      commit('UPDATE_SIDEBAR_WIDTH', width);
    },
    updateI18nLocale({ commit }, locale) {
      commit('UPDATE_I18N_LOCALE', locale);
    },
    toggleContentOverlay({ commit }) {
      commit('TOGGLE_CONTENT_OVERLAY');
    },
    updateTheme({ commit }, val) {
      commit('UPDATE_THEME', val);
    },
    updateUserRole({ commit }, val) {
      commit('UPDATE_USER_ROLE', val);
    },
    updateWindowWidth({ commit }, width) {
      commit('UPDATE_WINDOW_WIDTH', width);
    },


    // ////////////////////////////////////////////
    // COMPONENT
    // ////////////////////////////////////////////

    // VxAutoSuggest
    updateStarredPage({ commit }, payload) {
      commit('UPDATE_STARRED_PAGE', payload)
    },

    //  The Navbar
    arrangeStarredPagesLimited({ commit }, list) {
      commit('ARRANGE_STARRED_PAGES_LIMITED', list)
    },
    arrangeStarredPagesMore({ commit }, list) {
      commit('ARRANGE_STARRED_PAGES_MORE', list)
    },

    // ////////////////////////////////////////////
    // LOGOUT
    // ////////////////////////////////////////////
    logout(context) {
        return new Promise((resolve, reject) => {
            axios.get('/api/logout', store.state.config).then( response => {
                if(response.data.status == 200) {
                    context.commit('resetUser', response);
                }
                resolve(response);
            }).catch(response => {
                reject(response);
            })
        })
    },


    // ////////////////////////////////////////////
    // LOGIN
    // ////////////////////////////////////////////
    login(context, user) {
        return new Promise((resolve, reject) => {
            let data = {
                email: user.email,
                password: user.password
            };

            axios.post('/api/login', data).then( response => {
                let responseData = response.data;
                let now = Date.now();
                responseData.expires_at = responseData.expires_at + now;

                context.commit('updateTokens', responseData);

                store.dispatch('updateUser', responseData);

                resolve(response);
            }).catch(response => {
                reject(response);
            })
        })
    },

    updateUser(context, loginData) {
        let config = {
            headers: {'Authorization': "Bearer " + loginData.access_token}
        };

        axios.get(`/api/user_info`, config).then(response => {
            context.commit('updateUser', response.data.data);
        }).catch(error => {
            console.log(error)
        })
    },


    updateRoles(context, loginData) {
        let config = {
            headers: {'Authorization': "Bearer " + loginData.access_token}
        };

        axios.get(`/api/users/${loginData.user_id}`, config).then(response => {
            context.commit('updateUser', response.data.data);
        }).catch(error => {
            console.log(error)
        })
    },

    updateProfile(context, data) {
        return new Promise((resolve, reject) => {
            axios.post(`/api/profile/${store.state.currentUser.id}`, data, store.state.config).then(function (response) {
                context.commit('updateUserInfo', response.data.User.data);
                resolve(response);
            }).catch(response => {
                reject(response);
            });
        });
    },
}

export default actions
