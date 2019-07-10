<template>
  <div>
    <vx-card title='Create New Role'>
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
            <vs-button class="mr-3 mb-2" @click.prevent="submitForm">Submit</vs-button>
            <vs-button color="warning" type="border" class="mb-2" @click.prevent="role_name = '';">Reset</vs-button>
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
    this.getPermissions();
  },
  data() {
    return {
      permissions: [],

      role_name: "",
      rolePermissions: []
    }
  },
  methods: {
    getPermissions()
    {
      let fire = this;
      let config = {
        headers: {'Authorization': "Bearer " + store.state.tokens.access_token}
      };

      axios.get('/api/roles/create', config).then(function(response){
        fire.permissions = response.data.roles;
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
          console.log(store.state.tokens.access_token);

          // if form have no errors
          const formData = new FormData();
          formData.append('role_name', this.role_name);
          formData.append('permissions', this.rolePermissions);

          axios.post('/api/roles', formData, config).then(function(response){
            console.log(response);
            if(response.data.success) {
              fire.$vs.notify({
                title:'Success',
                text:'Role Successfully Added',
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

<style>
  .centerx li {
    display: inline-flex;
    margin: 10px;
  }
</style>
