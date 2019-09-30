<template>
    <ul>
        <vs-popup classContent="popup-example" title="Horse Parents Data" :active.sync="popupActive2">
            <div class="vx-row">
                <div class="vx-col md:w-1/2 w-full mt-5">
                    <vs-input label-placeholder="Father Name" v-model="selectedFatherName" />
                </div>
                <div class="vx-col md:w-1/2 w-full mt-5">
                    <vs-input label-placeholder="Mother Name" v-model="selectedMotherName" />
                </div>
            </div>


            <vs-divider></vs-divider>
            <vs-button @click="updateTree" size="small" style="float: right;" class="ml-5" color="primary" type="filled" icon-pack="feather" icon="icon-save">Save</vs-button>
            <vs-button @click="popupActive2=false" size="small" style="float: right;" color="danger" type="filled" icon-pack="feather" icon="icon-x">Cancel</vs-button>
        </vs-popup>

        <li v-if="horse.father != null">
            <a class="parent male">
                <span @click="editHorse(horse.father, true)">{{horse.father.name}}</span>
                <span @click="confirmDeleteHorse(horse.father.id, 0)" class="delete-btn">X</span>
            </a>
            <horse-tree v-if="horse.father.father != null || horse.father.mother != null" :horse="horse.father"></horse-tree>
        </li>
        <li v-if="horse.mother != null">
            <a class="parent female">
                <span @click="editHorse(horse.mother, false)">{{horse.mother.name}}</span>
                <span @click="confirmDeleteHorse(horse.mother.id, 1)" class="delete-btn">X</span>
            </a>
            <horse-tree v-if="horse.mother.father != null || horse.mother.mother != null" :horse="horse.mother"></horse-tree>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "horse-tree",
        mounted() {

        },
        props: {
            horse: {
                required: true,
                type: Object
            }
        },
        data: function () {
            return {
                popupActive2: false,
                selectedFatherName: '',
                selectedMotherName: '',
                isFather: null,

                horseIdToDelete: null,
                deleteIndex: null
            }
        },
        methods: {
            editHorse(horseData, isFather) {
                horseData.father==null?this.selectedFatherName='':this.selectedFatherName=horseData.father.name;
                horseData.mother==null?this.selectedMotherName='':this.selectedMotherName=horseData.mother.name;
                this.isFather = isFather;
                this.popupActive2=true;
            },

            updateTree() {
                if(this.selectedFatherName!=''){
                    if (this.isFather) {
                        if(this.horse.father.father == null) { //CREATE FATHER FOR FATHER
                            this.create(0, this.selectedFatherName, 's', this.horse.father.id);
                        } else { //UPDATE FATHER OF FATHER
                            this.edit(0, this.selectedFatherName, this.horse.father.father.id);
                        }
                    } else { //CREATE OR UPDATE FATHER OF MOTHER
                        if(this.horse.mother.father == null) {//CREATE FATHER FOR MOTHER
                            this.create(1, this.selectedFatherName, 's', this.horse.mother.id);
                        } else {//UPDATE FATHER OF MOTHER
                            this.edit(1, this.selectedFatherName, this.horse.mother.father.id);
                        }
                    }
                }

                if(this.selectedMotherName!='') {
                    // console.log(this.horse.father);
                    // console.log(this.isFather);
                    if (this.isFather) {
                        if (this.horse.father.mother == null) { //CREATE MOTHER FOR FATHER
                            this.create(2, this.selectedMotherName, 'm', this.horse.father.id);
                        } else { //UPDATE MOTHER OF FATHER
                            this.edit(2, this.selectedMotherName, this.horse.father.mother.id);
                        }
                    } else {//CREATE OR UPDATE MOTHER OF MOTHER
                        if (this.horse.mother.mother == null) {//CREATE MOTHER FOR MOTHER
                            this.create(3, this.selectedMotherName, 'm', this.horse.mother.id);
                        } else {//UPDATE MOTHER OF MOTHER
                            this.edit(3, this.selectedMotherName, this.horse.mother.mother.id);
                        }
                    }
                }
                this.popupActive2=false;
            },

            create(parentActionIndex, name, gender, horseID) {
                let formData = new FormData(),
                    fire = this;
                formData.append('name', name);
                formData.append('horse_id', this.$route.params.id);
                formData.append('horse_parent_id', horseID);
                formData.append('gender', gender);
                axios.post('/api/horse-parents', formData, store.state.config).then(function(response){
                    if(response.data.status === 200) {
                        switch (parentActionIndex) {
                            case 0:
                                fire.horse.father.father = response.data.data;
                                break;
                            case 1:
                                fire.horse.mother.father = response.data.data;
                                break;
                            case 2:
                                fire.horse.father.mother = response.data.data;
                                break;
                            case 3:
                                fire.horse.mother.mother = response.data.data;
                                break;
                        }
                        fire.vs_alert ('Success', response.data.message, 'success');
                    } else {
                        fire.vs_alert ('Oops!', response.data, 'danger');
                    }
                }).catch(function(error){
                    if (error.response.status === 422){ // Validation Error
                        let errors = error.response.data.errors;
                        fire.vs_alert ('Oops!', errors[Object.keys(errors)[0]][0], 'danger');
                    } else if(error.response.status === 403) { // Un-Authorized
                        fire.vs_alert ('Oops!', error.response.data.message, 'danger');
                        router.push({ name: "pageError403"});
                    } else if (error.response.status === 401){ // Un-Authenticated
                        router.push({ name: "pageLogin"})
                    }
                });
            },

            edit(parentActionIndex, name, horseID) {
                let formData = new FormData(),
                    fire = this;
                formData.append('name', name);

                axios.put(`/api/horse-parents/${horseID}`, {name: name}, store.state.config).then(function(response){
                    if(response.data.status === 200) {
                        switch (parentActionIndex) {
                            case 0:
                                fire.horse.father.father.name = name;
                                break;
                            case 1:
                                fire.horse.mother.father.name = name;
                                break;
                            case 2:
                                fire.horse.mother.father.name = name;
                                break;
                            case 3:
                                fire.horse.mother.mother.name = name;
                                break;
                        }
                        fire.vs_alert ('Success', response.data.message, 'success');
                    } else {
                        fire.vs_alert ('Oops!', response.data, 'danger');
                    }
                }).catch(function(error){
                    if (error.response.status === 422){ // Validation Error
                        let errors = error.response.data.errors;
                        fire.vs_alert ('Oops!', errors[Object.keys(errors)[0]][0], 'danger');
                    } else if(error.response.status === 403) { // Un-Authorized
                        fire.vs_alert ('Oops!', error.response.data.message, 'danger');
                        router.push({ name: "pageError403"});
                    } else if (error.response.status === 401){ // Un-Authenticated
                        router.push({ name: "pageLogin"})
                    }
                });
            },

            // Confirm Dialog To Delete The Horse
            confirmDeleteHorse(horseID, deleteIndex)
            {
                let fire = this;
                this.horseIdToDelete = horseID;
                this.deleteIndex = deleteIndex;
                this.$vs.dialog({
                    type: 'confirm',
                    color: 'danger',
                    title: `Are you sure!`,
                    text: 'This data can not be retrieved again.',
                    accept: fire.deleteParent
                });
            },

            deleteParent() {
                let fire = this;
                axios.delete(`/api/horse-parents/${this.horseIdToDelete}`, store.state.config).then(function(response){
                    if(response.data.status === 200) {
                        fire.vs_alert ('Success', 'Horse Successfully Deleted', 'success');
                        switch (fire.deleteIndex) {
                            case 0:
                                fire.horse.father = null;
                                break;
                            case 1:
                                fire.horse.mother = null;
                                break;
                        }
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
    .delete-btn {
        color: red;
        width: 10px;
        height: 10px;
        margin-left: 5px;
        border-radius: 50%;
        border: 1px solid red;
        padding: 2px;
    }
</style>
