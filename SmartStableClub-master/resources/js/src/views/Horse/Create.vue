<template>
    <div v-if="can('add-horses')">
        <vx-card title="Create New Horse">
            <form-wizard color="rgba(var(--vs-primary), 1)" errorColor="rgba(var(--vs-danger), 1)" :title="'Horse Form'" :subtitle="'Create a new horse'" finishButtonText="Submit">
                <tab-content title="Horse Information" class="mb-5" :before-change="validateHorseInfo">
                    <form data-vv-scope="step-1">
                        <div class="vx-row">
                            <div class="vx-col md:w-1/2 w-full mt-5">
                                <vs-input name="name" v-validate="'required'" icon-pack="feather" icon="icon-user" label-placeholder="Name" v-model="formData.name" class="is-label-placeholder w-full" />
                                <span class="text-danger" v-show="errors.has('name')">{{ errors.first('name') }}</span>
                            </div>

                            <div class="vx-col md:w-1/2 w-full mt-5">
                                <label>Birth Date</label>
                                <br>
                                <flat-pickr v-validate="'required|date_format:yyyy-MM-dd'" v-model="formData.birth_year" name="date_of_birth" placeholder="Select Birth Date"/>
                                <br>
                                <span v-if="formData.birth_year!=null"><b>Age: </b>{{GetAge(formData.birth_year)}} Year(s)</span>
                                <br>
                                <span class="text-danger" v-show="errors.has('date_of_birth')">{{ errors.first('date_of_birth') }}</span>
                            </div>

                            <div class="vx-col md:w-1/2 w-full mt-5">
                                <vs-select v-model="formData.discipline" class="w-full select-large" label="Discipline">
                                    <vs-select-item :key="index" :value="item" :text="item" v-for="(item,index) in disciplines" class="w-full" />
                                </vs-select>
                                <span class="text-danger" v-show="errors.has('discipline')">{{ errors.first('discipline') }}</span>
                            </div>
                            <div class="vx-col md:w-1/2 w-full mt-5">
                                <vs-select v-model="formData.sex" class="w-full select-large" label="Sex">
                                    <vs-select-item :key="index" :value="item.value" :text="item.name" v-for="(item,index) in genders" class="w-full" />
                                </vs-select>
                                <span class="text-danger" v-show="errors.has('gender')">{{ errors.first('gender') }}</span>
                            </div>
                            <div class="vx-col md:w-1/2 w-full mt-5">
                                <vs-select v-model="formData.color" class="w-full select-large" label="Color">
                                    <vs-select-item :key="index" :value="item" :text="item" v-for="(item,index) in colors" class="w-full" />
                                </vs-select>
                                <span class="text-danger" v-show="errors.has('color')">{{ errors.first('color') }}</span>
                            </div>

                            <div class="vx-col md:w-1/2 w-full mt-5">
                                <label>Horse Photos</label>
                                <br>
                                <input type="file" class="form-control" @change="uploadHorseImages" multiple>
                            </div>

                            <div class="vx-col md:w-1/2 w-full mt-5">
                                <vs-input name="fei_id" v-validate="'required'" icon-pack="feather" icon="icon-zap" label-placeholder="FEI ID" v-model="formData.fei_id" class="is-label-placeholder w-full" />
                                <span class="text-danger" v-show="errors.has('fei_id')">{{ errors.first('fei_id') }}</span>
                            </div>

                            <div class="vx-col md:w-1/2 w-full mt-5">
                                <label>FEI Expiry Date</label>
                                <br>
                                <flat-pickr v-model="formData.fei_expiry_date" v-validate="'required|date_format:yyyy-MM-dd'" name="fei_expiry_date" placeholder="Select Birthdate"/>
                                <br>
                                <span class="text-danger" v-show="errors.has('fei_expiry_date')">{{ errors.first('fei_expiry_date') }}</span>
                            </div>

                            <div class="vx-col md:w-1/2 w-full mt-5">
                                <label>National ID</label>
                                <vs-input-number v-model="formData.national_id" style="width: fit-content;"/>
                                <span class="text-danger" v-show="errors.has('national_id')">{{ errors.first('national_id') }}</span>
                            </div>

                            <div class="vx-col md:w-1/2 w-full mt-5">
                                <label>Renewal Date</label>
                                <br>
                                <flat-pickr v-model="formData.renewal" v-validate="'required|date_format:yyyy-MM-dd'" name="renewal_date" placeholder="Select Renewal Date"/>
                                <br>
                                <span class="text-danger" v-show="errors.has('renewal_date')">{{ errors.first('renewal_date') }}</span>
                            </div>

                            <div class="vx-col md:w-1/2 w-full mt-5">
                                <ul>
                                    <li>
                                        <vs-checkbox vs-value="1" v-model="formData.pony">Pony</vs-checkbox>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </form>
                </tab-content>

                <!-- tab 2 content -->
                <tab-content title="Identification" class="mb-5" :before-change="validateIdentification">
                    <form data-vv-scope="step-2">
                        <div class="vx-row">
                            <div class="vx-col md:w-1/3 w-full mt-5">
                                <label>Height</label>
                                <vs-input-number v-model="formData.height" style="width: fit-content;"/>
                                <span class="text-danger" v-show="errors.has('height')">{{ errors.first('height') }}</span>
                            </div>

                            <div class="vx-col md:w-1/3 w-full mt-5">
                                <label>Micro Chip Number</label>
                                <vs-input-number v-model="formData.microchip_number" style="width: fit-content;"/>
                                <span class="text-danger" v-show="errors.has('micro_chip_number')">{{ errors.first('micro_chip_number') }}</span>
                            </div>

                            <div class="vx-col md:w-1/3 w-full mt-5">
                                <label>Upload Drawings</label>
                                <br>
                                <input type="file" class="form-control" @change="uploadDrawing" multiple>
                            </div>
                        </div>
                    </form>
                </tab-content>

                <!-- tab 3 content -->
                <tab-content title="Breeding Details" class="mb-5" :before-change="validateBreeding">
                    <form data-vv-scope="step-3">
                        <div class="vx-row">
                            <div class="vx-col md:w-1/2 w-full mt-5">
                                <vs-input name="stud_book" v-validate="'required'" icon-pack="feather" icon="icon-book" label-placeholder="Stud Book" v-model="formData.stud_book" class="is-label-placeholder w-full" />
                                <span class="text-danger" v-show="errors.has('stud_book')">{{ errors.first('stud_book') }}</span>
                            </div>

                            <div class="vx-col md:w-1/2 w-full mt-5">
                                <vs-select v-model="formData.country_of_birth" class="w-full select-large" label="Country Of Birth">
                                    <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in cityOptions" class="w-full" />
                                </vs-select>
                                <span class="text-danger" v-show="errors.has('country_of_birth')">{{ errors.first('country_of_birth') }}</span>
                            </div>

                            <div class="vx-col md:w-1/2 w-full mt-5">
                                <vs-input name="sire" v-validate="'required'" icon-pack="feather" icon="icon-edit-2" label-placeholder="Sire Name" v-model="formData.father" class="is-label-placeholder w-full" />
                                <span class="text-danger" v-show="errors.has('sire')">{{ errors.first('sire') }}</span>
                            </div>

                            <div class="vx-col md:w-1/2 w-full mt-5">
                                <vs-input name="dam" v-validate="'required'" icon-pack="feather" icon="icon-edit-2" label-placeholder="Dam Name" v-model="formData.mother" class="is-label-placeholder w-full" />
                                <span class="text-danger" v-show="errors.has('dam')">{{ errors.first('dam') }}</span>
                            </div>

                            <div class="vx-col md:w-1/3 w-full mt-5">
                                <label>Upload Breeding Files</label>
                                <br>
                                <input type="file" class="form-control" @change="uploadBreeding" multiple>
                            </div>
                        </div>
                    </form>
                </tab-content>
            </form-wizard>
        </vx-card>
    </div>
