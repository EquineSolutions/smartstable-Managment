<template>
  <div>
    <vx-card title='Create New Role'>
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
      required: 'Please enter the role name'
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
    //Get All Permissions
    getPermissions()
    {
      let fire = this;
      axios.get('/api/roles/create', store.state.config).then(function(response){
        fire.permissions = response.data.permission;
      }).catch(function(error){
        console.log(error);
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
          formData.append('name', this.role_name);
          for (var i = 0; i < fire.rolePermissions.length; i++) {
            formData.append('permission[]', fire.rolePermissions[i]);
          }

          axios.post('/api/roles', formData, store.state.config).then(function(response){
            if(response.data.success) {
              fire.vs_alert ('Success', 'Role Successfully Added', 'success');
              router.push({ name: "role"})
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
