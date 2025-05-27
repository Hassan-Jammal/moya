<template>
    <div class="flex max-lg:flex-col justify-between gap-12">
        <div class="flex-1">
            <NuxtImg class="w-full" :src="`images/${productData.image}.webp`" :alt="productData.title" />
        </div>
        <div class="flex-1 h-full flex flex-col gap-12">
            <h2 class="text-xl lg:text-3xl font-semibold">{{ productData.title }}</h2>
            <div>
                <div v-for="(item, index) in productData.items" :key="index" class="flex flex-col">
                    <div class="grid grid-cols-5 gap-2">
                        <p class="col-span-2 text-sm font-bold">{{ item.title }}</p>
                        <p class="col-span-3 text-sm break-words" v-html="item.description"></p>
                    </div>
                    <hr v-if="productData.items.length - 1 !== index" class="my-3" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({ 
        productData: Object
    });
</script>

<style lang="sass" scoped>
    :deep(ol)
        list-style-type: decimal
        list-style-position: outside
        padding-left: 20px
        
    :deep(ul)
        list-style-type: disc
        list-style-position: outside
        padding-left: 20px
</style>