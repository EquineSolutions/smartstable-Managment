<template>
  <div  v-if="can('edit-roles')">
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
                  <ul v-for="(group, groupName) in permissions">
                      <br>
                      <vs-checkbox v-model="groupPermissions" :vs-value="groupName" @change="groupPressed(group)"><b>{{groupName}}</b></vs-checkbox>
                      <li class="ml-8" v-for="(permission, index) in group" :key="index">
                          <vs-checkbox v-model="rolePermissions" :vs-value="permission.name">{{permission.display_name}}</vs-checkbox>
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
        rolePermissions: [],
          groupPermissions:[]
      }
    },
    methods: {
        //Get All Roles
      getRole()
      {
        let fire = this;
        axios.get(`/api/roles/${this.$route.params.id}/edit`, store.state.config).then(function(response){
          fire.permissions = response.data.data.permission;
          fire.role_name = response.data.data.role.name;
          for (let i =0; i<response.data.data.rolePermissions.length; i++){
            fire.rolePermissions.push(response.data.data.rolePermissions[i].name)
          }
        }).catch(function(error){
          if(error.response.status == 403) { // Un-Authorized
            fire.vs_alert ('Oops!', error.response.data.message, 'danger');
              fire.$router.push({ name: "pageError403"});
          } else if (error.response.status == 401){ // Un-Authenticated
              fire.$router.push({ name: "pageLogin"})
          }
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
              if(response.data.status == 200) {
                  fire.vs_alert ('Success', 'Role Successfully Updated', 'success');
                  fire.$router.push({ name: "role"});
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

        //Check and Un-Check by group
        groupPressed(group)
        {
            if (this.groupPermissions.includes(group[0].group)) {
                for(var i = 0; i< group.length; i++)
                {
                    if (!this.rolePermissions.includes(group[i].name))
                        this.rolePermissions.push(group[i].name)
                }
            } else {
                for(var i = 0; i< group.length; i++)
                {
                    if (this.rolePermissions.includes(group[i].name))
                        this.rolePermissions.splice(this.rolePermissions.indexOf(group[i].name), 1);
                }
            }
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
