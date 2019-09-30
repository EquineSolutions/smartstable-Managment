<template>
    <div>
        <vx-card title="Club List">
            <vs-button  style="float: right;border-radius: 55px;margin-left: 20px;" icon-pack="feather" icon="icon-plus" class="mb-4 md:mb-0" to='/club/create'>Create Club</vs-button>

            <vs-table search :data="clubs">
                <template slot="thead">
                    <vs-th sort-key="id">ID</vs-th>
                    <vs-th sort-key="first_name">Club</vs-th>
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
                        <vs-td>
                            <vs-row>
                                <div class="flex mb-4">

                                    <div class="w-1/3">
                                        <vs-button @click="hideTooltip" :to="`/club/${data[indextr].id}`" radius color="primary" type="border" icon-pack="feather" icon="icon-eye"></vs-button>
                                    </div>
                                    <div class="w-1/3" style="margin: 0 10px;">
                                        <vs-button @click="hideTooltip" :to="`/club/edit/${data[indextr].id}`" radius color="warning" type="border" icon-pack="feather" icon="icon-edit"></vs-button>
                                    </div>
                                    <div class="w-1/3">
                                        <vs-button radius color="danger" type="border" icon-pack="feather" icon="icon-trash" @click="confirmDeleteFeature(data[indextr])"></vs-button>
                                    </div>
                                    <div class="w-1/3">
                                        <vs-button @click="hideTooltip" :to="`/club/assign/${data[indextr].id}`" radius color="primary" type="border" icon-pack="feather" icon="icon-build"></vs-button>
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
                clubs: [],
            }
        },
        methods: {
            //Get A List Of All Features.
            getData()
            {
                let fire = this;
                axios.get('/api/clubs', store.state.config).then(function(response){
                    fire.clubs = response.data.data.clubs;
                }).catch(function(error){
                    if(error.response.status == 403) { // Un-Authorized
                        fire.vs_alert ('Oops!', error.response.data.message, 'danger');
                        router.push({ name: "pageError403"});
                    } else if (error.response.status == 401){ // Un-Authenticated
                        router.push({ name: "pageLogin"})
                    }
                });
            },

            // Confirm Dialog To Delete The Feature
            confirmDeleteFeature(feature)
            {
                let fire = this;
                this.featureIdToDelete = feature.id;
                this.$vs.dialog({
                    type: 'confirm',
                    color: 'danger',
                    title: `Are you sure!`,
                    text: 'This data can not be retrieved again.',
                    accept: fire.deleteFeature
                });
            },

            //Delete A Single feature By FeatureID.
            deleteFeature()
            {
                let fire = this;
                axios.delete(`/api/features/${this.featureIdToDelete}`, store.state.config).then(function(response){
                    if(response.data.status == 200) {
                        fire.vs_alert ('Success', 'Feature Successfully Deleted.', 'success');
                        fire.features = fire.features.filter(function(value){return value.id != fire.featureIdToDelete;});
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
