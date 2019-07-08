<template>
  <div>
    <vx-card title='Update Role'>
      <form>
        <div class="vx-row">
          <div class="vx-col w-full mb-2">
            <vs-input class="w-full" v-validate="'required|alpha'" icon-pack="feather" icon="icon-shield" icon-no-border label-placeholder="Role Name" v-model="role_name" name='role_name' />
            <span class="text-danger text-sm"  v-show="errors.has('role_name')">{{ errors.first('role_name') }}</span>
          </div>
        </div>

        <div class="vx-row mt-5">
          <div class="vx-col w-full">
            <b>Role Permissions:</b>
            <ul class="centerx">
              <li v-for="(permission, index) in permissions" :key="index">
                <vs-checkbox v-model="rolePermissions" :vs-value="permission">{{permission}}</vs-checkbox>
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
        required: 'Please enter the role name',
        alpha: "The role may only contain alphabetic characters"
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
      getRole()
      {
        let fire = this;
        let config = {
          headers: {'Authorization': "Bearer " + store.state.tokens.access_token}
        };

        axios.get(`/api/roles/${this.$route.params.id}/edit`, config).then(function(response){
          fire.permissions = response.data.roles;
          fire.role_name = response.data.role_name;
          fire.rolePermissions = response.data.rolePermissions;
        }).catch(function(error){
          console.log(error);
        });
      },

      submitForm()
      {
        let fire = this;
        this.$validator.validateAll().then(result => {
          if(result) {
            let config = {
              headers: {'Authorization': "Bearer " + store.state.tokens.access_token}
            };
            // if form have no errors
            const formData = new FormData();
            formData.append('role_name', this.role_name);
            formData.append('permissions', this.rolePermissions);

            axios.put(`/api/roles/${this.$route.params.id}`, formData, config).then(function(response){
              console.log(response);
              if(response.data.success) {
                fire.$vs.notify({
                  title:'Success',
                  text:'Role Successfully Updated',
                  color:'success',
                  iconPack: 'feather',
                  icon:'icon-check'
                });
                router.push({ name: "role"})
              } else {
                fire.$vs.notify({
                  title:'Oops!',
                  text: response.data,
                  color:'danger'
                });

              }
            }).catch(function(error){
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

<style>
  .centerx li {
    display: inline-flex;
    margin: 10px;
  }
</style>
