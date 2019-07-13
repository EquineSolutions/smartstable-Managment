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
                    <b>Name: </b>&nbsp;Mohamed Swilam
                </vs-col>
                <vs-divider/>
                <vs-col vs-type="flex" vs-justify="left" vs-align="left" vs-w="12">
                    <b>Email: </b>&nbsp;mohamed_swilam@hotmail.com
                </vs-col>
                <vs-divider/>
                <vs-col vs-type="flex" vs-justify="left" vs-align="left" vs-w="12">
                    <b>Mobile: </b>&nbsp;01096436702
                </vs-col>
            </vs-row>
            <vs-row>
                <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                    <vs-button icon-pack="feather" icon="icon-edit" class="mb-4" to='/role/create'>Update Information</vs-button>
                </vs-col>
            </vs-row>
        </vx-card>

    </div>
</template>

<script>
    export default {
        name: "Profile"
    }
</script>

<style>

</style>