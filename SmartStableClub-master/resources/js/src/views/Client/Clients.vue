<template>
    <div v-if="can('browse-users')">
        <!-- Clients Table -->
        <vx-card
            title="Clients List"
            :hasNavigationButton="true"
            buttonURL="/client/create"
            buttonText="Create Client"
            buttonIcon="icon-plus"
            buttonPermission="add-users"
        >
            <vs-table search :data="clients">
                <template slot="thead">
                    <vs-th sort-key="id">ID</vs-th>
                    <vs-th sort-key="first_name">Name</vs-th>
                    <vs-th sort-key="email">Email</vs-th>
                    <vs-th sort-key="mobile">Mobile</vs-th>
                    <vs-th>Is Verified</vs-th>
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
                            <vs-chip color="success" v-if="data[indextr].email_verified_at!=null">Verified</vs-chip>
                            <vs-chip color="danger" v-else>Not Verified</vs-chip>
                        </vs-td>

                        <vs-td>
                            <vs-row>
                                <div class="flex mb-4">
                                    <div class="w-1/3" v-if="can('view-users')">
                                        <vs-button @click="redirect('view-client', data[indextr].id)" radius color="primary" type="border" icon-pack="feather" icon="icon-eye"></vs-button>
                                    </div>

                                    <div class="w-1/3" style="margin: 0 10px;" v-if="can('edit-users')">
                                        <vs-button @click="redirect('edit-client', data[indextr].id)" radius color="warning" type="border" icon-pack="feather" icon="icon-edit"></vs-button>
                                    </div>

                                    <div class="w-1/3" v-if="can('delete-users')">
                                        <vs-button radius color="danger" type="border" icon-pack="feather" icon="icon-trash" @click="confirmDeleteClient(data[indextr])"></vs-button>
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
        name: 'Clients',
        mounted() {
            this.getData();
        },
        data() {
            return {
                clients: [],
                clientIDToDelete: null,
            }
        },
        methods: {

            //Get A List Of All Clients.
            getData()
            {
                let fire = this;
                axios.get('/api/users', store.state.config).then(function(response){
                    fire.clients = response.data.data;
                }).catch(function(error){
                    if(error.response.status == 403) { // Un-Authorized
                        fire.vs_alert ('Oops!', error.response.data.message, 'danger');
                        router.push({ name: "pageError403"});
                    } else if (error.response.status == 401){ // Un-Authenticated
                        router.push({ name: "pageLogin"})
                    }
                });
            },

            // Confirm Dialog To Delete The Client
            confirmDeleteClient(client)
            {
                let fire = this;
                this.clientIDToDelete = client.id;
                this.$vs.dialog({
                    type: 'confirm',
                    color: 'danger',
                    title: `Are you sure!`,
                    text: 'This data can not be retrieved again.',
                    accept: fire.deleteClient
                });
            },

            //Delete A Single Client By ClientID.
            deleteClient()
            {
                let fire = this;
                axios.delete(`/api/clients/${this.clientIDToDelete}`, store.state.config).then(function(response){
                    if(response.data.status == 200) {
                        fire.vs_alert ('Success', 'Client Successfully Deleted', 'success');
                        fire.clients = fire.clients.filter(function(value){return value.id != fire.clientIDToDelete;});
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

            //Navigate To A New Page With Route Name And ClientID
            redirect(name, clientID)
            {
                this.$router.push({
                    name: name,
                    params: { id: clientID }
                });
            },

            //Hide Tool Tip Before Navigation
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
