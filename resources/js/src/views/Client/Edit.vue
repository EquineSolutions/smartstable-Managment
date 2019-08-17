<template>
    <div v-if="can('add-users')">
        <vx-card title='Edit Client Information'>
            <form>
                <div class="vx-row">
                    <div class="vx-col sm:w-1/3 w-full mb-2">
                        <vs-input class="w-full" v-validate="'required|alpha'" icon-pack="feather" icon="icon-user" icon-no-border label-placeholder="First Name" v-model="clientFormData.first_name" name='first_name' />
                        <span class="text-danger text-sm"  v-show="errors.has('first_name')">{{ errors.first('first_name') }}</span>
                    </div>
                    <div class="vx-col sm:w-1/3 w-full mb-2">
                        <vs-input class="w-full" v-validate="'required|alpha'" icon-pack="feather" icon="icon-user" icon-no-border label-placeholder="Middle Name" v-model="clientFormData.middle_name" name='middle_name' />
                        <span class="text-danger text-sm"  v-show="errors.has('middle_name')">{{ errors.first('middle_name') }}</span>
                    </div>
                    <div class="vx-col sm:w-1/3 w-full mb-2">
                        <vs-input class="w-full" v-validate="'required|alpha'" icon-pack="feather" icon="icon-user" icon-no-border label-placeholder="Last Name" v-model="clientFormData.last_name" name='last_name' />
                        <span class="text-danger text-sm"  v-show="errors.has('last_name')">{{ errors.first('last_name') }}</span>
                    </div>
                </div>
                <div class="vx-row">
                    <div class="vx-col sm:w-1/2 w-full mb-2">
                        <vs-input type="email" v-validate="'required|email'" class="w-full" icon-pack="feather" icon="icon-mail" icon-no-border label-placeholder="Email" v-model="clientFormData.email" name='email' />
                        <span class="text-danger text-sm" v-show="errors.has('email')">{{ errors.first('email') }}</span>
                    </div>
                    <div class="vx-col sm:w-1/2 w-full mb-2">
                        <vs-input class="w-full" v-validate="'decimal:11'" icon-pack="feather" icon="icon-phone" icon-no-border label-placeholder="Mobile" v-model="clientFormData.mobile" name='mobile' />
                        <span class="text-danger text-sm"  v-show="errors.has('mobile')">{{ errors.first('mobile') }}</span>
                    </div>
                </div>
                <div class="vx-row">
                    <div class="vx-col md:w-1/2 w-full mt-2">
                        <label>Birth Date</label>
                        <br>
                        <flat-pickr v-validate="'required|date_format:yyyy-MM-dd'" v-model="clientFormData.birth_year" name="date_of_birth" placeholder="Select Birth Date"/>
                        <br>
                        <span v-if="clientFormData.birth_year!=null"><b>Age: </b>{{GetAge(clientFormData.birth_year)}} Year(s)</span>
                        <br>
                        <span class="text-danger" v-show="errors.has('date_of_birth')">{{ errors.first('date_of_birth') }}</span>
                    </div>
                </div>
                <div class="vx-row mt-10">
                    <div class="vx-col w-full">
                        <vs-button icon-pack="feather" icon="icon-save" class="mb-2" @click.prevent="submitForm">Save Information</vs-button>
                    </div>
                </div>
            </form>
        </vx-card>
    </div>
</template>

<script>

    //For Date Picker
    import flatPickr from 'vue-flatpickr-component';
    import 'flatpickr/dist/flatpickr.css';

    // For custom error message
    import { Validator } from 'vee-validate';
    const dict = {
        custom: {
            first_name: {
                required: 'Please enter your first name',
                alpha: "Your first name may only contain alphabetic characters"
            },
            middle_name: {
                required: 'Please enter your middle name',
                alpha: "Your middle name may only contain alphabetic characters"
            },
            last_name: {
                required: 'Please enter your last name',
                alpha: "Your last name may only contain alphabetic characters"
            },
        }
    };

    // register custom messages
    Validator.localize('en', dict);

    export default {
        name: 'Edit',
        mounted() {
            this.getClientsData();
        },
        data() {
            return {
                clientFormData: {
                    first_name: "",
                    middle_name: "",
                    last_name: "",
                    email: "",
                    mobile: "",
                    birth_year: ''
                }
            }
        },
        methods: {
            getClientsData()
            {
                this.clientFormData = {
                    first_name: "Mohamed",
                    middle_name: "Ehab",
                    last_name: "Swilam",
                    email: "mohamed_swilam@hotmail.com",
                    mobile: "01096436702",
                    birth_year: '1997-10-18'
                }
            },
            submitForm()
            {
                let fire = this;
                this.$validator.validateAll().then(result => {
                    if(result) {
                        // if form have no errors

                        const formData = new FormData();
                        formData.append('first_name', this.first_name);
                        formData.append('middle_name', this.middle_name);
                        formData.append('last_name', this.last_name);
                        formData.append('email', this.email);
                        formData.append('mobile', this.mobile);

                        axios.post('/api/users', formData, store.state.config).then(function(response){
                            if(response.data.status == 200) {
                                fire.vs_alert ('Success', 'Client Successfully Added', 'success');
                                fire.$router.push({ name: "user"})
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

            //Calculates the age
            GetAge(date) {
                let today = new Date(),
                    birthDate= new Date(date),
                    age = today.getFullYear() - birthDate.getFullYear(),
                    m = today.getMonth() - birthDate.getMonth();
                if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                    age--;
                }
                return age>0?age:0;
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
        components: {
            flatPickr
        }
    }
</script>

<style>
</style>
