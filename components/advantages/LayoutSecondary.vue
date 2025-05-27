<template>
    <h2 class="text-xl lg:text-3xl font-semibold text-center">{{ productData.title }}</h2>
    <div class="grid sm:grid-cols-2 items-start gap-20 w-full lg:w-2/3 mx-auto mt-12">
        <div v-for="(item, index) in productData.items" :key="index" class="flex items-start gap-4">
            <NuxtImg class="flex-shrink-0" :src="`images/icons/${item.icon}.svg`" :alt="item.title" width="62" height="62" />
            <div>
                <h2 class="text-lg lg:text-xl font-semibold">{{ item.title }}</h2>
                <p class="text-sm mt-2" v-html="item.description"></p>
            </div>
        </div>
    </div>
</template>
  
<script setup>
    const props = defineProps({ 
        productData: Object
    });
</script>