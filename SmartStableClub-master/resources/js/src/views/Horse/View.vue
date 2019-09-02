<template>
    <vx-card title="Horse Information" v-if="can('view-horses')">
        <vs-tabs alignment="fixed">
            <vs-tab label="Horse Details">
                <div class="mt-5" v-if="isLoaded">
                    <b>ID: </b>  {{horse.id}}
                    <vs-divider/>
                    <b>Name: </b> {{horse.name}}
                    <vs-divider/>
                    <b>FEI_ID: </b> {{horse.fei_id}}
                    <vs-divider/>
                    <b>FEI Expiry Date: </b> {{horse.fei_expiry_date}}
                    <vs-divider/>
                    <b>Gender: </b>{{horse.sex.name}}
                    <vs-divider/>
                    <b>Birth Date: </b> {{horse.birth_year}}
                    <vs-divider/>
                    <b>Country Of Birth: </b> {{horse.country_of_birth}}
                    <vs-divider/>
                    <b>Height: </b> {{horse.height}}
                    <vs-divider/>
                    <b>National ID: </b> {{horse.national_id}}
                    <vs-divider/>
                    <b>Renewal: </b> {{horse.renewal}}
                    <vs-divider/>
                    <b>Color: </b> {{horse.color}}
                    <vs-divider/>
                    <b>Stud Book: </b> {{horse.stud_book}}
                    <vs-divider/>
                    <b>Microchip Number: </b> {{horse.microchip_number}}
                    <vs-divider/>
                    <b>Pony: </b> {{horse.pony}}
                    <vs-divider/>
                    <vs-button size="small" v-if="horse.identification_draw_a != ''" @click="redirect(horse.identification_draw_a)" color="primary">Identification Draw 1</vs-button>
                    <vs-button size="small" v-if="horse.identification_draw_b != ''" @click="redirect(horse.identification_draw_b)" color="primary">Identification Draw 2</vs-button>
                    <vs-button size="small" v-if="horse.breeding_details_a != ''" @click="redirect(horse.breeding_details_a)" color="primary">Breeding Details 1</vs-button>
                    <vs-button size="small" v-if="horse.breeding_details_b != ''" @click="redirect(horse.breeding_details_b)" color="primary">Breeding Details 2</vs-button>
                </div>
            </vs-tab>
            <vs-tab label="Breeding Details" >
                <div class="tree mt-5">
                    <vs-row>
                        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                            <ul class="tree-ul">
                                <li>
                                    <a class="parent">{{horse.name}}</a>
                                    <horse-tree v-if="horse != null" :horse="horse"></horse-tree>
                                </li>
                            </ul>
                        </vs-col>
                    </vs-row>
                </div>
            </vs-tab>
            <vs-tab label="Files" >
                <div>
                    <br>

                    <vs-row vs-w="12">
                        <vs-col vs-lg="12" vs-sm="12" vs-xs="12">
                            <h2>Photos</h2>
                            <vs-divider></vs-divider>
                        </vs-col>
                        <vs-col v-for="i in 12" v-bind:key="i" vs-type="flex" vs-justify="center" vs-align="center" vs-lg="2" vs-sm="3" vs-xs="4" class="image-container" style="margin-bottom: 10px;">
                            <img class="image" style="width: 100%;height: 100%;border-radius: 5px;" src="/uploads/images/horse/identification/1aa112aeabccbcb711776c387ad40628.jpg">
                            <div class="middle flex">
                                <div class="w-1/2">
                                    <vs-button radius color="primary" type="border" icon-pack="feather" icon="icon-eye"></vs-button>
                                </div>
                                <div class="w-1/2" style="margin-left: 5px;">
                                    <vs-button radius color="danger" type="border" icon-pack="feather" icon="icon-trash"></vs-button>
                                </div>
                            </div>
                        </vs-col>
                    </vs-row>
                    <br>
                    <vs-row vs-w="12">
                        <vs-col vs-lg="12" vs-sm="12" vs-xs="12">
                            <h2>Identification Draw</h2>
                            <vs-divider></vs-divider>
                        </vs-col>
                        <vs-col v-for="i in 2" v-bind:key="i" vs-type="flex" vs-justify="center" vs-align="center" vs-lg="2" vs-sm="3" vs-xs="4" class="image-container" style="margin-bottom: 10px;">
                            <img class="image" style="width: 100%;height: 100%;border-radius: 5px;" src="/uploads/images/horse/identification/1aa112aeabccbcb711776c387ad40628.jpg">
                            <div class="middle flex">
                                <div class="w-1/2">
                                    <vs-button radius color="primary" type="border" icon-pack="feather" icon="icon-eye"></vs-button>
                                </div>
                                <div class="w-1/2" style="margin-left: 5px;">
                                    <vs-button radius color="danger" type="border" icon-pack="feather" icon="icon-trash"></vs-button>
                                </div>
                            </div>
                        </vs-col>
                    </vs-row>
                    <br>
                    <vs-row vs-w="12">
                        <vs-col vs-lg="12" vs-sm="12" vs-xs="12">
                            <h2>Breeding Details</h2>
                            <vs-divider></vs-divider>
                        </vs-col>
                        <vs-col v-for="i in 2" v-bind:key="i" vs-type="flex" vs-justify="center" vs-align="center" vs-lg="2" vs-sm="3" vs-xs="4" class="image-container" style="margin-bottom: 10px;">
                            <img class="image" style="width: 100%;height: 100%;border-radius: 5px;" src="/uploads/images/horse/identification/1aa112aeabccbcb711776c387ad40628.jpg">
                            <div class="middle flex">
                                <div class="w-1/2">
                                    <vs-button radius color="primary" type="border" icon-pack="feather" icon="icon-eye"></vs-button>
                                </div>
                                <div class="w-1/2" style="margin-left: 5px;">
                                    <vs-button radius color="danger" type="border" icon-pack="feather" icon="icon-trash"></vs-button>
                                </div>
                            </div>
                        </vs-col>
                    </vs-row>
                </div>
            </vs-tab>
        </vs-tabs>
    </vx-card>
