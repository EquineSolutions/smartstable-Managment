<template>
    <div v-if="can('package-create')">
        <vx-card title='Create New Package'>
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
</template>

<script>

    // import router from '../../router.js'

    // For custom error message
    import { Validator } from 'vee-validate';
    const dict = {
        custom: {

        }
    };

    // register custom messages
    Validator.localize('en', dict);


    export default {
        mounted() {
            this.getFeatures();
        },
        data() {
            return {
                checked  : 0,
                file: '',
                showPreview: false,
                imagePreview: '',
                packageFeatures: [],
                features :[]


            }
        },
        methods: {
            // onFileChanged (event) {
            //     this.selectedFile = event.target.files[0]
            // },
            /*
                Handles a change on the file upload
            */
            handleFileUpload(){
                /*
                  Set the local file variable to what the user has selected.
                */
                this.file = this.$refs.file.files[0];

                /*
                  Initialize a File Reader object
                */
                let reader  = new FileReader();

                /*
                  Add an event listener to the reader that when the file
                  has been loaded, we flag the show preview as true and set the
                  image to be what was read from the reader.
                */
                reader.addEventListener("load", function () {
                    this.showPreview = true;
                    this.imagePreview = reader.result;
                }.bind(this), false);

                /*
                  Check to see if the file is not empty.
                */
                if( this.file ){
                    /*
                      Ensure the file is an image file.
                    */
                    if ( /\.(jpe?g|png|gif)$/i.test( this.file.name ) ) {
                        /*
                          Fire the readAsDataURL method which will read the file in and
                          upon completion fire a 'load' event which we will listen to and
                          display the image in the preview.
                        */
                        reader.readAsDataURL( this.file );
                    }
                }
            },
            //Get All Features
            getFeatures()
            {
                let fire = this;
                axios.get('/api/packages/create', store.state.config).then(function(response){
                    fire.features = response.data.data.features;
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
                        formData.append('name', this.name);
                        formData.append('description', this.description);
                        formData.append('duration', this.duration);
                        formData.append('price', this.duration);
                        formData.append('enable', this.checked);
                        formData.append('logo', this.file);

                        fire.packageFeatures.map(function (value, index) {
                            formData.append('features[]', value);
                        });
                        axios.post('/api/packages', formData, store.state.config).then(function(response){
                            if(response.data.status == 200) {
                                fire.vs_alert ('Success', 'package Successfully Added', 'success');
                                fire.$router.push({ name: "package"})
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
