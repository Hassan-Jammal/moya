<template>
    <transition name="fade">
        <div v-if="isModalVisible" class="fixed inset-0 flex items-center justify-center z-50">
            <!-- Fullscreen Background Overlay (Click to Close) -->
            <div @click="onToggle" class="fixed inset-0 bg-black opacity-70"></div>
            
            <!-- Modal Content -->
            <div class="flex flex-col justify-between w-11/12 md:w-2/3 lg:w-1/2 lg:h-[94%] overflow-y-auto fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-8 md:py-8 lg:py-16 px-4 md:px-12 bg-white rounded-3xl shadow-lg">
                <Icon name="fa6-solid:xmark" class="absolute top-4 right-4 cursor-pointer text-3xl" @click="onToggle" />
                <!-- <div class="w-11/12 md:w-2/3 lg:w-1/2 h-4/5 overflow-y-auto fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-8 md:py-8 lg:py-16 px-4 md:px-12 lg:px-24 bg-white rounded-3xl shadow-lg"> -->
                <div>
                    <div class="flex max-lg:flex-col justify-between lg:items-center gap-4">
                        <div class="flex flex-col gap-4">
                            <h2 class="text-xl lg:text-3xl font-semibold">{{ categoryData.title }}</h2>
                            <h3 class="text-sm font-semibold">
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
                    <p class="mt-12 text-xs text-[#ACA8A8]" v-html="categoryData.description"></p>
                </div>
                <NuxtImg class="w-full mx-auto mt-12" :src="`/images/${categoryData.image}.png`" :alt="categoryData.title" />
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
