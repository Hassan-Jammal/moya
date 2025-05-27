<template>
    <h2 class="text-xl lg:text-3xl font-semibold text-center">{{ productData.title }}</h2>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 items-start gap-4 gap-y-8 lg:gap-x-24 mt-12">
        <div v-for="(item, index) in productData.items" :key="index" class="flex flex-col gap-4 justify-center items-center text-center">
            <NuxtImg :src="`images/icons/${item.icon}.svg`" :alt="item.title" width="52" height="52" />
            <h2 class="text-lg lg:text-xl font-semibold">{{ item.title }}</h2>
            <p class="text-sm" v-html="item.description"></p>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({ 
        productData: Object
    });
</script>