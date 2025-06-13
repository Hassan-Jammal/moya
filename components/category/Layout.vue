<template>
    <component :is="categoryComponent" :categoryData="categoryData"  />
</template>

<script setup>
    const props = defineProps({
        categoryData: Object,
    });
    
    const CategoryLayoutPrimary = defineAsyncComponent(() => import('./LayoutPrimary.vue'))
    const CategoryLayoutSecondary = defineAsyncComponent(() => import('./LayoutSecondary.vue'))

    const categoryComponent = computed(() => 
        props.categoryData.layout === 'primary' ? CategoryLayoutPrimary : CategoryLayoutSecondary
    );
</script>