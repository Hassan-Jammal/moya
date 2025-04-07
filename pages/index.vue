<template>
    <section class="h-[calc(100vh-var(--header-height))] flex items-center relative bg-black">
        <div class="absolute bottom-0 left-0 w-full z-[1]">
            <video width="100%" autoplay loop muted playsinline class="hidden lg:block w-full h-full object-cover opacity-full">
                <source src="/videos/main-banner-desktop.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <video width="100%" autoplay loop muted playsinline class="block lg:hidden w-full h-full object-cover opacity-full">
                <source src="/videos/main-banner-mobile.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>

        <div class="container">
            <div class="relative flex flex-col gap-8 max-lg:items-center text-white max-lg:text-center z-[3] max-lg:-mt-80
            ">
                <h1 class="text-3xl lg:text-6xl font-bold lg:w-2/5">Connecting Your World<span class="text-primary"> Everywhere</span></h1>
                <p class="text-sm text-[#ACA8A8] lg:w-1/3">Stay connected effortlessly with our reliable telecom solutions, ensuring seamless communication anytime, anywhere. Experience high-speed networks, crystal-clear calls, and innovative services.</p>
                
                <div class="flex gap-4">
                    <NuxtLink to="/">
                        <button class="p-2 min-w-[120px] text-sm text-black bg-white hover:text-white hover:bg-primary rounded-full select-none transition-all duration-300 ease-in-out">Explore</button>
                    </NuxtLink>

                    <NuxtLink to="/contact-us">
                        <button class="p-2 min-w-[120px] text-sm text-white bg-primary hover:text-black hover:bg-white rounded-full select-none transition-all duration-300 ease-in-out">Contact Us</button>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>

    <section class="py-12 bg-[#F8F8F9]">
        <div class="container">
            <h2 class="text-center text-base lg:text-xl font-semibold">Trusted by Top Companies Worlwide</h2>
        </div>

        <div class="marquee overflow-hidden">
            <div class="wrapper grid grid-flow-col auto-cols-[10rem] lg:auto-cols-[15rem] justify-items-center items-center mt-10 lg:my-10 animate-[marquee_20s_linear_infinite] lg:animate-[marqueelg_20s_linear_infinite]">
                <template v-for="(marquee, index) in duplicatedMarqueeList" :key="index">
                    <a :href="marquee.link" target="_blank">
                        <NuxtImg class="marquee-item w-full opacity-75" :src="`images/${marquee.image}.webp`" :alt="marquee.alt" :width="marquee.width" :height="marquee.height" />
                    </a>
                </template>
            </div>
        </div>
    </section>
    
    <section class="my-12 py-12">
        <div class="container">
            <div class="flex flex-col gap-4">
                <h2 class="text-2xl lg:text-5xl font-semibold">Moya's Solutions</h2>
                <h3 class="text-xl lg:text-2xl font-semibold">Your Trusted Telecom Partner</h3>
            </div>
            <ClientOnly>
                <swiper-container 
                    :slides-per-view="1.2" 
                    :speed="1000"
                    :space-between="25"
                    :grabCursor="true"
                    :scrollbar="true"
                    :breakpoints="{
                        1280: {
                            slidesPerView:3.2
                        },
                        1024: {
                            slidesPerView:2.5
                        }
                    }"
                    class="mt-14"
                >
                    <swiper-slide v-for="(solution, index) in solutions" :key="index" :class="`h-auto flex flex-col items-between justify-between gap-12 group block relative rounded-3xl aspect-[3/4] lg:aspect-video bg-gradient-to-b from-[#000000] from-40% to-[${solution.color}] to-100%`">
                        <div class="flex flex-col pt-12 px-4 lg:px-12 text-white">
                            <h2 class="text-base font-semibold">{{ solution.category }}</h2>
                            <h3 class="text-2xl lg:text-3xl font-semibold mt-4">{{ solution.title }}</h3>
                            <NuxtLink :to="`/solutions/${slugify(solution.category)}/${slugify(solution.title)}`">
                                <button class="flex justify-center items-center gap-2 mt-8 p-2 min-w-[120px] text-sm border border-white text-white bg-transparent hover:border-black hover:text-black hover:bg-white rounded-full select-none transition-all duration-300 ease-in-out group">
                                    Learn More
                                    <Icon name="fa6-solid:angle-right" class="transition duration-300 ease-in-out group-hover:translate-x-1" />
                                </button>
                            </NuxtLink>
                        </div>
                        <NuxtImg class="w-full lg:w-4/5 mx-auto" :src="`images/${solution.image}.webp`" :alt="solution.title" :width="solution.width" :height="solution.height" />
                    </swiper-slide>
                </swiper-container>
            </ClientOnly>
        </div>
    </section>

    <section class="mt-12 py-12 bg-[#F8F8F9]">
        <div class="container">
            <div class="flex flex-col gap-4">
                <h2 class="text-2xl lg:text-5xl font-semibold">Why Choose Moya</h2>
                <h3 class="text-xl lg:text-2xl font-semibold">What Makes Us Different</h3>
            </div>

            <ClientOnly>
                <swiper-container 
                    :slides-per-view="1.2" 
                    :speed="1000"
                    :loop="true"
                    :autoplay="{ delay: 5000 }"
                    :space-between="25"
                    :grabCursor="true"
                    :breakpoints="{
                        1280: {
                            slidesPerView:4.2 
                        },
                        1024: {
                            slidesPerView:1.5 
                        },
                        640: {
                            slidesPerView:2.2 
                        }
                    }"
                    class="mt-14"
                >
                    <!-- :centered-slides="true" -->
                    <swiper-slide v-for="(value, index) in values" :key="index" class="flex flex-col gap-8 h-auto p-4 lg:p-8 rounded-3xl bg-white">
                        <NuxtImg :src="`images/icons/${value.icon}.svg`" :alt="value.title" width="42" height="42" />
                        <h3 class="text-2xl font-semibold">{{ value.title }}</h3>
                        <p class="text-base">{{ value.description }}</p>
                    </swiper-slide>
                </swiper-container>  
            </ClientOnly>
        </div>
    </section>

    <section class="pt-12 md:pt-32 xl:pt-56 pb-12 text-white bg-gradient-to-b from-[#F8F8F9] from-50% to-white to-50%">
        <div class="container">
            <div class="relative flex md:justify-end md:items-center py-12 px-4 md:px-8 rounded-3xl md:aspect-[24/9]">
                <div class="hidden md:block absolute bottom-0 md:left-0 lg:left-24 w-1/2 lg:w-2/5 z-20">
                    <NuxtImg src="/images/have-questions-talk-to-us.webp" alt="" width="" height="" />
                </div>
                
                <div class="absolute top-0 left-0 w-full h-full z-10 rounded-3xl overflow-hidden">
                    <NuxtImg class="w-full h-full object-cover" src="/images/have-questions-talk-to-us-bg.webp" alt="Have Questions Image" width="3480" height="986" />
                </div>

                <div class="flex flex-col gap-4 md:w-1/2 z-10">
                    <h2 class="text-2xl md:text-5xl font-semibold">Have Questions?<br />Talk To Us</h2>
                    <p class="text-sm">Get in touch with us at Moya easily! Whether you have questions<br class="max-lg:hidden" /> or need assistance.</p>
                    <NuxtLink to="/contact-us">
                        <button class="p-2 min-w-[120px] text-sm text-black bg-white hover:text-white hover:bg-black rounded-full select-none transition-all duration-300 ease-in-out mt-2">Get in Touch</button>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>

    <section class="mt-12 py-12">
        <div class="container">
            <div class="flex flex-col gap-4">
                <h2 class="text-2xl lg:text-5xl font-semibold">Moya's Products</h2>
                <h3 class="text-xl lg:text-2xl font-semibold">Empowering Connections with Every Product</h3>
            </div>
            <div class="flex max-lg:flex-col flex-row justify-between lg:items-center gap-4 mt-12 overflow-scroll">
                <div class="flex gap-2">
                    <div @click="handleCategory(index)" v-for="(category, index) in categories" :key="index" class="py-2 px-6 border rounded-full cursor-pointer text-nowrap" :class="activeCategory === index ? 'bg-primary text-white' : ''">{{ category.title }}</div>
                </div>

                <!-- <NuxtLink v-if="showExplore" :to="exploreLink" class="hidden lg:flex lg:justify-between items-center gap-2 text-base text-primary">
                    <button class="transition-all duration-300 ease-in-out">Explore All</button>
                    <Icon name="fa6-solid:arrow-right" class="transition duration-300 ease-in-out group-hover:translate-x-1" />
                </NuxtLink> -->
            </div>
            <div class="mt-12">
                <div v-for="(category, index) in categories" :key="index" class="element flex flex-col gap-4" :class="activeCategory === index ? 'block' : 'hidden'">
                    <div class="grid lg:grid-cols-3 gap-4 rounded-3xl">
                        <template v-if="category.sub_categories.length">
                            <div v-for="(product, productIndex) in getThreeProducts(category.sub_categories)" :key="productIndex" class="flex flex-col justify-between items-center gap-12 py-12 px-4 lg:px-8 text-center bg-[#F8F8F9] rounded-3xl">
                                <div class="flex flex-col justify-center items-center gap-4">
                                    <NuxtImg class="w-full" :src="`/images/${product.image_outer}.webp`" :alt="product.title" width="" height="" />
                                    <h3 class="text-sm">{{ product.sub_title }}</h3>
                                    <NuxtLink :to="`/products/${slugify(category.title)}/${slugify(product.title)}`">
                                        <h2 class="text-3xl font-BankGothic font-bold">{{ product.title }}</h2>
                                    </NuxtLink>
                                </div>
                                <div class="flex gap-4">
                                    <NuxtLink to="/get-a-quote">
                                        <button class="p-2 min-w-[120px] text-sm text-white bg-primary hover:text-white hover:bg-black rounded-full select-none transition-all duration-300 ease-in-out">Get a Quote</button>
                                    </NuxtLink>
                                    <NuxtLink :to="`/products/${slugify(category.title)}/${slugify(product.title)}`" class="flex lg:justify-between items-center gap-2 text-base text-primary">
                                        <button class="transition-all duration-300 ease-in-out">Learn More</button>
                                        <Icon name="fa6-solid:angle-right" class="transition duration-300 ease-in-out group-hover:translate-x-1" />
                                    </NuxtLink>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
            </div>

            <!-- <NuxtLink v-if="showExplore" :to="exploreLink" class="lg:hidden flex lg:justify-between items-center gap-2 text-base text-primary mx-auto text-center mt-4">
                <button class="transition-all duration-300 ease-in-out">Explore All</button>
                <Icon name="fa6-solid:arrow-right" class="transition duration-300 ease-in-out group-hover:translate-x-1" />
            </NuxtLink> -->
        </div>
    </section>

    <section class="mt-12 pt-24 pb-24 bg-[#F8F8F9] text-center">
		<div class="container">
			<h2 class="text-2xl lg:text-5xl font-semibold">The Heart of Moya: <br /> Our Core Identity and Vision</h2>
			<div class="grid lg:grid-cols-3 gap-8 w-4/5 mx-auto mt-12 lg:mt-24">
				<div v-for="(identity, index) in identities" :key="index" class="flex flex-col items-center gap-4">
					<NuxtImg :src="`images/icons/${identity.icon}.svg`" :alt="identity.title" width="52" height="52" />
					<h3 class="text-2xl font-semibold">{{ identity.title }}</h3>
					<p class="text-base text-[#ACA8A8]" v-html="identity.description"></p>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
    import categories from '~/data/products';
    import slugify from '~/utils/slugify';
    
    useSeoMeta({
        title: 'Connecting Your World Everywhere',
        description: 'Stay connected effortlessly with our reliable telecom solutions, ensuring seamless communication anytime, anywhere. Experience high-speed networks, crystal-clear calls, and innovative services.',

        ogTitle: 'Connecting Your World Everywhere',
        ogDescription: 'Stay connected effortlessly with our reliable telecom solutions, ensuring seamless communication anytime, anywhere. Experience high-speed networks, crystal-clear calls, and innovative services.',
        ogImage: 'https://moya.com/images/og-image-1200x630.png',

        twitterTitle: 'Connecting Your World Everywhere',
        twitterDescription: 'Stay connected effortlessly with our reliable telecom solutions, ensuring seamless communication anytime, anywhere. Experience high-speed networks, crystal-clear calls, and innovative services.',
        twitterCard: 'summary_large_image',
    })
    
    const activeCategory = ref(0);
    // const showExplore = ref(false);
    // const exploreLink = ref("/");

    // const handleCategory = (index) => {
    //     activeCategory.value = index;
    //     const subCategories = categories[index]?.sub_categories || [];
    //     showExplore.value = subCategories.length > 1;
    //     exploreLink.value = subCategories.length > 0 ? `products/${categories[index].title.toLowerCase()}` : "/";
    // }

    // const showExplore = ref(true);
    // const exploreLink = ref("/");

    const handleCategory = (index) => {
        activeCategory.value = index;
        const subCategories = categories[index]?.sub_categories || [];
        // showExplore.value = subCategories.length > 1;
        // exploreLink.value = `products/${slugify(categories[index].title)}`;
    }
    
    // // Set the initial explore link when the component is mounted
    // onMounted(() => {
    //     if (categories.length > 0) {
    //         exploreLink.value = `products/${slugify(categories[0].title)}`;
    //     }
    // });

    const getThreeProducts = (subCategories) => {
        // Limit to the first 3 subcategories
        
        subCategories = subCategories.slice(0, 3);
        // Step 1: Pick one product from each subcategory
        let products = subCategories.flatMap((sub) => sub.products.slice(0, 1));

        // Step 2: If we still have less than 3 products, get extra products from subcategories
        if (products.length < 3) {
            const extraProducts = subCategories.flatMap((sub) => sub.products.slice(1));
            products = [...products, ...extraProducts].slice(0, 3);
        }

        return products;
    };

    const marqueeList = [
        { image: "1", alt: "MyMonty", width: "174", height: "35", link: "https://mymonty.com" },
        { image: "2", alt: "Comium", width: "154", height: "38", link: "https://comium.gm" },
        { image: "3", alt: "MontyPay", width: "183", height: "33", link: "https://montypay.com" },
        { image: "4", alt: "Monty Mobile", width: "154", height: "48", link: "https://montymobile.com" },
        { image: "5", alt: "Monty Capital", width: "225", height: "35", link: "https://montycapital.com" },
        { image: "1", alt: "MyMonty", width: "174", height: "35", link: "https://mymonty.com" },
        { image: "2", alt: "Comium", width: "154", height: "38", link: "https://comium.gm" },
        { image: "3", alt: "MontyPay", width: "183", height: "33", link: "https://montypay.com" },
        { image: "4", alt: "Monty Mobile", width: "154", height: "48", link: "https://montymobile.com" },
        { image: "5", alt: "Monty Capital", width: "225", height: "35", link: "https://montycapital.com" },
    ];

    const duplicatedMarqueeList = computed(() => [...marqueeList, ...marqueeList]);

    const solutions = [
        {  
            title: "MNO Solution", 
            category: "Core Network", 
            link: "",
            image: "mno-solution-partner", 
            color: "#2B6FF6", 
        },
        {  
            title: "Dense Area Solution", 
            category: "4G/5G RAN", 
            link: "",
            image: "dense-area-solution-partner", 
            color: "#43516D", 
        },
        {  
            title: "Fiber Solution", 
            category: "Repeater", 
            link: "",
            image: "fiber-solution-partner", 
            color: "#323D86", 
        },
        {  
            title: "FWA Solution", 
            category: "Core Network", 
            link: "",
            image: "fwa-solution-partner", 
            color: "#2B6FF6", 
        },
        {  
            title: "Rural Area Solution", 
            category: "4G/5G RAN", 
            link: "",
            image: "rural-area-solution-partner", 
            color: "#43516D", 
        },
        {  
            title: "Wireless Solution", 
            category: "Repeater", 
            link: "",
            image: "wireless-solution-partner", 
            color: "#323D86", 
        },
        {  
            title: "Enterprise / Private Network Solution", 
            category: "Core Network", 
            link: "",
            image: "enterprise-solution-partner", 
            color: "#2B6FF6", 
        },
        {  
            title: "Indoor Solution", 
            category: "4G/5G RAN", 
            link: "",
            image: "indoor-solution-partner", 
            color: "#43516D", 
        },
        {  
            title: "ICS Wireless Solution", 
            category: "Repeater", 
            link: "",
            image: "ics-wireless-solution-partner", 
            color: "#2B6FF6", 
        },
    ]

    const values = [
        {
            title: "Carrier Grade Guarantee",
            description: "High-quality, reliable, and robust standards provided by Moya to ensure services meet enterprise-level expectations.",
            icon: "carrier-grade-guarantee",
        },
        {
            title: "End to End Solution",
            description: "Comprehensive service that addresses all aspects of a customer's need, from start to finish and ensuring seamless integration, performance, and support.",
            icon: "end-to-end-solution",
        },
        {
            title: "Fiel Proven Product",
            description: "Comprehensive service that addresses all aspects of a customer's need, from start to finish and ensuring seamless integration, performance, and support.",
            icon: "fiel-proven-product",
        },
        {
            title: "Save Capex & Opex",
            description: "Frees up resources for innovation and business growth. Improves ROI by reducing unnecessary expenses. Enhances competitive advantage by optimizing cost-efficiency.",
            icon: "save-copex-and-opex",
        },
        {
            title: "Tailor Made Solution",
            description: "Customized service or product designed to meet the specific needs and goals of a business.",
            icon: "tailor-made-solution",
        },
        {
            title: "3rd-party Product integrated Openly",
            description: "Seamlessly connected with third-party solutions.",
            icon: "3rd-party-product-integrated-openly",
        },
    ]

    const identities = [
        {
            title: "Seamless Connectivity",
            description: "Stay Connected Anytime, Anywhere. <br /> Experience uninterrupted communication with our reliable network.",
            icon: "seamless-connectivity-homepage",
        },
        {
            title: "Advanced Technology",
            description: "Innovative Solutions for a Digital World. <br /> Leverage the power of cutting-edge telecom technology.",
            icon: "advanced-technology",
        },
        {
            title: "Dedicated Support",
            description: "24/7 Support, Tailored to You. <br /> We're here round the clock, offering personalized solutions to meet your need",
            icon: "dedicated-support",
        },
    ]

</script>

<style lang="sass" scoped>
    swiper-container::part(scrollbar) 
        position: relative
        height: 2px
        background-color: #2B6FF622
        margin-top: 100px

    .marquee .wrapper:hover
        animation-play-state: paused
</style>