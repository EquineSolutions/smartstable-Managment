<template>
	<div v-if="can('feature-list')">
		<vx-card title="Feature Information">
			<template v-if="feature">
				<b>ID: </b>  {{feature.id}}
				<vs-divider/>
				<b>Name: </b> {{feature.name}}
				<vs-divider/>
                <b>Key: </b> {{feature.key}}
                <vs-divider/>
                <b>Enable: </b> {{feature.enable}}
                <vs-divider/>
                <b>Priority: </b> {{feature.priority}}
                <vs-divider/>
                <b>Description: </b> {{feature.description}}
                <vs-divider/>
                <b>Created At: </b> {{feature.created_at}}
                <vs-divider/>

			</template>

			<template v-else>
				<vs-row>
					<vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
						<b>feature Is Not Available!</b>
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
    	this.getFeatureData();
  	},
  	data() {
	    return {
            feature: null
	    }
  	},
  	methods: {
  		//Display Feature Data.
  		getFeatureData()
  		{
			let fire = this;
	  		axios.get(`/api/features/${this.$route.params.id}`, store.state.config).then(function(response){
	  			fire.feature = response.data.data.feature;
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
