<template>
  <div>
    <vx-card title='Create New Club'>
      <form>
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






export default {

  data() {
    return {

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
            formData.append("admin_first_name" ,this.admin_first_name);
            formData.append("admin_email",this.admin_email);
            formData.append("admin_last_name" , this.admin_last_name);
            formData.append("admin_phone" , this.admin_mobile);
            formData.append("admin_password" , this.admin_password);

          axios.post('/api/club/user', formData, store.state.config).then(function(response){
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
