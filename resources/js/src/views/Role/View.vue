<template>
	<div v-if="can('role-list')">
		<vx-card title="Role Information">
			<template v-if="role">
				<b>ID: </b>  {{role.id}}
				<vs-divider/>
				<b>Name: </b> {{role.name}}
				<vs-divider/>
				<b>Permissions: </b>
				<template v-for="(permission, index) in permissions">
					{{permission.name}}<template v-if="index != permissions.length-1"> // </template>
				</template>
			</template>

			<template v-else>
				<vs-row>
					<vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
						<b>Role Is Not Available!</b>
					</vs-col>
					<vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
						<vs-button @click="$router.go(-1)" size="small" type="gradient" icon-pack="feather" icon="icon-arrow-left">Go Back</vs-button>
					</vs-col>
				</vs-row>
			</template>
    	</vx-card>
	</div>
</template>


<script>

export default {
	beforeCreate(){
		this.$vs.loading({
			container: '#div-with-loading',
			scale: 0.6
		})
	},
	mounted() {
    	this.getRoleData();
  	},
  	data() {
	    return {
	      	role: null,
			permissions: null
	    }
  	},
  	methods: {
  		//Display Role Data.
  		getRoleData()
  		{
			let fire = this;
	  		axios.get(`/api/roles/${this.$route.params.id}`, store.state.config).then(function(response){
	  			fire.role = response.data.data.role;
	  			fire.permissions = response.data.data.rolePermissions;
	  		}).catch(function(error){
				if(error.response.status == 403) { // Un-Authorized
					fire.vs_alert ('Oops!', error.response.data.message, 'danger');
					router.push({ name: "pageError403"});
				} else if (error.response.status == 401){ // Un-Authenticated
					router.push({ name: "pageLogin"})
				}
	        }); 
  		}
  	}
}
</script>