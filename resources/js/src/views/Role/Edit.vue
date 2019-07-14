<template>
  <div>
    <vx-card title='Update Role'>
      <form>
        <div class="vx-row">
          <div class="vx-col w-full mb-2">
            <vs-input class="w-full" v-validate="'required'" icon-pack="feather" icon="icon-shield" icon-no-border label-placeholder="Role Name" v-model="role_name" name='role_name' />
            <span class="text-danger text-sm"  v-show="errors.has('role_name')">{{ errors.first('role_name') }}</span>
          </div>
        </div>

        <div class="vx-row mt-5">
          <div class="vx-col w-full">
            <b>Role Permissions:</b>
            <ul class="centerx">
              <li v-for="(permission, index) in permissions" :key="index">
                <vs-checkbox v-model="rolePermissions" :vs-value="permission.name">{{permission.name}}</vs-checkbox>
              </li>
            </ul>
          </div>
        </div>
        <div class="vx-row mt-10">
          <div class="vx-col w-full">
            <vs-button icon-pack="feather" icon="icon-save" class="mr-3 mb-2" @click.prevent="submitForm">Save Role</vs-button>
          </div>
        </div>
      </form>
    </vx-card>
  </div>
</template>

<script>

  import router from '../../router.js'

  // For custom error message
  import { Validator } from 'vee-validate';
  const dict = {
    custom: {
      role_name: {
        required: 'Please enter the role name'
      }
    }
  };

  // register custom messages
  Validator.localize('en', dict);


  export default {
    mounted() {
      this.getRole();
    },
    data() {
      return {
        permissions: [],

        role_name: "",
        rolePermissions: []
      }
    },
    methods: {
        //Get All Roles
      getRole()
      {
        let fire = this;
        axios.get(`/api/roles/${this.$route.params.id}/edit`, store.state.config).then(function(response){
          fire.permissions = response.data.permissions;
          fire.role_name = response.data.role.name;
          for (let i =0; i<response.data.rolePermissions.length; i++){
            fire.rolePermissions.push(response.data.rolePermissions[i].name)
          }
        }).catch(function(error){
          console.log(error);
        });
      },

        //Update Role Submission
      submitForm()
      {
        let fire = this;
        this.$validator.validateAll().then(result => {
          if(result) {
            let data = {
              name: this.role_name,
              permission: this.rolePermissions,
            };

            axios.put(`/api/roles/${this.$route.params.id}`, data, store.state.config).then(function(response){
              if(response.data.success) {
                  fire.vs_alert ('Success', 'Role Successfully Updated', 'success');
                  router.push({ name: "role"});
              } else {
                  fire.vs_alert ('Oops!', response.data, 'danger');
              }
            }).catch(function(error){
                fire.vs_alert ('Oops!', 'An error has been occurred.', 'danger');
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
