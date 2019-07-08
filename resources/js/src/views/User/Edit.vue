<template>
  <div>
    <div>
      <vx-card title='Update User'>
        <form>
          <div class="vx-row">
            <div class="vx-col sm:w-1/2 w-full mb-2">
              <vs-input class="w-full" v-validate="'required|alpha'" icon-pack="feather" icon="icon-user" icon-no-border label-placeholder="First Name*" v-model="fname" name='fname' />
              <span class="text-danger text-sm"  v-show="errors.has('fname')">{{ errors.first('fname') }}</span>
            </div>
            <div class="vx-col sm:w-1/2 w-full mb-2">
              <vs-input class="w-full" v-validate="'required|alpha'" icon-pack="feather" icon="icon-user" icon-no-border label-placeholder="Last Name*" v-model="lname" name='lname' />
              <span class="text-danger text-sm"  v-show="errors.has('lname')">{{ errors.first('lname') }}</span>
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col sm:w-1/2 w-full mb-6">
              <vs-input type="email" v-validate="'required|email'" class="w-full" icon-pack="feather" icon="icon-mail" icon-no-border label-placeholder="Email*" v-model="email" name='email' />
              <span class="text-danger text-sm" v-show="errors.has('email')">{{ errors.first('email') }}</span>
            </div>
            <div class="vx-col sm:w-1/2 w-full mb-2">
              <vs-input class="w-full" v-validate="'decimal:11'" icon-pack="feather" icon="icon-phone" icon-no-border label-placeholder="Mobile*" v-model="mobile" name='mobile' />
              <span class="text-danger text-sm"  v-show="errors.has('mobile')">{{ errors.first('mobile') }}</span>
            </div>
          </div>

          <div class="vx-row">
            <div class="vx-col sm:w-1/2 w-full mb-6">
              <vs-input type="password" icon-pack="feather" icon="icon-lock" icon-no-border label-placeholder="Password" name="password" v-bind="password" class="w-full" ref="password" />
              <span class="text-danger text-sm" v-show="errors.has('password')">{{ errors.first('password') }}</span>
            </div>
            <div class="vx-col sm:w-1/2 w-full mb-2">
              <vs-input type="password" v-validate="'confirmed:password'" icon-pack="feather" icon="icon-lock" icon-no-border label-placeholder="Confirm Password" name="confirm_password" v-model="confirm_password" class="w-full" data-vv-as="password" />
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

          <div class="vx-row">
            <div class="vx-col w-full">
              <vs-button class="mr-3 mb-2" @click.prevent="submitForm">Update</vs-button>
            </div>
          </div>
        </form>
      </vx-card>
    </div>
  </div>
  </template>

<script>
  import router from '../../router.js'
  // For custom error message
  import { Validator } from 'vee-validate';
  const dict = {
    custom: {
      fname: {
        required: 'Please enter your first name',
        alpha: "Your first name may only contain alphabetic characters"
      },
      lname: {
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
      this.getData();
    },
    data() {
      return {
        userRoles: [],

        fname: "",
        lname: "",
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
        let config = {
          headers: {'Authorization': "Bearer " + store.state.tokens.access_token}
        };

        // axios.get(`/api/users/${his.$route.params.id}}`, config).then(function(response){
        //   console.log(response);
        //   fire.userRoles = response.data.roles;
        //   fire.user_role = fire.userRoles[0];
        // }).catch(function(error){
        //   console.log(error);
        // });
      },

      getData(){
        let fire = this;
        let config = {
          headers: {'Authorization': "Bearer " + store.state.tokens.access_token}
        };
        axios.get(`/api/users/${this.$route.params.id}/edit`, config).then(function(response){
          console.log(response);
          let user = response.data.user;
          fire.fname = user.first_name;
          fire.lname = user.last_name;
          fire.email = user.email;
          fire.mobile = user.mobile;
          fire.password = '';
          fire.userRoles = response.data.roles;
          fire.user_role = response.data.userRole;
        }).catch(function(error){
          console.log(error);
        });
      },
      submitForm() {
        let fire = this;
        this.$validator.validateAll().then(result => {
          if(result) {
            // if form have no errors
            let data = {
              first_name: this.fname,
              last_name: this.lname,
              email: this.email,
              mobile: this.mobile,
              password: this.password,
              roles: this.user_role
            };

            let config = {
              headers: {'Authorization': "Bearer " + store.state.tokens.access_token}
            };

            axios.put(`/api/users/${fire.$route.params.id}`, data, config).then(function(response){
              if(response.data.success) {
                console.log(response);
                fire.$vs.notify({
                  title:'Success',
                  text:'User Successfully Updated',
                  color:'success',
                  iconPack: 'feather',
                  icon:'icon-check'
                });
                router.push({ name: "user"})
              } else {
                fire.$vs.notify({
                  title:'Oops!',
                  text: response.data,
                  color:'danger'
                });
              }
            }).catch(function(error){
              // console.log(error);
              fire.$vs.notify({
                title:'Oops!',
                text:'An error has been occurred.',
                color:'danger'
              });
            });
          }else{
            fire.$vs.notify({
              title:'Oops!',
              text:'Please, solve all issues before submitting.',
              color:'danger'
            });
          }
        })
      }
    },
  }
</script>