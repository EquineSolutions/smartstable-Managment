<template>
	<div v-if="can('view-packages')">
		<vx-card title="Package Information">
			<template v-if="package">
                <img :src='package.logo' />
                <vs-divider/>
				<b>ID: </b>  {{package.id}}
				<vs-divider/>
				<b>Name: </b> {{package.name}}
				<vs-divider/>
                <b>Duration: </b> {{package.duration}}
                <vs-divider/>
                <b>Enable: </b> {{package.enable}}
                <vs-divider/>
                <b>Price: </b> {{package.price}}
                <vs-divider/>
                <b>Description: </b> {{package.description}}
                <vs-divider/>
<!--                <b>logo: </b> <img :src="package.logo">-->
                <vs-divider/>
                <b>Created At: </b> {{package.created_at}}
                <vs-divider/>
				<b>Features: </b>
				<template v-for="(feature, index) in features">
					{{feature.name}}<template v-if="index != features.length-1"> // </template>
				</template>
			</template>

			<template v-else>
				<vs-row>
					<vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
						<b>package Is Not Available!</b>
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
    	this.getPackageData();
  	},
  	data() {
	    return {
            package: null,
            features: null
	    }
  	},
  	methods: {
  		//Display Package Data.
  		getPackageData()
  		{
			let fire = this;
	  		axios.get(`/api/packages/${this.$route.params.id}`, store.state.config).then(function(response){
	  			fire.package = response.data.data.package;
	  			fire.features = response.data.data.features;
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
