<template>

    <div>
        <p v-if="loading"  >Loading ... </p>
        <vx-card v-if="!loading" title="Club List">
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
                                    <div class="w-1/3" style="margin: 0 15px;">
                                        <vs-button @click="approve_club(data[indextr].id)" radius color="primary" type="border" icon-pack="feather" icon="icon-user-check"></vs-button>
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
                loading: false
            }
        },
        methods: {
            approve_club(club){
                let self = this;
                this.club = club;
                this.loading = true //the loading begin
                axios.get(`/api/approve_club/${this.club}`, store.state.config).then(function(response){
                    self.loading = false
                }).catch(function(error){
                    self.loading = false
                    fire.vs_alert ('Oops!', error.response.data.message, 'danger');
                    router.push({ name: "pageError403"});

                });
            },


            getData()
            {
                let fire = this;
                fire.loading = true //the loading begin
                axios.get('/api/pending_club', store.state.config).then(function(response){
                    fire.loading = false
                    fire.clubs = response.data.data.clubs;
                }).catch(function(error){
                    fire.loading = false
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
