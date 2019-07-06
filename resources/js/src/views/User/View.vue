<template>
	<div>
		<!-- Users Table -->
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
	      	userIdToDelete: null,
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
	  			fire.user = response.data.user;
	  		}).catch(function(error){
	            console.log(error);
	        }); 
  		},

  		// Confirm Dialog To Delete The User
  		confirmDeleteUser(user) 
  		{
  			let fire = this;
  			this.userIdToDelete = user.id;
  			this.$vs.dialog({
  				type: 'confirm',
		        color: 'danger',
		        title: `Are you sure!`,
		        text: 'This data can not be retrieved again.',
		        accept: fire.deleteUser
	      	});
  		},

  		//Delete A Single User By UserID.
  		deleteUser()
  		{
  			let fire = this;
  			axios.delete(`/api/user/${this.userIdToDelete}`).then(function(response){
	  			if(response.data.response) {
	              	fire.$vs.notify({
		                title:'Success',
		                text:'User Successfully Deleted',
		                color:'success',
		                iconPack: 'feather',
		                icon:'icon-check'
	              	});
					fire.users = fire.users.filter(function(value){return value.id != fire.userIdToDelete;});
            	} else {
	              	fire.$vs.notify({
	                	title:'Oops!',
	                	text:'An error has been occurred.',
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
  		}
  	}
}
</script>


<style>
.vs-con-table .vs-table--header .vs-table--search {
    padding: 0px;
}

.vs-table--content {
    margin-top: 20px;
}
</style>