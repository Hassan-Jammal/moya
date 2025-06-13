<template>
    <div class="flex flex-col gap-12">
        <div class="lg:w-2/3 mx-auto flex flex-col gap-12 lg:gap-24">
            <p class="text-center" v-html="categoryData.description"></p>
        </div>
        
        <div class="flex max-lg:flex-col justify-between lg:items-center gap-16 lg:gap-32 mt-12">
            <div class="lg:w-2/3 flex flex-col gap-4">
                <NuxtImg class="w-full" :src="`/images/${categoryData.image}.webp`" :alt="categoryData.title" />
            </div>

            <div v-if="categoryData.features" class="lg:w-1/3 flex flex-col gap-8">
                <ul class="flex-1 flex flex-col gap-4">
                    <li v-for="(feature, index) in categoryData.features" :key="index" class="flex flex-col gap-8">
                        <div class="flex gap-4">
                            <NuxtImg class="flex-shrink-0" :src="`/images/icons/${feature.icon}.svg`" :alt="feature.title" width="24" height="24" />
                            <p v-html="feature.title"></p>
                        </div>
                        <hr v-if="index !== categoryData.features.length - 1" class="border-black/20" />
                    </li>
                </ul>
            </div>
        </div>

        <div v-if="categoryData.application_scenario" class="flex flex-col justify-between gap-8">
            <h4 class="text-sm font-semibold">Application Scenario</h4>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
                <div v-for="(scenario, index) in categoryData.application_scenario" :key="index">
                    <NuxtImg class="w-full" :src="`/images/${scenario.image}.webp`" :alt="scenario.title" width="392" height="206" />
                    <p class="text-sm mt-4" v-html="scenario.title"></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    defineProps({
        categoryData: Object,
    });
</script>
