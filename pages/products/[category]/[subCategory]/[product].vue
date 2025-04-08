<template>
    <section v-if="productData" class="py-12 relative">
        <div class="absolute bottom-0 left-0 w-full h-full">
            <video width="100%" autoplay loop muted playsinline class="w-full h-full object-cover opacity-50">
                <source src="/videos/products-bg.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <!-- <NuxtImg class="w-full h-full object-cover" src="images/products-bg.gif" alt="Products Background" width="" height="" /> -->
        </div>
		<div class="container relative z-10">
            <div class="flex max-lg:flex-col justify-between items-center max-lg:gap-8">
                <div class="flex-1">
                    <div class="w-full xl:w-2/3">
                        <ul class="hidden lg:flex items-center flex-wrap gap-2 text-xs">
                            <!-- <li><NuxtLink to="/">Home</NuxtLink></li>
                            <li class="flex"><Icon name="fa6-solid:angle-right" /></li>
                            <li>Products</li>
                            <li class="flex"><Icon name="fa6-solid:angle-right" /></li> -->
                            <li>{{ categoryData.title }}</li>
                            <li class="flex"><Icon name="fa6-solid:angle-right" /></li>
                            <li>{{ subCategoryData.title }}</li>
                            <li class="flex"><Icon name="fa6-solid:angle-right" /></li>
                            <li>Details</li>
                            <!-- <li class="flex"><Icon name="fa6-solid:angle-right" /></li>
                            <li>{{ productData.title }}</li> -->
                        </ul>

                        <h1 class="text-3xl lg:text-4xl font-BankGothic font-bold">{{ productData.title }}</h1>
                        <h2 class="text-xl font-BankGothic font-bold">{{ productData.sub_title }}</h2>

                        <hr class="my-8" />

                        <p class="text-sm" v-html="productData.description"></p>
                     
                        <NuxtLink to="/get-a-quote" class="block mt-12">
                            <button class="flex justify-center items-center gap-2 p-2 min-w-[120px] w-full text-sm text-white bg-primary hover:text-white hover:bg-black rounded-full select-none transition-all duration-300 ease-in-out group">
                                <span>Get Custom Quote</span>
                                <Icon name="fa6-solid:arrow-right" class="transition duration-300 ease-in-out group-hover:translate-x-1" />
                            </button>
                        </NuxtLink>
                        
                        <p class="text-xs text-[#ACA8A8] text-center mt-8">Typically replies within 24 hours</p>
                    </div>
                </div>
                <div class="flex-1">
                    <NuxtImg class="w-full" :src="`images/${productData.image_inner}.webp`" :alt="productData.title" :width="productData.width" :height="productData.height" />
                </div>
            </div>
        </div>
	</section>

    <section v-if="productData" class="py-12 lg:py-24 bg-[#F8F8F9]">
        <div class="container">
            <AdvantagesLayout :productData="productData" />
            <SpecsLayout :productData="productData" :class="{'mt-24': productData.advantages}" />
        </div>
	</section>

    <section v-if="categoryData" class="pt-12 lg:pt-24 pb-56">
        <div class="container">
            <h2 class="text-xl lg:text-3xl font-semibold text-center">
                {{ subCategoryData?.products?.length === 1 ? categoryData.title : subCategoryData?.title }} Products
            </h2>

            <div class="grid lg:grid-cols-3 gap-4 lg:gap-8 mt-12">
                <div v-for="(product, index) in relatedProducts" :key="index"
                     class="flex flex-col justify-between items-center gap-12 py-12 px-4 lg:px-8 text-center bg-[#F8F8F9] rounded-3xl">
                    <div class="flex flex-col justify-center items-center gap-4 w-full">
                        <NuxtImg class="w-full" :src="`/images/${product.image_outer}.webp`" :alt="product.title" />
                        <h3 class="text-sm mt-6">{{ product.sub_title }}</h3>
                        <NuxtLink :to="`/products/${slugify(categoryData.title)}/${slugify(product.parentSubcategory)}/${slugify(product.title)}`">
                            <h2 class="text-2xl font-BankGothic font-bold">{{ product.title }}</h2>
                        </NuxtLink>
                    </div>
                    <div class="flex gap-4">
                        <NuxtLink to="/get-a-quote">
                            <button class="p-2 min-w-[120px] text-sm text-white bg-primary hover:bg-black rounded-full transition-all duration-300">Get a Quote</button>
                        </NuxtLink>
                        <NuxtLink :to="`/products/${slugify(categoryData.title)}/${slugify(product.parentSubcategory)}/${slugify(product.title)}`" class="flex items-center gap-2 text-base text-primary">
                            <button class="transition-all duration-300">Learn More</button>
                            <Icon name="fa6-solid:angle-right" class="transition duration-300 group-hover:translate-x-1" />
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import slugify from "@/utils/slugify";
	import categories from '~/data/products';

    const route = useRoute();
    const categorySlug = ref(route.params.category);
    const productSlug = ref(route.params.product);
    const categoryData = ref(null);
    const subCategoryData = ref(null);
    const productData = ref(null);
    const relatedProducts = ref([]);

    onMounted(() => {
        // Find the main category
        categoryData.value = categories.find(cat => slugify(cat.title) === categorySlug.value);
        if (!categoryData.value) return;

        // Find the subcategory that contains the selected product
        subCategoryData.value = categoryData.value.sub_categories.find(subCategory =>
            subCategory.products.some(product => slugify(product.title) === productSlug.value)
        );
        if (!subCategoryData.value) return;

        // Find the selected product
        productData.value = subCategoryData.value.products.find(product => slugify(product.title) === productSlug.value);
        
        // **KEEPING YOUR LOGIC FOR RELATED PRODUCTS**
        relatedProducts.value = subCategoryData.value.products.length === 1
            ? categoryData.value.sub_categories
                .filter(sub => sub !== subCategoryData.value)
                .flatMap(sub => sub.products.map(product => ({
                    ...product,
                    parentSubcategory: sub.title // Keep track of subcategory for correct URL
                })))
            : subCategoryData.value.products
                .filter(product => slugify(product.title) !== productSlug.value)
                .map(product => ({
                    ...product,
                    parentSubcategory: subCategoryData.value.title // Ensure correct subcategory reference
                }));
    });

    // Update SEO metadata dynamically when categoryData is available
    watchEffect(() => {
        if (categoryData.value && subCategoryData.value && productData.value) {
            useSeoMeta({
                title: `${productData.value.title} - ${subCategoryData.value.title} - ${categoryData.value.title}`,
                description: `Discover ${productData.value.title} solutions and services.`,
                
                ogTitle: `${productData.value.title} - ${subCategoryData.value.title} - ${categoryData.value.title}`,
                ogDescription: `Explore top solutions in ${productData.value.title}.`,
                ogImage: 'https://moya.com/images/og-image-1200x630.png',

                twitterTitle: `${productData.value.title} - ${subCategoryData.value.title} - ${categoryData.value.title}`,
                twitterDescription: `Explore ${productData.value.title} for innovative solutions.`,
                twitterCard: 'summary_large_image',
            });
        }
    });
</script>