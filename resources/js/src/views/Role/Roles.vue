<template>
	<div>
		<!-- Roles Table -->
		<vx-card title="Roles List">
			<vs-button style="float: right;border-radius: 55px;margin-left: 20px;" icon-pack="feather" icon="icon-plus" class="mb-4 md:mb-0" to='/role/create'>Create Role</vs-button>

			<vs-table search :data="roles">
		      	<template slot="thead">
			        <vs-th sort-key="id">ID</vs-th>
			        <vs-th sort-key="first_name">Role</vs-th>
			        <vs-th>Action</vs-th>
		      	</template>
		      	<template slot-scope="{data}">
			        <vs-tr :key="indextr" v-for="(tr, indextr) in data">
			          	<vs-td :data="data[indextr].id">
			            	{{ data[indextr].id }}
			          	</vs-td>

			         	<vs-td :data="data[indextr].name">
			            	{{ data[indextr].name}}
			          	</vs-td>

			          	<vs-td>
			          		<vs-row>
			          			<div class="flex mb-4">
									  <div class="w-1/3">
									  		<vx-tooltip color="primary" text="View Data">
									  			<vs-button @click="hideTooltip" :to="`/role/${data[indextr].id}`" radius color="primary" type="border" icon-pack="feather" icon="icon-eye"></vs-button>
									  		</vx-tooltip>
									  </div>
									  <div class="w-1/3" style="margin: 0 10px;">
									  		<vx-tooltip color="warning" text="Edit Role">
									  			<vs-button @click="hideTooltip" :to="`/role/edit/${data[indextr].id}`" radius color="warning" type="border" icon-pack="feather" icon="icon-edit"></vs-button>
									  		</vx-tooltip>
									  </div>
									  <div class="w-1/3">
									  		<vx-tooltip color="danger" text="Delete Role">
									  			<vs-button radius color="danger" type="border" icon-pack="feather" icon="icon-trash" @click="confirmDeleteRole(data[indextr])"></vs-button>
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
	      	roles: [],
	      	roleIdToDelete: null,
	    }
  	},
  	methods: {
  		//Get A List Of All Roles.
  		getData()
  		{
  			let fire = this;
			let config = {
				headers: {'Authorization': "Bearer " + store.state.tokens.access_token}
			};
			axios.get('/api/roles', config).then(function(response){
	  			fire.roles = response.data.roles;
	  		}).catch(function(error){
	            console.log(error);
	        });
  		},

  		// Confirm Dialog To Delete The Role
  		confirmDeleteRole(role)
  		{
  			let fire = this;
  			this.roleIdToDelete = role.id;
  			this.$vs.dialog({
  				type: 'confirm',
		        color: 'danger',
		        title: `Are you sure!`,
		        text: 'This data can not be retrieved again.',
		        accept: fire.deleteRole
	      	});
  		},

  		//Delete A Single Role By RoleID.
  		deleteRole()
  		{
  			let fire = this;
			let config = {
				headers: {'Authorization': "Bearer " + store.state.tokens.access_token}
			};
  			axios.delete(`/api/roles/${this.roleIdToDelete}`, config).then(function(response){
	  			if(response.data.success) {
	              	fire.$vs.notify({
		                title: 'Success',
		                text: 'Role Successfully Deleted',
		                color:'success',
		                iconPack: 'feather',
		                icon: 'icon-check'
	              	});
					fire.roles = fire.roles.filter(function(value){return value.id != fire.roleIdToDelete;});
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

		//Hide Tool Tip After Navigation
		hideTooltip()
		{
			let el = document.getElementsByClassName('vs-tooltip');
			while (el.length > 0) {
				el[0].parentNode.removeChild(el[0]);
			}
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