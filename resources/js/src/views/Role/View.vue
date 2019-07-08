<template>
	<div>
		<vx-card title="Role Information">
			<b>ID: </b>  {{role.id}}
			<vs-divider/>
			<b>Name: </b> {{role.name}}
			<vs-divider/>
			<b>Permissions: </b>
			<template v-for="permission in role.permissions">
				 {{permission.name}}
			</template>
    	</vx-card>
	</div>
</template>


<script>

export default {
	mounted() {
    	this.getUserData();
  	},
  	data() {
	    return {
	      	role: [],
	    }
  	},
  	methods: {
  		//Display Role Data.
  		getRoleData()
  		{
  			let fire = this;
            let config = {
                headers: {'Authorization': "Bearer " + store.state.tokens.access_token}
            };
	  		axios.get(`/api/roles/${this.$route.params.id}`, config).then(function(response){
	  			console.log(response);
	  			fire.role = response.data;
	  		}).catch(function(error){
	            console.log(error);
	        }); 
  		}
  	}
}
</script>