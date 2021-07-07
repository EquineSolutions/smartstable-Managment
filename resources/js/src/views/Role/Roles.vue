<template>
	<div v-if="can('browse-roles')">
		<!-- Roles Table -->
		<vx-card title="Roles List">
			<vs-button v-if="can('add-roles')" style="float: right;border-radius: 55px;margin-left: 20px;" icon-pack="feather" icon="icon-plus" class="mb-4 md:mb-0" to='/role/create'>Create Role</vs-button>

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
									  <div class="w-1/3" v-if="can('view-roles')">
											<vs-button @click="hideTooltip" :to="`/role/${data[indextr].id}`" radius color="primary" type="border" icon-pack="feather" icon="icon-eye"></vs-button>
									  </div>
									  <div class="w-1/3" style="margin: 0 10px;" v-if="can('edit-roles')">
											<vs-button @click="hideTooltip" :to="`/role/edit/${data[indextr].id}`" radius color="warning" type="border" icon-pack="feather" icon="icon-edit"></vs-button>
									  </div>
									  <div class="w-1/3" v-if="can('delete-roles')">
											<vs-button radius color="danger" type="border" icon-pack="feather" icon="icon-trash" @click="confirmDeleteRole(data[indextr])"></vs-button>
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
			axios.get('/api/roles', store.state.config).then(function(response){
	  			fire.roles = response.data.data.roles;
	  		}).catch(function(error){
				if(error.response.status == 403) { // Un-Authorized
					fire.vs_alert ('Oops!', error.response.data.message, 'danger');
					router.push({ name: "pageError403"});
				} else if (error.response.status == 401){ // Un-Authenticated
					router.push({ name: "pageLogin"})
				}
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
  			axios.delete(`/api/roles/${this.roleIdToDelete}`, store.state.config).then(function(response){
	  			if(response.data.status == 200) {
					fire.vs_alert ('Success', 'Role Successfully Deleted.', 'success');
					fire.roles = fire.roles.filter(function(value){return value.id != fire.roleIdToDelete;});
				} else {
					fire.vs_alert ('Oops!', 'An error has been occurred.', 'danger');
	            }
	  		}).catch(function(error){
				if(error.response.status == 403) { // Un-Authorized
					fire.vs_alert ('Oops!', error.response.data.message, 'danger');
					router.push({ name: "pageError403"});
				} else if (error.response.status == 401){ // Un-Authenticated
					router.push({ name: "pageLogin"})
				}
	        }); 
  		},

		//Hide Tool Tip After Navigation
		hideTooltip()
		{
			let el = document.getElementsByClassName('vs-tooltip');
			while (el.length > 0) {
				el[0].parentNode.removeChild(el[0]);
			}
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
