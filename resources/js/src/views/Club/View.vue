<template>
	<div>
		<vx-card title="Club Information">
			<template v-if="club != null">
				<b>Name: </b> {{club.first_name}}
				<vs-divider/>
				<b>Email: </b> {{club.email}}
				<vs-divider/>
				<b>Mobile: </b> {{club.phone}}
                <vs-divider/>
                <vx-card title="Packages">
                    <template v-for="(club_package, index) in packages">
					    {{ club_package.name}}<template v-if="index != packages.length-1"> // </template>
				    </template>
                </vx-card>
                <vs-divider/>

			</template>
			<template v-else>
				<vs-row>
					<vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
						<b>Club Is Not Available!</b>
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
	mounted() {
    	this.getClubData();
  	},
  	data() {
	    return {
              club: null,
              packages: null,
	    }
  	},
  	methods: {

  		//Display Club Data.
  		getClubData()
  		{
			let fire = this;
	  		axios.get(`/api/clubs/${this.$route.params.id}`, store.state.config).then(function(response){
                  fire.club = response.data.data.club;
                  fire.packages = response.data.data.packages;
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
