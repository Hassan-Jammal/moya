<template>
    <component v-if="specsComponent" :is="specsComponent" :productData="productData" />
</template>
  
<script setup>
    const props = defineProps({ 
        productData: Object
    });
    
    const SpecsLayoutPrimary = defineAsyncComponent(() => import('./LayoutPrimary.vue'))
    const SpecsLayoutSecondary = defineAsyncComponent(() => import('./LayoutSecondary.vue'))

    const specsComponent = computed(() => {
        if (!props.productData) return null;  // Prevent errors
        return props.productData.layout === 'primary' ? SpecsLayoutPrimary : SpecsLayoutSecondary
    });
</script>