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
				<li class="flex"><Icon name="fa6-solid:angle-right" /></li>
				<li>{{ subCategoryData.title }}</li>
			</ul>

			<h1 class="text-3xl lg:text-5xl font-semibold lg:mt-8">{{ subCategoryData.title }}</h1>

			<div class="py-24 px-4 lg:px-14 text-white rounded-3xl mt-12 bg-[url('/images/products-for-seamless-connectivity-bg.webp')] bg-cover bg-center">
				<!-- <div class="absolute top-0 left-0 w-full h-full">
					<NuxtImg class="w-full h-full object-cover" src="/images/products-for-seamless-connectivity.webp" alt="" width="" height="" />
				</div> -->

				<div class="flex flex-col gap-8 lg:w-1/2">
					<h2 class="text-3xl lg:text-4xl font-semibold">The Backbone of Intelligent Connectivity</h2>
					<p class="text-sm">Empowering Connections with Every Product</p>
					<NuxtLink to="/get-a-quote">
						<button class="p-2 min-w-[120px] text-sm border border-white text-white bg-transparent hover:border-black hover:text-black hover:bg-white rounded-full select-none transition-all duration-300 ease-in-out">Get a Quote</button>
					</NuxtLink>
				</div>
			</div>
		</div>
	</section>

	<section v-if="categoryData" class="lg:my-12 py-12">
		<div class="container">
			<div class="flex max-lg:flex-col flex-row justify-between lg:items-center gap-4 overflow-scroll">
                <h2 class="text-xl lg:text-3xl font-semibold">Get to Know {{ subCategoryData.acronym }}</h2>

				<button class="flex lg:justify-between items-center gap-2 text-base text-primary" @click="onToggle">
					<span>Take a deeper dive</span>
					<Icon name="fa6-solid:angle-right" class="transition duration-300 ease-in-out group-hover:translate-x-1" />
				</button>

				<CategoryLayout :categoryData="categoryData" :isModalVisible="isModalVisible" :onToggle="onToggle" />
            </div>

			<div class="flex flex-col gap-24 mt-12 lg:mt-24">
				<!-- <h3 v-if="categoryData.sub_categories.length > 1" class="text-lg lg:text-xl font-semibold">{{ subCategory.title }}</h3> -->
				<div class="grid lg:grid-cols-3 gap-4 lg:gap-8">
					<div v-for="(product, productIndex) in subCategoryData.products" :key="productIndex" class="flex flex-col justify-between items-center gap-12 py-12 px-4 lg:px-8 text-center bg-[#F8F8F9] rounded-3xl">
						<div class="flex flex-col justify-center items-center gap-4 w-full">
							<NuxtImg class="w-full" :src="`/images/${product.image_outer}.webp`" :alt="product.title" width="" height="" />
							<h3 class="text-sm mt-6">{{ product.sub_title }}</h3>
							<NuxtLink :to="`/products/${slugify(categoryData.title)}/${slugify(subCategoryData.title)}/${slugify(product.title)}`">
								<h2 class="text-2xl font-BankGothic font-bold">{{ product.title }}</h2>
							</NuxtLink>
						</div>
						<div class="flex gap-4">
							<NuxtLink to="/get-a-quote">
								<button class="p-2 min-w-[120px] text-sm text-white bg-primary hover:text-white hover:bg-black rounded-full select-none transition-all duration-300 ease-in-out">Get a Quote</button>
							</NuxtLink>
							<NuxtLink :to="`/products/${slugify(categoryData.title)}/${slugify(subCategoryData.title)}/${slugify(product.title)}`" class="flex lg:justify-between items-center gap-2 text-base text-primary">
								<button class="transition-all duration-300 ease-in-out text-nowrap">Learn More</button>
								<Icon name="fa6-solid:angle-right" class="transition duration-300 ease-in-out group-hover:translate-x-1" />
							</NuxtLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- <section v-if="categoryData" class="lg:my-12 py-12">
		<div class="container">
			<div v-for="(product, productIndex) in subCategoryData.products" :key="productIndex">
				<NuxtImg class="w-full" :src="`/images/${product.image_inner}.webp`" :alt="product.title" width="" height="" />
			</div>
		</div>
	</section> -->
	
	<section class="lg:mt-12 pt-12 lg:pt-24 pb-56 bg-[#F8F8F9]">
		<div class="container">
			<h2 class="text-2xl lg:text-5xl font-semibold">Moya's Capabilities</h2>
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
	import slugify from "@/utils/slugify";
	import categories from '~/data/products';

    const route = useRoute();

	// Extract slugs from the route
	const categorySlug = ref(route.params.category);
	const subCategorySlug = ref(route.params.product || route.path.split("/").pop()); // Now for sub-category
	const categoryData = ref(null);
	const subCategoryData = ref(null);

	onMounted(() => {
		// Find category directly
		categoryData.value = categories.find(cat => slugify(cat.title) === categorySlug.value);

		// Find sub-category without a loop
		if (categoryData.value) {
			subCategoryData.value = categoryData.value.sub_categories.find(
				subCategory => slugify(subCategory.title) === subCategorySlug.value
			);
		}
	});

	watchEffect(() => {
		if (subCategoryData.value) {
			useSeoMeta({
				title: subCategoryData.value.title,
				description: `Explore ${subCategoryData.value.title} for advanced telecom solutions.`,

				ogTitle: subCategoryData.value.title,
				ogDescription: `Discover ${subCategoryData.value.title}, part of Moya's Core Network solutions.`,
                ogImage: 'https://moya.com/images/og-image-1200x630.png',

				twitterTitle: subCategoryData.value.title,
				twitterDescription: `Learn more about ${subCategoryData.value.title}.`,
				twitterCard: 'summary_large_image',
			});
		}
	});

	const isOpen = ref(false);

	const isModalVisible = computed(() => isOpen.value);

	const onToggle = () => {
		isOpen.value = !isOpen.value;
		document.body.classList.toggle("overflow-y-hidden", isOpen.value);
	};

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
</script>

<style lang="sass">
	[popover]::backdrop
		@apply bg-black/50

	[popover]
		animation: fadeIn 400ms ease-in-out

	@keyframes fadeIn
		from 
			opacity: 0
		to 
			opacity: 1

	.fade-enter-from,
	.fade-leave-to 
		opacity: 0
	

	.fade-enter-active,
	.fade-leave-active 
		transition: opacity 300ms ease-out
	
</style>