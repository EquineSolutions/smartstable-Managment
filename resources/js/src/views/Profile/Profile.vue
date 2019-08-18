<template>
    <div>
        <vx-card title='Personal Information'>
            <vs-row>
                <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                    <div class="con-vs-avatar 200px" style="width: 200px; height: 200px; background: rgb(195, 195, 195);">
                        <div class="con-img vs-avatar--con-img">
                            <img :src="user.image==''?'https://i.imgur.com/ezM6SJ5.png':user.image" alt="">
                        </div>
                    </div>
                </vs-col>
                <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12" v-if="update">
                    <input id="photo-input" type="file" style="display: none;" @change="previewImage" accept="image/*">
                    <vs-button size="small" icon-pack="feather" icon="icon-edit" class="mb-4" @click="selectPhoto">Upload Photo</vs-button>
                </vs-col>
            </vs-row>
            <vs-divider/>
            <vs-row v-if="!update">
                <vs-col vs-type="flex" vs-justify="left" vs-align="left" vs-w="12">
                    <b>Name: </b>&nbsp;{{user.first_name + ' ' + user.last_name}}
                </vs-col>
                <vs-divider/>
                <vs-col vs-type="flex" vs-justify="left" vs-align="left" vs-w="12">
                    <b>Email: </b>&nbsp;{{user.email}}
                </vs-col>
                <vs-divider/>
                <vs-col vs-type="flex" vs-justify="left" vs-align="left" vs-w="12">
                    <b>Mobile: </b>&nbsp;{{user.mobile}}
                </vs-col>
            </vs-row>
            <template v-if="update">
                <div class="vx-row">
                    <div class="vx-col sm:w-1/2 w-full mb-2">
                        <vs-input class="w-full" v-validate="'required|alpha'" icon-pack="feather" icon="icon-user" icon-no-border label-placeholder="First Name*" v-model="form.first_name" name='first_name' />
                        <span class="text-danger text-sm"  v-show="errors.has('first_name')">{{ errors.first('first_name') }}</span>
                    </div>
                    <div class="vx-col sm:w-1/2 w-full mb-2">
                        <vs-input class="w-full" v-validate="'required|alpha'" icon-pack="feather" icon="icon-user" icon-no-border label-placeholder="Last Name*" v-model="form.last_name" name='last_name' />
                        <span class="text-danger text-sm"  v-show="errors.has('last_name')">{{ errors.first('last_name') }}</span>
                    </div>
                </div>
                <div class="vx-row">
                    <div class="vx-col sm:w-1/2 w-full mb-2">
                        <vs-input type="email" disabled v-validate="'required|email'" class="w-full" icon-pack="feather" icon="icon-mail" icon-no-border label-placeholder="Email*" v-model="form.email" name='email' />
                        <span class="text-danger text-sm" v-show="errors.has('email')">{{ errors.first('email') }}</span>
                    </div>
                    <div class="vx-col sm:w-1/2 w-full mb-2">
                        <vs-input class="w-full" v-validate="'decimal:11'" icon-pack="feather" icon="icon-phone" icon-no-border label-placeholder="Mobile*" v-model="form.mobile" name='mobile' />
                        <span class="text-danger text-sm"  v-show="errors.has('mobile')">{{ errors.first('mobile') }}</span>
                    </div>
                </div>
                <div class="vx-row">
                    <div class="vx-col sm:w-1/2 w-full">
                        <vs-input type="password" icon-pack="feather" icon="icon-lock" icon-no-border label-placeholder="Password" name="password" v-model="form.password" class="w-full" ref="password" />
                        <span class="text-danger text-sm" v-show="errors.has('password')">{{ errors.first('password') }}</span>
                    </div>
                    <div class="vx-col sm:w-1/2 w-full">
                        <vs-input type="password" v-validate="'confirmed:password'" icon-pack="feather" icon="icon-lock" icon-no-border label-placeholder="Confirm Password" name="confirm_password" v-model="form.confirm_password" class="w-full" data-vv-as="password" />
                        <span class="text-danger text-sm" v-show="errors.has('confirm_password')">{{ errors.first('confirm_password') }}</span>
                    </div>
                    <div class="vx-col w-full ml-3" style="color: rgb(153, 153, 153);">
                        <b>NOTE:</b> Keep the password field empty for no change.
                    </div>
                </div>
            </template>
            <vs-row>
                <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                    <vs-button v-if="!update" icon-pack="feather" icon="icon-edit" class="mb-4" @click="update = true">Update Information</vs-button>
                    <template v-else>
                        <vs-button icon-pack="feather" color="danger" icon="icon-x" class="mb-4 mr-2" @click="update = false">Cancel</vs-button>
                        <vs-button icon-pack="feather" icon="icon-save" class="mb-4" @click="submitForm">Save</vs-button>
                    </template>
                </vs-col>
            </vs-row>
        </vx-card>

    </div>
