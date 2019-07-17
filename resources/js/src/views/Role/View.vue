<template>
	<div>
		<vx-card title="Role Information">
			<b>ID: </b>  {{role.id}}
			<vs-divider/>
			<b>Name: </b> {{role.name}}
			<vs-divider/>
			<b>Permissions: </b>
			<template v-for="(permission, index) in permissions">
				{{permission.name}}<template v-if="index != permissions.length-1"> // </template>
			</template>
    	</vx-card>
	</div>
</template>


<script>

export default {
	mounted() {
    	this.getRoleData();
  	},
  	data() {
	    return {
	      	role: [],
			permissions: []
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
	            console.log(error);
	        }); 
  		}
  	}
}
</script>