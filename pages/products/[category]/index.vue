<template>
	<!-- <pre v-if="categoryData && productData" >{{productData}}</pre> -->
	<section v-if="categoryData" class="py-12">
		<div class="container">
			<ul class="hidden lg:flex items-center gap-2 text-xs">
				<li><NuxtLink to="/">Home</NuxtLink></li>
				<li class="flex"><Icon name="fa6-solid:angle-right" /></li>
				<li>Products</li>
				<li class="flex"><Icon name="fa6-solid:angle-right" /></li>
				<li>{{ categoryData.title }}</li>
			</ul>

			<h1 class="text-3xl lg:text-5xl font-semibold lg:mt-8">{{ categoryData.title }}</h1>

			<div class="relative py-24 px-4 lg:px-14 text-white mt-12">
				<div class="absolute bottom-0 left-0 w-full h-full -z-10">
					<NuxtImg class="w-full h-full object-cover rounded-3xl" src="images/products-for-seamless-connectivity-bg.webp" alt="About Us" width="" height="" />
				</div>
				<div class="flex flex-col gap-8 lg:w-1/2">
					<h2 class="text-3xl lg:text-4xl font-semibold">{{ categoryData.overview.title }}</h2>
					<p class="text-sm">{{ categoryData.overview.description }}</p>
					<NuxtLink to="/get-a-quote">
						<button class="p-2 min-w-[120px] text-sm border border-white text-white bg-transparent hover:border-black hover:text-black hover:bg-white rounded-full select-none transition-all duration-300 ease-in-out">Get a Quote</button>
					</NuxtLink>
				</div>
			</div>
		</div>
	</section>


	<section v-if="categoryData" class="lg:my-12 py-12">
		<div class="container">

			<h2 class="text-2xl lg:text-4xl font-semibold text-center">{{ categoryData.sub_title }}</h2>

			<CategoryLayout :categoryData="categoryData" class="mt-12" />

			<div class="flex flex-col gap-24 mt-12 lg:mt-24" v-if="categoryData">
				<div v-for="(sub, index) in groupedSubCategories" :key="index" class="flex flex-col gap-6">
					<h3 class="text-lg lg:text-3xl font-semibold">
						<template v-if="groupedSubCategories.length > 1">{{ sub.title }}</template>
						<template v-else>{{ sub.products.map(p => p.acronym).filter(Boolean).join(' - ') }}</template>
					</h3>

					<div :class="[ 'grid gap-4 lg:gap-8', sub.products.length === 1 ? 'grid-cols-1' : 'grid-cols-2 lg:grid-cols-3' ]">
						<div v-for="(product, i) in sub.products" :key="i" class="flex flex-col justify-between items-center gap-12 py-12 px-4 lg:px-8 text-center bg-[#F8F8F9] rounded-3xl">
							<div class="flex flex-col justify-center items-center gap-4 w-full">
								<NuxtImg class="w-full" :src="`/images/${product.image_outer}.webp`" :alt="product.title" />
								<h3 class="text-sm mt-6">{{ product.sub_title }}</h3>
								<NuxtLink :to="`/products/${slugify(categoryData.title)}/${slugify(product.originalSubcategory || sub.title)}/${slugify(product.title)}`">
									<h2 class="text-2xl font-BankGothic font-bold">{{ product.title }}</h2>
								</NuxtLink>
							</div>
							<div class="flex gap-4">
								<NuxtLink to="/get-a-quote">
									<button class="p-2 min-w-[120px] text-sm text-white bg-primary hover:bg-black rounded-full transition-all duration-300">Get a Quote</button>
								</NuxtLink>
								<NuxtLink :to="`/products/${slugify(categoryData.title)}/${slugify(product.originalSubcategory || sub.title)}/${slugify(product.title)}`" class="flex items-center gap-2 text-base text-primary">
									<button class="transition-all duration-300">Learn More</button>
									<Icon name="fa6-solid:angle-right" class="transition duration-300 group-hover:translate-x-1" />
								</NuxtLink>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="lg:mt-12 pt-12 lg:pt-24 pb-56 bg-[#F8F8F9]">
		<div class="container">
			<h2 class="text-2xl lg:text-4xl font-semibold">Moya's Capabilities</h2>
			<div class="grid lg:grid-cols-3 gap-4 lg:gap-8 mt-12">
				<div v-for="(value, index) in values" :key="index" class="flex flex-col gap-8 h-auto p-4 lg:p-8 rounded-3xl bg-white">
					<NuxtImg :src="`images/icons/${value.icon}.svg`" :alt="value.title" width="42" height="42" />
					<h3 class="text-2xl font-semibold">{{ value.title }}</h3>
					<p>{{ value.description }}</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	import slugify from '@/utils/slugify';
	import categories from '~/data/products';

	const route = useRoute();
	const categorySlug = ref(route.params.category);
	const categoryData = ref(null);
    const subCategorySlug = ref(route.params.subCategory);
    const subCategoryData = ref(null);

	// Watch for route changes
	watch(() => route.params.category, (newSlug) => {
		categorySlug.value = newSlug;
		loadCategory();
	});

	// Initial load
	onMounted(() => {
		loadCategory();
	});

	function loadCategory() {
		categoryData.value = categories.find(
			(cat) => slugify(cat.title) === categorySlug.value
		);

		// Find the subcategory directly from slug
        subCategoryData.value = categoryData.value.sub_categories.find(
            sub => slugify(sub.title) === subCategorySlug.value
        );
	}

	// Professional: Clean computed property for rendering logic
	const groupedSubCategories = computed(() => {
		if (!categoryData.value) return [];

		const subCategories = categoryData.value.sub_categories || [];

		const multiProductSubs = subCategories.filter(sc => sc.products.length > 1);
		const singleProductSubs = subCategories.filter(sc => sc.products.length === 1);

		if (singleProductSubs.length) {
			multiProductSubs.push({
				title: singleProductSubs.map(sc => sc.title).join(' / '),
				products: singleProductSubs.flatMap(sc =>
					sc.products.map(p => ({
						...p,
						originalSubcategory: sc.title
					}))
				),
				isMerged: true,
			});
		}

		return multiProductSubs;
	});


	const values = [
        {
            title: "Expertise & Experience",
            description: "Moya excels in deploying high-performance RAN solutions with expertise in multi-vendor integration, virtualization, and scalable network design.",
            icon: "expertise-and-experience",
        },
        {
            title: "Customizable Solution",
            description: "Moya offers flexible and scalable solutions tailored to meet diverse network requirements.With a focus on efficiency and innovation.",
            icon: "customizable-solution",
        },
        {
            title: "Next-Generation, Infrastructure",
            description: "Ensuring long-term reliability, seamless upgrades, and optimal performance for future network demands.",
            icon: "next-generation-infrastucture",
        }
    ]

	// Update SEO metadata dynamically when categoryData is available
    watchEffect(() => {
        if (categoryData.value) {
            useSeoMeta({
                title: `${categoryData.value.title}`,
                description: `Discover ${categoryData.value.title} solutions and services.`,
                
                ogTitle: `${categoryData.value.title}`,
                ogDescription: `Explore top solutions in ${categoryData.value.title}.`,
                ogImage: 'https://moya.com/images/og-image-1200x630.png',

                twitterTitle: `${categoryData.value.title}`,
                twitterDescription: `Explore ${categoryData.value.title} for innovative solutions.`,
                twitterCard: 'summary_large_image',
            });
        }
    });
</script>

<style lang="sass">

</style>