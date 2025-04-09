<template>
    <section id="section-1" v-if="solutionData" class="py-12 lg:fixed w-full lg:top-[--header-height] lg:h-[--section-1-height]">
		<div class="container">
			<ul class="hidden lg:flex items-center gap-2 text-xs">
				<li><NuxtLink to="/">Home</NuxtLink></li>
				<li class="flex"><Icon name="fa6-solid:angle-right" /></li>
				<li>Solutions</li>
				<li class="flex"><Icon name="fa6-solid:angle-right" /></li>
				<li>{{ categoryData.title }}</li>
				<li class="flex"><Icon name="fa6-solid:angle-right" /></li>
				<li>{{ solutionData.title }}</li>
			</ul>

			<h1 class="text-3xl lg:text-5xl font-semibold lg:mt-8">{{ solutionData.title }}</h1>

			<div :class="`relative flex flex-col justify-center min-h-[400px] pt-12 pb-0 px-4 lg:py-24 lg:px-14 text-white rounded-3xl mt-12 bg-gradient-to-b from-[#000000] from-40% to-[${categoryData.color}] to-100%`">
				<div class="flex flex-col gap-8 lg:w-1/2">
					<h2 class="text-3xl lg:text-4xl font-semibold">{{ categoryData.sub_title }}</h2>
					<p class="text-sm" v-html="categoryData.description"></p>
					<NuxtLink to="/get-a-quote">
						<button class="p-2 min-w-[120px] text-sm border border-white text-white bg-transparent hover:border-black hover:text-black hover:bg-white rounded-full select-none transition-all duration-300 ease-in-out">Get a Quote</button>
					</NuxtLink>
				</div>
                <div class="w-full lg:w-1/2 relative lg:absolute bottom-0 right-0 max-lg:mt-12">
					<NuxtImg class="ml-auto w-full 2xl:w-4/5 4xl:w-3/5" :src="`/images/${solutionData.image}.webp`" alt="" width="" height="" />
				</div>
			</div>
		</div>
	</section>

    <div class="relative lg:mt-[calc(var(--section-1-height)+var(--header-height)-3rem)] lg:bg-white lg:z-20">
        <section v-if="solutionData" class="py-24 max-lg:py-6">
            <div class="container">
                <!-- <div class="flex max-lg:flex-col lg:items-center gap-12 lg:gap-48">
                    <div class="lg:w-3/5">
                        <h2 class="text-2xl font-bold">{{ solutionData.sub_title }}</h2>
                        <p class="text-lg mt-4" v-html="solutionData.description"></p>
                    </div>
                    <div class="lg:w-2/5 flex flex-col justify-center gap-12 bg-[#F8F8F9] p-12 rounded-3xl">
                        <div v-for="(feature, index) in solutionData.features" :key="index" class="flex items-center gap-12">
                            <NuxtImg class="flex-shrink-0" :src="`images/icons/${feature.icon}.svg`" :alt="feature.title" width="52" height="52" />
                            <h2 class="text-lg lg:text-xl font-semibold">{{ feature.title }}</h2>
                        </div>
                    </div>
                </div> -->

                <div class="flex flex-col justify-center gap-8 lg:w-2/3 mx-auto text-center">
                    <h2 class="text-2xl lg:text-4xl font-semibold">{{ solutionData.sub_title }}</h2>
                    <p class="text-lg text-[#5D5D5D]" v-html="solutionData.description"></p>

                    <div class="flex max-lg:flex-col gap-16 lg:gap-24 lg:justify-around mt-12">
                        <div v-for="(feature,index) in solutionData.features" :key="index" class="flex-1 flex flex-col gap-4 text-center items-center">
                            <NuxtImg class="flex-shrink-0" :src="`images/icons/${feature.icon}.svg`" :alt="feature.title" width="52" height="52" />
                            <h3 class="text-lg lg:text-xl font-semibold">{{ feature.title }}</h3>
                        </div>
                    </div>
                </div>

                <NuxtImg class="w-full mt-12 pt-12" :src="`images/${solutionData.image1}.webp`" :alt="solutionData.title" width="2292" height="1482" />
            </div>
        </section>
    
        <section v-if="solutionData" class="py-12 bg-[#F8F8F9]">
            <div class="container">
                <div class="py-12 lg:py-24 px-4 lg:px-14 text-white rounded-3xl bg-[url('/images/solutions-category-bg.webp')] bg-cover bg-center">
                    <div class="flex flex-col items-center text-center gap-8 lg:w-1/2 mx-auto">
                        <h3 class="text-sm uppercase">Key Benefits</h3>
                        <h2 class="text-xl lg:text-3xl font-semibold">{{ solutionData.benefits.title }}</h2>
                    </div>
                    <div class="flex max-lg:flex-col justify-between gap-4 lg:gap-8 w-full xl:w-4/5 mx-auto mt-12 text-center">
                        <h4 v-for="(item, index) in solutionData.benefits.items" :key="index" class="flex-1 p-4 lg:p-8 border rounded-3xl text-xl font-semibold flex items-center justify-center">{{ item }}</h4>
                    </div>
                </div>

                <div class="flex flex-col justify-between gap-8 mt-12 pt-12">
                    <div>
                        <h4 class="text-sm">Application Scenario</h4>
                        <h2 class="text-xl lg:text-3xl font-semibold mt-4">Tailored Scenario for Every Challenge</h2>
                    </div>
                    <div class="grid gap-8 lg:gap-4 text-center" :class="{'md:grid-cols-2 lg:grid-cols-4': solutionData.application_scenario.length === 4, 'md:grid-cols-3': solutionData.application_scenario.length === 3, 'md:grid-cols-2 lg:grid-cols-4': solutionData.application_scenario.length >= 4 && solutionData.application_scenario.length % 2 === 0}">
                        <div v-for="(scenario, index) in solutionData.application_scenario" :key="index" class="relative aspect-video overflow-hidden rounded-3xl">
                            <NuxtImg class="w-full h-full object-cover" :src="`/images/${scenario.image}.webp`" :alt="scenario.title" width="366" height="342" />
                            <h2 class="absolute bottom-8 left-8 text-2xl font-bold text-white mt-4">{{ scenario.title }}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section v-if="solutionData" class="mt-12 lg:mt-24 pb-56 bg-white">
            <div class="container">
                <div class="flex flex-col gap-8">
                    <h3 class="text-xl lg:text-3xl font-semibold">Included Products</h3>
                    <div class="grid lg:grid-cols-3 gap-4 lg:gap-8">
                        <div v-for="(product, productIndex) in solutionData.products" :key="productIndex" class="flex flex-col justify-between items-center gap-12 py-12 px-4 lg:px-8 text-center bg-[#F8F8F9] rounded-3xl">
                            <div class="flex flex-col justify-center items-center gap-4 w-full">
                                <NuxtImg class="w-full" :src="`/images/${product.image}.webp`" :alt="product.title" width="" height="" />
                                <h3 class="text-sm mt-6">{{ product.sub_title }}</h3>
                                <NuxtLink :to="`/products/${slugify(product.category)}/${slugify(product.sub_category)}/${slugify(product.title)}`">
                                    <h2 class="text-2xl font-BankGothic font-bold">{{ product.title }}</h2>
                                </NuxtLink>
                            </div>
                            <div class="flex gap-4">
                                <NuxtLink to="/get-a-quote">
                                    <button class="p-2 min-w-[120px] text-sm text-white bg-primary hover:text-white hover:bg-black rounded-full select-none transition-all duration-300 ease-in-out">Get a Quote</button>
                                </NuxtLink>
                                <NuxtLink :to="`/products/${slugify(product.category)}/${slugify(product.sub_category)}/${slugify(product.title)}`" class="flex lg:justify-between items-center gap-2 text-base text-primary">
                                    <button class="transition-all duration-300 ease-in-out text-nowrap">Learn More</button>
                                    <Icon name="fa6-solid:angle-right" class="transition duration-300 ease-in-out group-hover:translate-x-1" />
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    import slugify from "@/utils/slugify";
	import categories from '~/data/solutions';

    const route = useRoute();
    const categorySlug = ref(route.params.category);
    const solutionSlug = ref(route.params.solution);
    const categoryData = ref(null);
    const solutionData = ref(null);

    onMounted(() => {
        // Find the main category
        categoryData.value = categories.find(cat => slugify(cat.title) === categorySlug.value);
        if (!categoryData.value) return;
        // Find the solution within the category
        solutionData.value = categoryData.value.solutions.find(s => slugify(s.title) === solutionSlug.value) || null;

        
    });

    // Update SEO metadata dynamically when categoryData is available
    watchEffect(() => {
        if (categoryData.value && solutionData.value) {
            useSeoMeta({
                title: `${solutionData.value.title} - ${categoryData.value.title}`,
                description: `Discover ${solutionData.value.title} solutions and services.`,
                
                ogTitle: `${solutionData.value.title} - ${categoryData.value.title}`,
                ogDescription: `Explore top solutions in ${solutionData.value.title}.`,
                ogImage: 'https://moya.com/images/og-image-1200x630.png',
                
                twitterTitle: `${solutionData.value.title} - ${categoryData.value.title}`,
                twitterDescription: `Explore ${solutionData.value.title} for innovative solutions.`,
                twitterCard: 'summary_large_image',
            });
        }
    });

    // Watch for when solutionData is set
    watch(solutionData, async (val) => {
        if (val) {
            await nextTick(); // wait for DOM update
            const section1 = document.getElementById('section-1');
            if (section1) {
                const section1Height = section1.getBoundingClientRect().height;
                document.documentElement.style.setProperty('--section-1-height', `${section1Height}px`);
            } else {
            }
        }
    });
</script>