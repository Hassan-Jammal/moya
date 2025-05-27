<template>
    <div class="w-full lg:w-4/5 mx-auto text-sm">
        <h2 class="text-xl lg:text-3xl font-semibold text-center">{{ productData.title }}</h2>

        <div class="overflow-x-auto mt-12">
            <!-- If categories exist -->
            <template v-if="productData.categories">
                <div v-for="(category, catIndex) in productData.categories" :key="catIndex" class="mb-8">
                    <table class="w-full border-collapse border border-[#2B6FF6]/20">
                        <thead>
                            <tr class="bg-gray-200">
                                <td colspan="2" class="border border-gray-300 px-4 py-2 font-semibold text-[#2B6FF6]">{{ category.title }}</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in category.items" :key="index" class="border-b">
                                <td class="border border-gray-300 px-4 py-2 w-1/2 text-[#2B6FF6]">{{ item.title }}</td>
                                <td class="border border-gray-300 px-4 py-2 w-1/2" v-html="item.description"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </template>

            <!-- If there are no categories, show a single table with headers -->
            <template v-else>
                <table class="w-full border-collapse border border-[#2B6FF6]/20">
                    <thead>
                        <tr class="bg-gray-100 text-left">
                            <th class="border border-gray-300 px-4 py-2 w-1/2 text-[#2B6FF6]">Item</th>
                            <th class="border border-gray-300 px-4 py-2 w-1/2">Specification</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in productData.items" :key="index" class="border-b">
                            <td class="border border-gray-300 px-4 py-2 text-[#2B6FF6]">{{ item.title }}</td>
                            <td class="border border-gray-300 px-4 py-2" v-html="item.description"></td>
                        </tr>
                    </tbody>
                </table>
            </template>
        </div>
    </div>
</template>

<!-- <tr class="bg-gray-200">
    <td colspan="2" class="border border-gray-300 px-4 py-2 font-semibold text-[#2B6FF6]">
        {{ category.title }}
    </td>
</tr>
   -->
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