</template>

<script>

    import { FormWizard, TabContent } from 'vue-form-wizard';
    import 'vue-form-wizard/dist/vue-form-wizard.min.css';
    //
    import flatPickr from 'vue-flatpickr-component';
    import 'flatpickr/dist/flatpickr.css';

    export default {
        name: "Create",
        mounted() {
            this.getData();
        },
        data: function () {
            return {
                formData: {
                    name: "",
                    fei_id: 0,
                    national_id: 0,
                    country_of_birth: "new-york",
                    sex: 0,
                    color: "Bay",
                    discipline: "Jumping",
                    birth_year: null,
                    renewal: null,
                    fei_expiry_date: null,
                    images: [],
                    pony: 0,

                    height: 0,
                    microchip_number: 0,
                    identification: [],

                    breeding: [],
                    stud_book: '',
                    father: '',
                    mother: ''
                },


                genders: [],
                cityOptions: [
                    { text: "New York", value: "new-york" },
                    { text: "Chicago", value: "chicago" },
                    { text: "San Francisco", value: "san-francisco" },
                    { text: "Boston", value: "boston" },
                ],
                colors: [],
                disciplines: [],
            }
        },
        methods: {
            getData() {
                let fire = this;
                axios.get('/api/horses/create', store.state.config).then(function(response){
                    fire.genders = response.data.data.gender;
                    fire.colors = response.data.data.colors;
                    fire.disciplines = response.data.data.discipline;
                }).catch(function(error){
                    if(error.response.status === 403) { // Un-Authorized
                        fire.vs_alert ('Oops!', error.response.data.message, 'danger');
                        fire.$router.push({ name: "pageError403"});
                    } else if (error.response.status === 401) { // Un-Authenticated
                        fire.$router.push({ name: "pageLogin"})
                    }
                });
            },

            validateHorseInfo() {
                return new Promise((resolve, reject) => {
                    this.$validator.validateAll('step-1').then(result => {
                        if (result) {
                            resolve(true)
                        } else {
                            reject("correct all values");
                            this.$vs.notify({
                                title: 'Oops!',
                                text: 'Please, Solve out all the errors to continue.',
                                color: 'danger'
                            });
                        }
                    })
                });
            },

            validateIdentification() {
                return new Promise((resolve, reject) => {
                    this.$validator.validateAll('step-2').then(result => {
                        if (result) {
                            resolve(true)
                        } else {
                            reject("correct all values");
                        }
                    })
                })
            },

            validateBreeding() {
                let fire = this;
                return new Promise((resolve, reject) => {
                    this.$validator.validateAll('step-3').then(result => {
                        if (result) {
                            fire.submitHorse();
                            resolve(true);
                        } else {
                            reject("correct all values");
                        }
                    })
                })
            },

            uploadHorseImages(e)
            {
                let selectedImages = e.target.files;
                if (!selectedImages.length) {
                    return false;
                }
                for (let i = 0; i < selectedImages.length; i++) {
                    this.formData.images.push(selectedImages[i]);
                }
            },

            uploadDrawing(e)
            {
                let selectedFiles = e.target.files;
                if (!selectedFiles.length) {
                    return false;
                }
                for (let i = 0; i < selectedFiles.length; i++) {
                    this.formData.identification.push(selectedFiles[i]);
                }
            },

            uploadBreeding(e)
            {
                let selectedFiles = e.target.files;
                if (!selectedFiles.length) {
                    return false;
                }
                for (let i = 0; i < selectedFiles.length; i++) {
                    this.formData.breeding.push(selectedFiles[i]);
                }
            },

            submitHorse() {
                let fire = this,
                    form_data = new FormData();

                for (let key in this.formData ) {
                    if (key == 'images' || key == 'identification' || key == 'breeding'){
                        for (let i=0; i<this.formData[key].length; i++){
                            form_data.append(key+'[]', this.formData[key][i]);
                        }
                    }
                    else {
                        form_data.append(key, this.formData[key]);
                    }
                }
                axios.post('/api/horses', form_data, store.state.config).then(function(response){
                    if(response.data.status === 200) {
                        fire.vs_alert ('Success', response.data.message, 'success');
                        fire.$router.push({ name: "horse"})
                    } else {
                        fire.vs_alert ('Oops!', response.data, 'danger');
                    }
                }).catch(function(error){
                    if (error.response.status === 422){ // Validation Error
                        let errors = error.response.data.errors;
                        fire.vs_alert ('Oops!', errors[Object.keys(errors)[0]][0], 'danger');
                    } else if(error.response.status === 403) { // Un-Authorized
                        fire.vs_alert ('Oops!', error.response.data.message, 'danger');
                        fire.$router.push({ name: "pageError403"});
                    } else if (error.response.status === 401){ // Un-Authenticated
                        fire.$router.push({ name: "pageLogin"})
                    }
                });
            },

            //Calculates the age
            GetAge(date) {
                let today = new Date(),
                    birthDate= new Date(date),
                    age = today.getFullYear() - birthDate.getFullYear(),
                    m = today.getMonth() - birthDate.getMonth();
                if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                    age--;
                }
                return age>0?age:0;
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
        components: {
            FormWizard,
            TabContent,
            flatPickr
        }
    }
</script>

<style>

</style>