</template>

<script>
    import router from './../../router'
    export default {
        mounted() {
            this.getUserData();
        },
        name: "Profile",
        data() {
            return {
                update: false,

                user: {
                    id: store.state.currentUser.id,
                    first_name: store.state.currentUser.first_name,
                    last_name: store.state.currentUser.last_name,
                    email: store.state.currentUser.email,
                    mobile: store.state.currentUser.mobile,
                    image: store.state.currentUser.image,
                },

                form: {
                    first_name: store.state.currentUser.first_name,
                    last_name: store.state.currentUser.last_name,
                    email: store.state.currentUser.email,
                    mobile: store.state.currentUser.mobile,
                    image: store.state.currentUser.image,
                    imageFile:store.state.currentUser.image,
                    password: '',
                    confirm_password: '',
                }
            }
        },
        methods: {

            //Display User Data.
            getUserData()
            {
                let fire = this;
                let config = {
                    headers: {'Authorization': "Bearer " + store.state.tokens.access_token}
                };
                axios.get(`/api/users/${store.state.currentUser.id}`, config).then(function(response){
                    fire.user = response.data.data;
                }).catch(error => {
                    console.log(error.response.data.code);
                    if (error.response.data.code == 403){ // unauthorized
                        router.push('home');
                    }else if (error.response.data.code == 401){ // unauthenticated
                        router.push('login');
                    }
                });
            },

            //Update User Information
            submitForm()
            {
                let fire = this;
                this.$validator.validateAll().then(result => {
                    if(result) {
                        // if form have no errors
                        const formData = new FormData();
                        formData.append('first_name', this.form.first_name);
                        formData.append('last_name', this.form.last_name);
                        formData.append('email', this.form.email);
                        formData.append('mobile', this.form.mobile);
                        if(this.form.password != "")
                        {
                            formData.append('password', this.form.password);
                        }

                        if(this.user.image != this.form.image)
                        {
                            formData.append('image', this.form.imageFile);
                        }

                        store.dispatch('updateProfile', formData).then(response => {
                            fire.user = response.data.User.data;
                            fire.vs_alert('Success', 'Data Successfully Updated', 'success');
                            fire.update = false;
                        }).catch(response => {
                            fire.vs_alert('Oops!', 'An error has been occurred.', 'danger');
                            fire.resetUser();
                        });
                    } else {
                        fire.vs_alert('Oops!', 'Please, solve all issues before submitting.', 'danger');
                    }
                });
            },

            //Vuesax alert
            vs_alert (title, text, color)
            {
                this.$vs.notify({
                    title: title,
                    text: text,
                    color: color
                });
            },

            selectPhoto()
            {
                document.getElementById('photo-input').click();
            },

            previewImage(event)
            {
                // Reference to the DOM input element
                var input = event.target;
                this.form.imageFile = input.files[0];
                // Ensure that you have a file before attempting to read it
                if (input.files && input.files[0]) {
                    // create a new FileReader to read this image and convert to base64 format
                    var reader = new FileReader();
                    // Define a callback function to run, when FileReader finishes its job
                    reader.onload = (e) => {
                        // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
                        // Read image as base64 and set to imageData
                        this.user.image = e.target.result;
                    }
                    // Start the reader job - read file as a data url (base64 format)
                    reader.readAsDataURL(input.files[0]);
                }
            }
        }
    }
</script>

<style>
    .vx-card .vx-card__collapsible-content img {
        object-fit: cover;
    }
</style>
