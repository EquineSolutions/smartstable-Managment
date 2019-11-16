<template>
  <div>
    <vx-card title='Create New Club'>
      <form>
          <div class="vx-row">
              <div class="vx-col sm:w-1/2 w-full mb-2">
                  <vs-input class="w-full" v-validate="'required|alpha'" icon-pack="feather" icon="icon-user" icon-no-border label-placeholder="First Name" v-model="first_name" name='first_name' />
                  <span class="text-danger text-sm"  v-show="errors.has('first_name')">{{ errors.first('first_name') }}</span>
              </div>
              <div class="vx-col sm:w-1/2 w-full mb-2">
                  <vs-input class="w-full" v-validate="'required|alpha'" icon-pack="feather" icon="icon-user" icon-no-border label-placeholder="Middle Name" v-model="middle_name" name='middle_name' />
                  <span class="text-danger text-sm"  v-show="errors.has('middle_name')">{{ errors.first('middle_name') }}</span>
              </div>
              <div class="vx-col sm:w-1/2 w-full mb-2">
                  <vs-input class="w-full" v-validate="'required|alpha'" icon-pack="feather" icon="icon-user" icon-no-border label-placeholder="Last Name" v-model="last_name" name='last_name' />
                  <span class="text-danger text-sm"  v-show="errors.has('last_name')">{{ errors.first('last_name') }}</span>
              </div>
          </div>
          <div class="vx-row">
              <div class="vx-col sm:w-1/2 w-full mb-6">
                  <vs-input type="email" v-validate="'required|email'" class="w-full" icon-pack="feather" icon="icon-mail" icon-no-border label-placeholder="Email" v-model="email" name='email' />
                  <span class="text-danger text-sm" v-show="errors.has('email')">{{ errors.first('email') }}</span>
              </div>
              <div class="vx-col sm:w-1/2 w-full mb-2">
                  <vs-input class="w-full" v-validate="'decimal:11'" icon-pack="feather" icon="icon-phone" icon-no-border label-placeholder="Phone" v-model="phone" name='phone' />
                  <span class="text-danger text-sm"  v-show="errors.has('mobile')">{{ errors.first('mobile') }}</span>
              </div>
          </div>
          <div class="vx-row">
              <div class="vx-col sm:w-1/2 w-full mb-2">
                  <vs-input class="w-full" v-validate="'required|alpha'" icon-pack="feather" icon="icon-user" icon-no-border label-placeholder="Business Name" v-model="business_name" name='business_name' />
              </div>
          </div>

          <div class="vx-row mt-5">
              <div class="vx-col w-full">
                  <b>Business Type:</b>
                  <ul class="centerx">
                      <li v-for="(feature, index) in businessTypes" :key="index">
                          <vs-checkbox v-model="typeSelected"  :vs-value="feature.id">{{feature.name}}</vs-checkbox>
                      </li>
                  </ul>
              </div>
          </div>


        <vx-card title='Assign Packages'>
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
        </vx-card>
        <div class="vx-row mt-10">
            <div class="vx-col w-full">
                <vs-button class="mr-3 mb-2" @click.prevent="submitForm">Submit</vs-button>
                <vs-button color="warning" type="border" class="mb-2" @click.prevent="role_name = '';">Reset</vs-button>
            </div>
        </div>

      </form>
    </vx-card>
  </div>
</template>

<script>

    import { Validator } from 'vee-validate';
    const dict = {
        custom: {
            first_name: {
                required: 'Please enter your first name',
                alpha: "Your first name may only contain alphabetic characters"
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

        mounted() {
            this.getFeatures();
        },

        data() {
            return {
                businessTypes: [
                    { "id": "stable_center", "name": "Stable Center" },
                    { "id": "stable", "name": "Stable" },
                    { "id": "riding_school", "name": "Riding School" },
                    { "id": "veterinary", "name": "Veterinary" },
                    { "id": "farrier", "name": "Farrier" }
                ],
                typeSelected:[],
                clubPackages: [],
                packages :[]
            }
        },
    methods: {

        getFeatures()
            {
                let fire = this;
                axios.get('/api/packages', store.state.config).then(function(response){
                    console.log(response);
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

    //Create Role Submission
        submitForm()
        {
            let fire = this;
            this.$validator.validateAll().then(result => {
            if(result) {
                // if form have no errors
                const formData = new FormData();
                formData.append("first_name" ,this.first_name);
                formData.append("email",this.email);
                formData.append("last_name" , this.last_name);
                formData.append("middle_name" , this.middle_name);
                formData.append("phone" , this.phone);
                formData.append("business_name",this.business_name);
                formData.append("business_type" , this.typeSelected);

                fire.clubPackages.map(function (value, index) {
                    formData.append('packages[]', value);
                });

                axios.post('/api/club/add', formData, store.state.config).then(function(response){
                    if(response.data.status == 200) {
                        if(typeof response.data.error !== 'undefined'){
                            fire.vs_alert ('Oops!', response.data.error, 'warning');
                        }else{
                            fire.vs_alert ('Success', 'Club Successfully Added', 'success');
                            fire.$router.push({ name: "club"})
                        }

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
