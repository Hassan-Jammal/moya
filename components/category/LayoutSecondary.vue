<template>
    <transition name="fade">
        <div v-if="isModalVisible" class="fixed inset-0 flex items-center justify-center z-50">
            <!-- Fullscreen Background Overlay (Click to Close) -->
            <div @click="onToggle" class="fixed inset-0 bg-black opacity-70"></div>
            <Icon name="fa6-solid:fa-xmark" class="absolute top-0 text-white bg-red" />
            
            <!-- Modal Content -->
            <div class="w-11/12 md:w-2/3 lg:w-1/2 h-[94%] overflow-y-auto fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-8 md:py-8 lg:py-16 px-4 md:px-12 bg-white rounded-3xl shadow-lg">
                <Icon name="fa6-solid:xmark" class="absolute top-4 right-4 cursor-pointer text-3xl" @click="onToggle" />
                
                <div class="flex flex-col gap-12">
                    <div class="flex max-lg:flex-col justify-between lg:items-center gap-4">
                        <div class="flex flex-col gap-4">
                            <h2 class="text-xl lg:text-3xl font-semibold">{{ categoryData.title }}</h2>
                            <h3 class="text-lg">
                                {{ categoryData.sub_categories.length > 1 ? 
                                    categoryData.sub_categories.map(sub => sub.acronym.split("-")[0]).join(" - ") : 
                                    categoryData.sub_categories.map(sub => sub.acronym).join(" - ") 
                                }}
                            </h3>
                        </div>
                        <NuxtLink to="/">
                            <button class="p-2 min-w-[120px] text-sm border border-white text-white bg-primary hover:text-white hover:bg-black rounded-full select-none transition-all duration-300 ease-in-out">
                                Get a Quote
                            </button>
                        </NuxtLink>
                    </div>
                    
                    <div class="flex max-lg:flex-col justify-between lg:items-center gap-12">
                        <div class="flex-1 flex flex-col gap-4">
                            <NuxtImg class="w-full" :src="`/images/${categoryData.image}.png`" :alt="categoryData.title" />
                            <p class="text-xs mt-12 text-[#ACA8A8] text-center" v-html="categoryData.description"></p>
                        </div>

                        <div v-if="categoryData.features" class="flex-1 flex flex-col gap-8">
                            <h4 class="text-sm font-semibold">Features</h4>
                            <ul class="flex-1 flex flex-col gap-4">
                                <li v-for="(feature, index) in categoryData.features" :key="index" class="flex flex-col gap-4">
                                    <div class="flex gap-4">
                                        <NuxtImg class="flex-shrink-0" :src="`/images/icons/${feature.icon}.svg`" :alt="feature.title" width="24" height="24" />
                                        <p class="text-sm" v-html="feature.title"></p>
                                    </div>
                                    <hr v-if="index !== categoryData.features.length - 1" class="border-black/20" />
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div v-if="categoryData.application_scenario" class="flex flex-col justify-between gap-8">
                        <h4 class="text-sm font-semibold">Application Scenario</h4>
                        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 text-center">
                            <div v-for="(scenario, index) in categoryData.application_scenario" :key="index">
                                <NuxtImg class="w-full" :src="`/images/${scenario.image}.png`" :alt="scenario.title" width="392" height="206" />
                                <p class="text-sm mt-4" v-html="scenario.title"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup>
    defineProps({
        categoryData: Object,
        isModalVisible: Boolean,
        onToggle: Function // <-- Now we receive the function from the parent
    });
</script>
