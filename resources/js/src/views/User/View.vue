<template>
	<div>
		<vx-card title="User Information">
			<b>ID: </b>  {{user.id}}
			<vs-divider/>
			<b>Name: </b> {{user.first_name + ' ' + user.last_name}}
			<vs-divider/>
			<b>Email: </b> {{user.email}}
			<vs-divider/>
			<b>Mobile: </b> {{user.mobile}}

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
	      	user: [],
	    }
  	},
  	methods: {

  		//Display User Data.
  		getUserData()
  		{
  			let fire = this;
            let config = {
                headers: {'Authorization': "Bearer " + store.state.tokens.access_token}
            };
	  		axios.get(`/api/users/${this.$route.params.id}`, config).then(function(response){
	  			fire.user = response.data.data;
	  		}).catch(function(error){
	            console.log(error);
	        }); 
  		}
  	}
}
</script>