<template>
    <div>


        <vx-card title='Personal Information'>
            <vs-row>
                <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                    <vs-avatar size="200px" src="https://i.imgur.com/ezM6SJ5.png"/>
                </vs-col>
                <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                    <vs-button size="small" icon-pack="feather" icon="icon-edit" class="mb-4" to='/role/create'>Update Photo</vs-button>
                </vs-col>
            </vs-row>
            <vs-divider/>
            <vs-row>
                <vs-col vs-type="flex" vs-justify="left" vs-align="left" vs-w="12">
                    <b>Name: </b>&nbsp;{{user.first_name + ' ' + user.last_name}}
                </vs-col>
                <vs-divider/>
                <vs-col vs-type="flex" vs-justify="left" vs-align="left" vs-w="12">
                    <b>Email: </b>&nbsp;{{user.email}}
                </vs-col>
                <vs-divider/>
                <vs-col vs-type="flex" vs-justify="left" vs-align="left" vs-w="12">
                    <b>Mobile: </b>&nbsp;{{user.mobile}}
                </vs-col>
            </vs-row>
            <vs-row>
                <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                    <vs-button icon-pack="feather" icon="icon-edit" class="mb-4" :to="'/user/edit/'+user.id">Update Information</vs-button>
                </vs-col>
            </vs-row>
        </vx-card>

    </div>
</template>

<script>
    export default {
        mounted() {
            this.getUserData();
        },
        name: "Profile",
        data() {
            return {
                user: {
                    id: store.state.currentUser.id,
                    first_name: store.state.currentUser.first_name,
                    last_name: store.state.currentUser.last_name,
                    email: store.state.currentUser.email,
                    mobile: store.state.currentUser.mobile,
                    photo: store.state.currentUser.photo,
                },
            }
        },
        methods: {

            //Display User Data.
            getUserData()
            {
                let fire = this;
                let config = {
                    headers: {'Authorization': "Bearer " + store.state.tokens.access_token}
                };
                axios.get(`/api/users/${store.state.currentUser.id}`, config).then(function(response){
                    fire.user = response.data.data;
                }).catch(function(error){
                    console.log(error);
                });
            }
        }
    }
</script>

<style>

</style>