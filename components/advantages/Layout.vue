<template>
    <component v-if="advantagesComponent" :is="advantagesComponent" :productData="productData" />
</template>
  
<script setup>
    const props = defineProps({ 
        productData: Object
    });
    
    const AdvantagesLayoutPrimary = defineAsyncComponent(() => import('./LayoutPrimary.vue'))
    const AdvantagesLayoutSecondary = defineAsyncComponent(() => import('./LayoutSecondary.vue'))

    const advantagesComponent = computed(() => {
        if (!props.productData) return null;  // Prevent errors
        return props.productData.layout === 'primary' ? AdvantagesLayoutPrimary : AdvantagesLayoutSecondary
    });
</script>