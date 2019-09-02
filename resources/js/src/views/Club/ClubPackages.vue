<template>
    <div>
        <vx-card title='Assign Packages'>
            <form>
                <div class="vx-row mt-5">
                    <div class="vx-col w-full">
                        <b>Packages:</b>
                        <ul class="centerx">
                            <li v-for="(package_info, index) in packages" :key="index">
                                <vs-checkbox v-model="clubPackages"  :vs-value="package_info.id">{{package_info.name}}</vs-checkbox>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="vx-row mt-10">
                    <div class="vx-col w-full">
                        <vs-button class="mr-3 mb-2" @click.prevent="submitForm">Submit</vs-button>
                    </div>
                </div>
            </form>
        </vx-card>
    </div>
</template>

<script>
    export default {
        mounted() {
            this.getFeatures();
        },
        data() {
            return {
                clubPackages: [],
                packages :[]


            }
        },
        methods: {
            //Get All Features
            getFeatures()
            {
                let fire = this;
                axios.get('/api/packages', store.state.config).then(function(response){
                    fire.packages = response.data.data.packages;
                }).catch(function(error){
                    if(error.response.status == 403) { // Un-Authorized
                        fire.vs_alert ('Oops!', error.response.data.message, 'danger');
                        fire.$router.push({ name: "pageError403"});
                    } else if (error.response.status == 401){ // Un-Authenticated
                        fire.$router.push({ name: "pageLogin"})
                    }
                });
            },

            //Create package Submission
            submitForm()
            {
                let fire = this;
                this.$validator.validateAll().then(result => {
                    if(result) {
                        // if form have no errors
                        const formData = new FormData();

                        formData.append("club_id",this.$route.params.id );
                        fire.clubPackages.map(function (value, index) {
                            formData.append('packages[]', value);
                        });
                        axios.post('/api/assign_packages', formData, store.state.config).then(function(response){
                            console.log(response);
                            if(response.data.status == 200) {
                                fire.vs_alert ('Success', 'package Successfully Added', 'success');
                                fire.$router.push({ name: "clubPackages"})
                            } else {
                                fire.vs_alert ('Oops!', response.data, 'danger');
                            }
                        }).catch(function(error){
                            if (error.response.status == 422){ // Validation Error
                                let errors = error.response.data.errors;
                                fire.vs_alert ('Oops!', errors[Object.keys(errors)[0]][0], 'danger');
                            } else if(error.response.status == 403) { // Un-Authorized
                                fire.vs_alert ('Oops!', error.response.data.message, 'danger');
                                fire.$router.push({ name: "pageError403"});
                            } else if (error.response.status == 401){ // Un-Authenticated
                                fire.$router.push({ name: "pageLogin"})
                            }
                        });
                    } else {
                        this.vs_alert ('Oops!', 'Please, solve all issues before submitting.', 'danger');
                    }
                })
            },

            //Vuesax alert
            vs_alert (title, text, color)
            {
                this.$vs.notify({
                    title: title,
                    text: text,
                    color: color
                });
            }

        },
    }
</script>

<style>
    .centerx li {
        display: inline-flex;
        margin: 10px;
    }
</style>
