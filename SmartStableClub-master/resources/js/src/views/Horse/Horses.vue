<template>
    <div v-if="can('browse-horses')">
        <!-- Horses Table -->
        <vx-card
            title="Horses List"
            :hasNavigationButton="true"
            buttonURL="/horse/create"
            buttonText="Create Horse"
            buttonIcon="icon-plus"
            buttonPermission="add-horses"
        >

            <vs-table search :data="horses">
                <template slot="thead">
                    <vs-th sort-key="id">ID</vs-th>
                    <vs-th sort-key="name">Name</vs-th>
                    <vs-th sort-key="fei_id">FEI_ID</vs-th>
                    <vs-th sort-key="sex">Gender</vs-th>
                    <vs-th>Action</vs-th>
                </template>
                <template slot-scope="{data}">
                    <vs-tr :key="indextr" v-for="(horse, indextr) in data">
                        <vs-td :data="horse.id">
                            {{ horse.id }}
                        </vs-td>

                        <vs-td :data="horse.name">
                            {{ horse.name}}
                        </vs-td>

                        <vs-td :data="horse.fei_id">
                            {{ horse.fei_id}}
                        </vs-td>

                        <vs-td :data="horse.sex">
                            {{ horse.sex.name }}
                        </vs-td>

                        <vs-td>
                            <vs-row>
                                <div class="flex mb-4">
                                    <div class="w-1/3">
                                        <vs-button v-if="can('view-horses')" @click="redirect('view-horse', horse.id)" radius color="primary" type="border" icon-pack="feather" icon="icon-eye"></vs-button>
                                    </div>
                                    <div class="w-1/3" style="margin: 0 10px;">
                                        <vs-button v-if="can('edit-horses')" @click="redirect('edit-horse', horse.id)" radius color="warning" type="border" icon-pack="feather" icon="icon-edit"></vs-button>
                                    </div>
                                    <div class="w-1/3">
                                        <vs-button v-if="can('delete-horses')" radius color="danger" type="border" icon-pack="feather" icon="icon-trash" @click="confirmDeleteHorse(horse)"></vs-button>
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
        name: "Horses",
        mounted() {
            this.getData();
        },
        data: function () {
            return {
                horseIdToDelete: null,
                horses: []
            }
        },
        methods: {
            //Get A List Of All Horses.
            getData()
            {
                // this.horses = horsesData.data;
                let fire = this;
                axios.get('/api/horses', store.state.config).then(function(response){
                    fire.horses = response.data.data;
                }).catch(function(error){
                    if(error.response.status == 403) { // Un-Authorized
                        fire.vs_alert ('Oops!', error.response.data.message, 'danger');
                        router.push({ name: "pageError403"});
                    } else if (error.response.status == 401){ // Un-Authenticated
                        router.push({ name: "pageLogin"})
                    }
                });
            },

            // Confirm Dialog To Delete The Horse
            confirmDeleteHorse(horse)
            {
                let fire = this;
                this.horseIdToDelete = horse.id;
                this.$vs.dialog({
                    type: 'confirm',
                    color: 'danger',
                    title: `Are you sure!`,
                    text: 'This data can not be retrieved again.',
                    accept: fire.deleteHorse
                });
            },

            //Delete A Single Horse By HorseID.
            deleteHorse()
            {
                let fire = this;
                axios.delete(`/api/horses/${this.horseIdToDelete}`, store.state.config).then(function(response){
                    if(response.data.status === 200) {
                        fire.vs_alert ('Success', 'Horse Successfully Deleted', 'success');
                        fire.horses = fire.horses.filter(function(value){return value.id != fire.horseIdToDelete;});
                    } else {
                        fire.vs_alert ('Oops!', 'An error has been occurred.', 'danger');
                    }
                }).catch(function(error){
                    if(error.response.status === 403) { // Un-Authorized
                        fire.vs_alert ('Oops!', error.response.data.message, 'danger');
                        router.push({ name: "pageError403"});
                    } else if (error.response.status === 401){ // Un-Authenticated
                        router.push({ name: "pageLogin"})
                    }
                });
            },

            //Navigate To A New Page With Route Name And horseID
            redirect(name, horseID)
            {
                // this.hideTooltip();
                this.$router.push({
                    name: name,
                    params: { id: horseID }
                });
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

<style scoped>

</style>
