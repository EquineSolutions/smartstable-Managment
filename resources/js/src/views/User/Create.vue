<template>
  <div v-if="can('add-users')">
    <vx-card title='Create New User'>
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
            <vs-input class="w-full" v-validate="'decimal:11'" icon-pack="feather" icon="icon-phone" icon-no-border label-placeholder="Mobile" v-model="mobile" name='mobile' />
            <span class="text-danger text-sm"  v-show="errors.has('mobile')">{{ errors.first('mobile') }}</span>
          </div>
        </div>
        <div class="vx-row">
          <div class="vx-col sm:w-1/2 w-full mb-6">
            <vs-input type="password" v-validate="'required'" icon-pack="feather" icon="icon-lock" icon-no-border label-placeholder="Password" name="password" v-model="password" class="w-full" ref="password" />
            <span class="text-danger text-sm" v-show="errors.has('password')">{{ errors.first('password') }}</span>
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input type="password" v-validate="'required|confirmed:password'" icon-pack="feather" icon="icon-lock" icon-no-border label-placeholder="Confirm Password" name="confirm_password" v-model="confirm_password" class="w-full" data-vv-as="password" />
            <span class="text-danger text-sm" v-show="errors.has('confirm_password')">{{ errors.first('confirm_password') }}</span>
          </div>
        </div>
        <div class="vx-row mt-5">
          <div class="vx-col w-full">
            <b>User Role:</b>
            <ul class="centerx">
              <li v-for="role in userRoles">
                <vs-radio v-model="user_role" :vs-value="role">{{role}}</vs-radio>
              </li>
            </ul>
          </div>
        </div>
        <div class="vx-row mt-10">
          <div class="vx-col w-full">
            <vs-button class="mr-3 mb-2" @click.prevent="submitForm">Submit</vs-button>
            <vs-button color="warning" type="border" class="mb-2" @click.prevent="fname = lname = email = mobile = password = confirm_password = '';">Reset</vs-button>
          </div>
        </div>
      </form>
    </vx-card>
  </div>
</template>

<script>
  // For custom error message
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
    this.getUserRoles();
  },
  data() {
    return {
      userRoles: [],

      first_name: "",
      last_name: "",
      email: "",
      mobile: "",
      password: "",
      confirm_password: "",
      user_role: ""
    }
  },
  methods: {
    getUserRoles()
    {
      let fire = this;
      axios.get('/api/users/create', store.state.config).then(function(response){
        fire.userRoles = response.data.data;
        fire.user_role = fire.userRoles[0];
      }).catch(function(error){
        if(error.response.status == 403) { // Un-Authorized
          fire.vs_alert ('Oops!', error.response.data.message, 'danger');
            fire.$router.push({ name: "pageError403"});
        } else if (error.response.status == 401){ // Un-Authenticated
            fire.$router.push({ name: "pageLogin"})
        }
      });
    },

    submitForm()
    {
      let fire = this;
      this.$validator.validateAll().then(result => {
        if(result) {
          // if form have no errors

          const formData = new FormData();
          formData.append('first_name', this.first_name);
          formData.append('last_name', this.last_name);
          formData.append('email', this.email);
          formData.append('mobile', this.mobile);
          formData.append('password', this.password);
          formData.append('roles', this.user_role);

          axios.post('/api/users', formData, store.state.config).then(function(response){
            if(response.data.status == 200) {
              fire.vs_alert ('Success', 'User Successfully Added', 'success');
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
