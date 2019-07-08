<template>
	<div>
		<!-- Users Table -->
		<vx-card title="Users List">
			<vs-button style="float: right;border-radius: 55px;margin-left: 20px;" icon-pack="feather" icon="icon-plus" class="mb-4 md:mb-0" to='/user/create'>Create User</vs-button>

			<vs-table search :data="users">
		      	<template slot="thead">
			        <vs-th sort-key="id">ID</vs-th>
			        <vs-th sort-key="first_name">Name</vs-th>
			        <vs-th sort-key="email">Email</vs-th>
			        <vs-th sort-key="mobile">Mobile</vs-th>
			        <vs-th>Action</vs-th>
		      	</template>
		      	<template slot-scope="{data}">
			        <vs-tr :key="indextr" v-for="(tr, indextr) in data">
			          	<vs-td :data="data[indextr].id">
			            	{{ data[indextr].id }}
			          	</vs-td>

			         	<vs-td :data="data[indextr].first_name">
			            	{{ data[indextr].first_name + ' ' + data[indextr].last_name}}
			          	</vs-td>

			          	<vs-td :data="data[indextr].email">
			            	{{ data[indextr].email }}
			          	</vs-td>

			         	 <vs-td :data="data[indextr].mobile">
			            	{{ data[indextr].mobile }}
			          	</vs-td>

			          	<vs-td>
			          		<vs-row>
			          			<div class="flex mb-4">
									  <div class="w-1/3">
									  		<vx-tooltip color="primary" text="View Data">
									  			<vs-button @click="hideTooltip(indextr)" :to="`/user/${data[indextr].id}`" radius color="primary" type="border" icon-pack="feather" icon="icon-eye"></vs-button>
									  		</vx-tooltip>
									  </div>
									  <div class="w-1/3" style="margin: 0 10px;">
									  		<vx-tooltip color="warning" text="Edit User">
									  			<vs-button @click="hideTooltip(indextr)" :to="`/user/edit/${data[indextr].id}`" radius color="warning" type="border" icon-pack="feather" icon="icon-edit"></vs-button>
									  		</vx-tooltip>
									  </div>
									  <div class="w-1/3">
									  		<vx-tooltip color="danger" text="Delete User">
									  			<vs-button radius color="danger" type="border" icon-pack="feather" icon="icon-trash" @click="confirmDeleteUser(data[indextr])"></vs-button>
									  		</vx-tooltip>
									  </div>
								</div>
							</vs-row>
			          	</vs-td>
			        </vs-tr>
		      	</template>
		    </vs-table>

    	</vx-card>
	</div>
</template>


<script>

export default {
	mounted() {
    	this.getData();
  	},
  	data() {
	    return {
	      	users: [],
	      	userIdToDelete: null,
	    }
  	},
  	methods: {

  		//Get A List Of All Users.
  		getData()
  		{
  			let fire = this;
			let config = {
				headers: {'Authorization': "Bearer " + store.state.tokens.access_token}
			};
			axios.get('/api/users', config).then(function(response){
	  			fire.users = response.data.users;
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
			let config = {
				headers: {'Authorization': "Bearer " + store.state.tokens.access_token}
			};
  			axios.delete(`/api/users/${this.userIdToDelete}`, config).then(function(response){
  				console.log(response);
	  			if(response.data.success) {
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
  		},

		hideTooltip(index){
			document.getElementsByClassName('vs-tooltip')[index].style.display='none'
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