</template>

<script>
    export default {
        name: "View",
        mounted() {
            this.getData();
        },
        data() {
            return {
                horse: {

                },

                isLoaded: false,

                dummy: [1,2,3,4,5,6,7,8,9,10,11,12]
            }
        },

        methods: {
            getData()
            {
                let fire = this;
                axios.get(`/api/horses/${this.$route.params.id}`, store.state.config).then(function(response){
                    fire.horse = response.data.data;
                    fire.isLoaded = true;
                }).catch(function(error){
                    if(error.response.status == 403) { // Un-Authorized
                        fire.vs_alert ('Oops!', error.response.data.message, 'danger');
                        router.push({ name: "pageError403"});
                    } else if (error.response.status == 401){ // Un-Authenticated
                        router.push({ name: "pageLogin"})
                    }
                });
            },

            redirect (url) {
                window.open(url, "_blank");
            }
        }
    }
</script>

<style lang="scss">
    .con-vs-tabs .con-slot-tabs {
        overflow: auto;
    }

    div.tree{
        min-width: 1000px;
        overflow: scroll;
        margin-bottom: 30px;
    }
    .tree ul {
        padding-top: 20px; position: relative;

        transition: all 0.5s;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
    }

    .tree li {
        float: left; text-align: center;
        list-style-type: none;
        position: relative;
        padding: 20px 5px 0 5px;

        transition: all 0.5s;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
    }

    /*We will use ::before and ::after to draw the connectors*/

    .tree li::before, .tree li::after{
        content: '';
        position: absolute; top: 0; right: 50%;
        border-top: 1px solid #ccc;
        width: 50%; height: 20px;
    }
    .tree li::after{
        right: auto; left: 50%;
        border-left: 1px solid #ccc;
    }

    /*We need to remove left-right connectors from elements without
    any siblings*/
    .tree li:only-child::after, .tree li:only-child::before {
        display: none;
    }

    /*Remove space from the top of single children*/
    .tree li:only-child{ padding-top: 0;}

    /*Remove left connector from first child and
    right connector from last child*/
    .tree li:first-child::before, .tree li:last-child::after{
        border: 0 none;
    }
    /*Adding back the vertical connector to the last nodes*/
    .tree li:last-child::before{
        border-right: 1px solid #ccc;
        border-radius: 0 5px 0 0;
        -webkit-border-radius: 0 5px 0 0;
        -moz-border-radius: 0 5px 0 0;
    }
    .tree li:first-child::after{
        border-radius: 5px 0 0 0;
        -webkit-border-radius: 5px 0 0 0;
        -moz-border-radius: 5px 0 0 0;
    }

    /*Time to add downward connectors from parents*/
    .tree ul ul::before{
        content: '';
        position: absolute; top: 0; left: 50%;
        border-left: 1px solid #ccc;
        width: 0; height: 20px;
    }
    
    .tree a.parent:hover {
        cursor: pointer;
    }

    .tree a.male {
        background-color: lightskyblue;
    }

    .tree a.female {
        background-color: pink;
    }

    .tree li a{
        border: 1px solid #ccc;
        padding: 5px 10px;
        text-decoration: none;
        color: #666;
        font-family: arial, verdana, tahoma;
        font-size: 11px;
        display: inline-block;

        border-radius: 5px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;

        transition: all 0.5s;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
    }

    /*Time for some hover effects*/
    /*We will apply the hover effect the the lineage of the element also*/
    .tree li a:hover, .tree li a:hover+ul li a {
        background: #c8e4f8 !important; color: #000 !important; border: 1px solid #94a0b4;

    }
    /*Connector styles on hover*/
    .tree li a:hover+ul li::after,
    .tree li a:hover+ul li::before,
    .tree li a:hover+ul::before,
    .tree li a:hover+ul ul::before{
        border-color:  #94a0b4 !important;
    }

    .image-container {
        position: relative;
        width: 50%;
    }

    .image {
        opacity: 1;
        display: block;
        width: 100%;
        height: auto;
        transition: .5s ease;
        backface-visibility: hidden;
    }

    .middle {
        transition: .5s ease;
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        text-align: center;
    }

    .image-container:hover .image {
        opacity: 0.3;
    }

    .image-container:hover .middle {
        opacity: 1;
    }
</style>
