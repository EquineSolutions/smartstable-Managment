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
<<<<<<< HEAD
          <br><br><br><hr><hr><br><br><br>
        <vx-card title='Admin Info'>

        <div class="vx-row">
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full" v-validate="'required|alpha'" icon-pack="feather" icon="icon-user" icon-no-border label-placeholder="First Name" v-model="admin_first_name" name='admin_first_name' />
            <span class="text-danger text-sm"  v-show="errors.has('admin_first_name')">{{ errors.first('admin_first_name') }}</span>
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full" v-validate="'required|alpha'" icon-pack="feather" icon="icon-user" icon-no-border label-placeholder="Last Name" v-model="admin_last_name" name='admin_last_name' />
            <span class="text-danger text-sm"  v-show="errors.has('admin_last_name')">{{ errors.first('admin_last_name') }}</span>
          </div>
        </div>
        <div class="vx-row">
          <div class="vx-col sm:w-1/2 w-full mb-6">
            <vs-input type="email" v-validate="'required|email'" class="w-full" icon-pack="feather" icon="icon-mail" icon-no-border label-placeholder="Email" v-model="admin_email" name='admin_email' />
            <span class="text-danger text-sm" v-show="errors.has('admin_email')">{{ errors.first('admin_email') }}</span>
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full" v-validate="'decimal:11'" icon-pack="feather" icon="icon-phone" icon-no-border label-placeholder="Mobile" v-model="admin_mobile" name='admin_mobile' />
            <span class="text-danger text-sm"  v-show="errors.has('admin_mobile')">{{ errors.first('admin_mobile') }}</span>
          </div>
        </div>
        <div class="vx-row">
          <div class="vx-col sm:w-1/2 w-full mb-6">
            <vs-input type="password" v-validate="'required'" icon-pack="feather" icon="icon-lock" icon-no-border label-placeholder="Password" name="admin_password" v-model="admin_password" class="w-full" />
            <span class="text-danger text-sm" v-show="errors.has('admin_password')">{{ errors.first('admin_password') }}</span>
          </div>
        </div>
        </vx-card>
=======

>>>>>>> 395173fd6b15045f21b3d44155c97327a3cfa53e
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
    }
  },
  methods: {

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
            formData.append("phone" , this.phone);
            formData.append("business_name",this.business_name);
            formData.append("business_type" , this.typeSelected);
            formData.append("admin_first_name" ,this.admin_first_name);
            formData.append("admin_email",this.admin_email);
            formData.append("admin_last_name" , this.admin_last_name);
            formData.append("admin_phone" , this.admin_phone);
            formData.append("admin_password" , this.admin_password);

          axios.post('/api/clubs', formData, store.state.config).then(function(response){
            if(response.data.status == 200) {
                fire.vs_alert ('Success', 'Club Successfully Added', 'success');
                fire.$router.push({ name: "club"})
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
