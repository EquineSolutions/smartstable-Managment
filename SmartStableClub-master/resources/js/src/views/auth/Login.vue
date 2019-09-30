<!-- =========================================================================================
    File Name: Login.vue
    Description: Login Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center" id="page-login">
        <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
            <vx-card>
                <div slot="no-body" class="full-page-bg-color">
                    <div class="vx-row no-gutter justify-center items-center">
                        <div class="vx-col hidden lg:block lg:w-1/2">
                            <img src="@assets/images/pages/login.png" alt="login" class="mx-auto">
                        </div>
                        <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
                            <div class="p-8">
                                <form @submit.prevent="login(user)">
                                    <div class="vx-card__title mb-8">
                                        <h4 class="mb-4">Login</h4>
                                        <p>Welcome back, please login to your account.</p>
                                    </div>
                                    <vs-input
                                        name="email"
                                        icon="icon icon-user"
                                        icon-pack="feather"
                                        label-placeholder="Email"
                                        v-model="user.email"
                                        class="w-full no-icon-border"/>

                                    <vs-input
                                        type="password"
                                        name="password"
                                        icon="icon icon-lock"
                                        icon-pack="feather"
                                        label-placeholder="Password"
                                        v-model="user.password"
                                        class="w-full mt-6 no-icon-border" />
<!--                                    <div class="flex flex-wrap justify-between my-5">-->
<!--                                        <vs-checkbox v-model="checkbox_remember_me" class="mb-3">Remember Me</vs-checkbox>-->
<!--                                        <router-link to="#">Forgot Password?</router-link>-->
<!--                                    </div>-->
                                    <div class="p-8">
                                        <vs-button class="float-right">Login</vs-button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </vx-card>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                email: null,
                password: null
            },
            checkbox_remember_me: false
        }
    },

    methods: {
        login(user){
            let fire = this;
            store.dispatch('login', user).then(response => {
                fire.$vs.notify({
                    title:'Welcome Back!',
                    text:'We are happy to see you again.',
                    color:'success'
                });
            }).catch(error => {
                fire.$vs.notify({
                    title:'Oops!',
                    text:error.response.data.message,
                    color:'danger'
                });
                fire.resetUser();
            });
        },

        resetUser() {
            this.user = {
                email: this.user.email,
                password: null
            }
        }

    }
}
</script>