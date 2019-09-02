<template>
    <div v-if="can('view-users')">
        <vx-card title="Client Information">
            <template v-if="client != null">
                <b>ID: </b>  {{client.id}}
                <vs-divider/>
                <b>Name: </b> {{client.first_name + ' ' + client.last_name}}
                <vs-divider/>
                <b>Email: </b> {{client.email}}
                <vs-divider/>
                <b>Mobile: </b> {{client.mobile}}
                <vs-divider/>
                <b>Birth Date: </b> 18-10-1997
                <vs-divider/>
                <vs-chip color="success" v-if="client.email_verified_at!=null">Verified</vs-chip>
                <vs-chip color="danger" v-else>Not Verified</vs-chip>
                <br>
            </template>
            <template v-else>
                <vs-row>
                    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                        <b>Client Is Not Available!</b>
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
            this.getClientData();
        },
        data() {
            return {
                client: null,
            }
        },
        methods: {

            //Display Client Data.
            getClientData()
            {
                let fire = this;
                axios.get(`/api/users/${this.$route.params.id}`, store.state.config).then(function(response){
                    fire.client = response.data.data;
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
