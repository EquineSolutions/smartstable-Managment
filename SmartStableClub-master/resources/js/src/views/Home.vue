<template>
	<div>
        <div class="vx-row">
            <!-- Gradient Background Image -->
            <div class="vx-col w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-base">
                <vx-card
                    class="bg-img"
                    content-color="#fff"
                    :card-background="'linear-gradient(120deg ,rgba(109,213,237,.8), rgba(33,147,176,0.5)), url(' + require('@assets/images/pages/horse.png') + ')'">
                    <feather-icon icon="GitlabIcon" @click="$router.push('/')" class="cursor-pointer ml-4 mt-1 custom-feather"></feather-icon>
                    <h2 class="font-bold mb-1 mt-4" style="color: white;">254</h2>
                    Total Horses
                </vx-card>
            </div>

            <!-- Gradient Background Image -->
            <div class="vx-col w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-base">
                <vx-card
                    class="bg-img"
                    content-color="#fff"
                    :card-background="'linear-gradient(120deg ,rgba(247,97,161,0.5), rgba(140,27,171,.8)), url(' + require('@assets/images/pages/man.png') + ')'">
                    <feather-icon icon="SmileIcon" @click="$router.push('/')" class="cursor-pointer ml-4 mt-1 custom-feather"></feather-icon>
                    <h2 class="font-bold mb-1 mt-4" style="color: white;">352</h2>
                    Total Clients
                </vx-card>
            </div>

            <!-- Gradient Background Image -->
            <div class="vx-col w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-base">
                <vx-card
                    class="bg-img"
                    content-color="#fff"
                    :card-background="'linear-gradient(120deg ,rgb(119, 108, 241,0.5), rgba(33, 147, 176, 0.8)), url(' + require('@assets/images/pages/tasks.png') + ')'">
                    <feather-icon icon="FileTextIcon" @click="$router.push('/')" class="cursor-pointer ml-4 mt-1 custom-feather"></feather-icon>

                    <h2 class="font-bold mb-1 mt-4" style="color: white;">18</h2>
                    Pending Tasks
                </vx-card>
            </div>
        </div>

        <div class="vx-row">
            <div class="vx-col w-full mb-base">
                <todo></todo>
            </div>
        </div>

        <!--<vx-card>-->
            <!--<div class="vx-row">-->
                <!--<todo></todo>-->
            <!--</div>-->
        <!--</vx-card>-->
    </div>
</template>

<script>
    import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'
    import analyticsData from './analyticsData.js'

    export default{
        name: 'Home',
        data() {
            return {
                analyticsData: analyticsData,
            }
        },
        components: {
            StatisticsCardLine
        }
    }
</script>

<style>
    .vx-card.bg-img {
        background-size: cover !important;
    }

    custom-feather .feather {
        width: 28px;
        height: 28px;
    }

    .custom-feather {
        background-color: #ffffff6b;
        padding: 10px;
        border-radius: 50%;
        margin-left: 0px !important;
    }
</style>
