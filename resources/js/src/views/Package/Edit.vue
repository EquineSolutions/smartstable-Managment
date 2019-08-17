<template>
    <div v-if="can('package-edit')">
        <div>
            <vx-card title='Update package'>
                <form>
                    <div class="vx-row">
                        <div class="vx-col sm:w-1/2 w-full mb-2">
                            <vs-input class="w-full" v-validate="'required|alpha'" icon-pack="feather" icon="icon-user" icon-no-border label-placeholder="Name" v-model="name" name='name' />
                            <span class="text-danger text-sm"  v-show="errors.has('name')">{{ errors.first('name') }}</span>
                        </div>
                    </div>
                    <div class="vx-row">
                        <div class="vx-col sm:w-1/2 w-full mb-2">
                            <vs-input class="w-full" v-validate="'required|decimal'" icon-pack="feather" icon="icon-user" icon-no-border label-placeholder="Duration" v-model="duration" name='duration' />
                            <span class="text-danger text-sm"  v-show="errors.has('duration')">{{ errors.first('duration') }}</span>
                        </div>
                    </div>
                    <div class="vx-row">
                        <div class="vx-col sm:w-1/2 w-full mb-6">
                            <vs-input v-validate="'required|decimal'" class="w-full" icon-pack="feather" icon="icon-mail" icon-no-border label-placeholder="Price" v-model="email" name='price' />
                            <span class="text-danger text-sm" v-show="errors.has('price')">{{ errors.first('price') }}</span>
                        </div>
                    </div>
                    <div class="vx-row">
                        <span>Description</span>
                        <div class="vx-col sm:w-1/2 w-full mb-2">
                            <vs-textarea class="w-full"  icon-pack="feather" icon="icon-phone" icon-no-border label-placeholder="Description" v-model="description" name='description' />
                            <span class="text-danger text-sm"  v-show="errors.has('description')">{{ errors.first('description') }}</span>
                        </div>
                    </div>
                    <div class="vx-row">
                        <div class="dropbox">
                            <input type="file" id="file" ref="file" accept="image/*" v-on:change="handleFileUpload()"/>
                            <img v-bind:src="imagePreview" v-show="showPreview"/>
                        </div>
                    </div>
                    <div class="vx-row">
                        <label>Enable</label>
                        <div class="vx-col sm:w-1/2 w-full mb-2">
                            <input type="checkbox" v-model="checked">
                            {{checked ? "yes" : "no"}}

                        </div>
                    </div>
                    <div class="vx-row mt-5">
                        <div class="vx-col w-full">
                            <b>Package Feature:</b>
                            <ul class="centerx">
                                <li v-for="(feature, index) in features" :key="index">
                                    <vs-checkbox v-if="feature.priority === 'basic'" v-model="packageFeatures[index]" :vs-value="feature.id" disabled="true" checked="true">{{feature.name}}</vs-checkbox>
                                    <vs-checkbox v-else v-model="packageFeatures"  :vs-value="feature.id">{{feature.name}}</vs-checkbox>
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
    </div>
</template>

<script>

   export default {
        mounted() {
            this.getData();
        },
        data() {
            return {
                name: "",
                description: '',
                key: "",
                checked: "",
                selected: "",
                packageFeatures:[]
            }
        },
        methods: {
            //Get Feature Data
            getData(){
                let fire = this;
                axios.get(`/api/packages/${this.$route.params.id}/edit`, store.state.config).then(function(response){
                    let package_info = response.data.data.package;
                    let features = response.data.data.features;
                    for (let i =0; i<response.data.data.features.length; i++){
                        fire.packageFeatures.push(response.data.data.features[i].name)
                    }
                    fire.name = package_info.name;
                    fire.description = package_info.description;
                    fire.price = package_info.price;
                    fire.checked = package_info.enable;
                    fire.duration = package_info.duration;
                    fire.logo = package_info.logo;
                }).catch(function(error){
                    if(error.response.status == 403) { // Un-Authorized
                        fire.vs_alert ('Oops!', error.response.data.message, 'danger');
                        router.push({ name: "pageError403"});
                    } else if (error.response.status == 401){ // Un-Authenticated
                        router.push({ name: "pageLogin"})
                    }
                });
            },

            //Update Feature Submission
            submitForm() {
                let fire = this;
                this.$validator.validateAll().then(result => {
                    if(result) {
                        // if form have no errors
                        let data = {
                            name: this.name,
                            description: this.description,
                            key: this.key,
                            enable: this.checked,
                            priority: this.selected,
                            packageFeatures: this.packageFeatures,
                        };
                        axios.put(`/api/features/${this.$route.params.id}`, data, store.state.config).then(function(response){
                            if(response.data.status == 200) {
                                fire.vs_alert ('Success', 'Feature Successfully Updated', 'success');
                                router.push({ name: "feature"})
                            } else {
                                fire.vs_alert ('Oops!', response.data, 'danger');
                            }
                        }).catch(function(error){
                            if (error.response.status == 422){ // Validation Error
                                let errors = error.response.data.errors;
                                fire.vs_alert ('Oops!', errors[Object.keys(errors)[0]][0], 'danger');
                            } else if(error.response.status == 403) { // Un-Authorized
                                fire.vs_alert ('Oops!', error.response.data.message, 'danger');
                                router.push({ name: "pageError403"});
                            } else if (error.response.status == 401){ // Un-Authenticated
                                router.push({ name: "pageLogin"})
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
