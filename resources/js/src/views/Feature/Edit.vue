<template>
    <div v-if="can('feature-edit')">
        <div>
            <vx-card title='Update feature'>
                <form>
                    <div class="vx-row">
                        <div class="vx-col sm:w-1/2 w-full mb-2">
                            <vs-input class="w-full" v-validate="'required'" icon-pack="feather" icon="icon-user" icon-no-border label-placeholder="Name" v-model="name" name='name' />
                            <span class="text-danger text-sm"  v-show="errors.has('name')">{{ errors.first('name') }}</span>
                        </div>
                    </div>
                    <div class="vx-row">
                        <label>Enable</label>
                        <div class="vx-col sm:w-1/2 w-full mb-2">
                            <input type="checkbox" v-model="checked">
                            {{checked ? "yes" : "no"}}

                        </div>
                    </div>
                    <div class="vx-row">
                        <div class="vx-col sm:w-1/2 w-full mb-6">
                            <vs-input class="w-full" v-validate="'required'" icon-pack="feather" icon="icon-mail" icon-no-border label-placeholder="key" v-model="key" name='key' />
                            <span class="text-danger text-sm" v-show="errors.has('key')">{{ errors.first('key') }}</span>
                        </div>
                    </div>
                    <div class="vx-row">
                        <label for="feature_description">Description</label>
                        <div class="vx-col sm:w-1/2 w-full mb-2">
                            <vs-textarea class="w-full"  v-validate="'required'" id="feature_description" icon-pack="feather" icon="icon-phone" icon-no-border label-placeholder="Description" v-model="description" name='description' />
                            <span class="text-danger text-sm"  v-show="errors.has('description')">{{ errors.first('description') }}</span>
                        </div>
                    </div>
                    <div class="vx-row">
                        <label for="feature_priority">Priority</label>
                        <div class="vx-col sm:w-1/2 w-full mb-2">
                            <select v-model="selected" id="feature_priority" name="feature_priority">
                                <option value="basic">Basic</option>
                                <option value="optional">Optional</option>
                            </select>
                            <span>Selected: {{ selected }}</span>
                        </div>
                    </div>

                    <div class="vx-row">
                        <div class="vx-col w-full">
                            <vs-button class="mr-3 mb-2" @click.prevent="submitForm">Update</vs-button>
                        </div>
                    </div>
                </form>
            </vx-card>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            this.getData();
        },
        data() {
            return {
                name: "",
                description: '',
                key: "",
                checked: "",
                selected: ""

            }
        },
        methods: {
            //Get Feature Data
            getData(){
                let fire = this;
                axios.get(`/api/features/${this.$route.params.id}/edit`, store.state.config).then(function(response){
                    let feature = response.data.data.feature;
                    fire.name = feature.name;
                    fire.description = feature.description;
                    fire.key = feature.key;
                    fire.checked = feature.enable;
                    fire.selected = feature.priority;
                }).catch(function(error){
                    if(error.response.status == 403) { // Un-Authorized
                        fire.vs_alert ('Oops!', error.response.data.message, 'danger');
                        fire.$router.push({ name: "pageError403"});
                    } else if (error.response.status == 401){ // Un-Authenticated
                        fire.$router.push({ name: "pageLogin"})
                    }
                });
            },

            //Update Feature Submission
            submitForm() {
                let fire = this;
                this.$validator.validateAll().then(result => {
                    if(result) {
                        // if form have no errors
                        let data = {
                            name: this.name,
                            description: this.description,
                            key: this.key,
                            enable: this.checked,
                            priority: this.selected
                        };
                        axios.put(`/api/features/${this.$route.params.id}`, data, store.state.config).then(function(response){
                            if(response.data.status == 200) {
                                fire.vs_alert ('Success', 'Feature Successfully Updated', 'success');
                                fire.$router.push({ name: "feature"})
                            } else {
                                fire.vs_alert ('Oops!', response.data, 'danger');
                            }
                        }).catch(function(error){
                            if (error.response.status == 422){ // Validation Error
                                let errors = error.response.data.errors;
                                fire.vs_alert ('Oops!', errors[Object.keys(errors)[0]][0], 'danger');
                            } else if(error.response.status == 403) { // Un-Authorized
                                fire.vs_alert ('Oops!', error.response.data.message, 'danger');
                                fire.$router.push({ name: "pageError403"});
                            } else if (error.response.status == 401){ // Un-Authenticated
                                fire.$router.push({ name: "pageLogin"})
                            }
                        });
                    } else {
                        this.vs_alert ('Oops!', 'Please, solve all issues before submitting.', 'danger');
                    }
                })
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

        },
    }
</script>
