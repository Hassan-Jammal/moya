<template>
    <div class="lg:w-2/3 mx-auto flex flex-col gap-12 lg:gap-24">
        <p class="text-center" v-html="categoryData.description"></p>
        <NuxtImg class="w-full mt-12" :src="`/images/${categoryData.image}.webp`" :alt="categoryData.title" />
    </div>
</template>

<script setup>
    defineProps({
        categoryData: Object,
    });
</script>
