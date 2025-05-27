<template>
    <section class="py-24 relative">
        <div class="absolute bottom-0 left-0 w-full h-full">
            <NuxtImg class="w-full h-full object-cover" src="images/technology-bg.webp" alt="Technology Bg" width="" height="" />
        </div>
		<div class="container relative z-10 text-center text-white py-12">
            <div class="flex flex-col items-center gap-6">
                <ul class="hidden lg:flex items-center flex-wrap gap-2 text-xs">
                   <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li class="flex"><Icon name="fa6-solid:angle-right" /></li>
                    <li>Technology</li>
                    <li class="flex"><Icon name="fa6-solid:angle-right" /></li>
                    <li>Innovation</li>
                </ul>
                <h1 class="text-3xl lg:text-4xl font-bold">Innovating the Way the World Connects</h1>
                <p class="text-base">Where Intelligent Antennas Meet Tomorrow’s Demands</p>
            </div>
        </div>
	</section>

    <section class="py-12 lg:py-24">
        <div class="container">
            <div class="flex flex-col justify-center gap-8 w-full lg:w-2/3 2xl:w-1/2">
                <h2 class="text-2xl lg:text-4xl font-semibold">High-Capacity Macro Base Station</h2>
                <p class="text-[#5D5D5D]">Moya’s groundbreaking technology enables MNOs to optimize coverage and serve more users efficiently. Developed by our visionary engineers with profitability as a top priority, this innovation accommodates a significantly higher number of simultaneous users compared to competitors, while offering wider geographical coverage. At the heart of our technology are some of the world’s most powerful single onboard chipsets, featuring advanced radio frequency and baseband designs.<br /><br />These chipsets not only reduce power consumption but also implement sophisticated algorithms to maximize the efficiency of power amplifiers, resulting in great energy savings. As energy consumption is a major operational cost in mobile networks, and with growing global concerns around climate change and sustainability, reducing energy usage has become more critical than ever.</p>
            </div>

            <div class="flex max-lg:flex-col gap-12 lg:gap-8 mt-12">
                <div class="grid sm:grid-cols-2 auto-rows-max gap-8 lg:gap-20 w-full lg:w-1/2 mt-12">
                    <div class="flex items-start gap-4 lg:gap-8">
                        <NuxtImg class="flex-shrink-0" :src="`images/icons/enhanced-network.svg`" alt="" width="52" height="52" />
                        <h2 class="text-lg lg:text-xl font-semibold">Enhanced network capacity and improved user experience</h2>
                    </div>
                    <div class="flex items-start gap-4 lg:gap-8">
                        <NuxtImg class="flex-shrink-0" :src="`images/icons/increased-flexibility.svg`" alt="" width="52" height="52" />
                        <h2 class="text-lg lg:text-xl font-semibold">Increased flexibility in deployment</h2>
                    </div>
                    <div class="flex items-start gap-4 lg:gap-8">
                        <NuxtImg class="flex-shrink-0" :src="`images/icons/extended-coverage.svg`" alt="" width="52" height="52" />
                        <h2 class="text-lg lg:text-xl font-semibold">Extended coverage and reduced dead zones</h2>
                    </div>
                    <div class="flex items-start gap-4 lg:gap-8">
                        <NuxtImg class="flex-shrink-0" :src="`images/icons/facilitated-integration.svg`" alt="" width="52" height="52" />
                        <h2 class="text-lg lg:text-xl font-semibold">Facilitated integration with existing infrastructure</h2>
                    </div>
                </div>
                <div class="w-full lg:w-1/2 2xl:w-1/3 mx-auto">
                    <NuxtImg class="w-full" src="images/high-capacity-macro-base-station.webp" alt="Products Background" width="" height="" />
                </div>
            </div>
        </div>
    </section>

    <section class="py-12 lg:py-24 bg-[#F8F8F9]">
        <div class="container">
            <div class="flex flex-col justify-center items-center gap-8 w-full lg:w-2/3 text-center mx-auto">
                <h2 class="text-2xl lg:text-4xl font-semibold">High Spectral Efficiency</h2>
                <p class="text-[#5D5D5D]">Without high spectral efficiency, even the most advanced technologies fall short. Moya’s technology surpasses competitors by offering significantly higher spectral efficiency, enabling the transmission of more data, more bits per Hertz of spectrum per second, within a given cell.<br /><br />This increased efficiency translates into greater network capacity, which service providers can utilize according to their business goals. They can enhance user-experience to deliver premium services or maintain the same service levels while reducing the number of base stations required, cutting costs.<br /><br />Moya achieves this high spectral efficiency through innovative techniques such as spatial diversity, advanced MIMO, adaptive interference cancellation, and other optimizations. These methods allow operators to boost efficiency without substantially compromising coverage or needing to drastically increase the number of cells.</p>
            </div>
        </div>

        <div class="container">
            <div class="grid lg:grid-cols-3 gap-6 lg:gap-12 mt-24">
                <div class="w-full flex flex-col gap-6 lg:gap-12">
                    <div class="flex items-center gap-4 h-full rounded-3xl bg-primary p-8">
                        <NuxtImg class="flex-shrink-0" :src="`images/icons/increased-capacity-within-the-same-bandwidth.svg`" alt="" width="52" height="52" />
                        <h2 class="text-lg lg:text-xl 2xl:text-2xl font-semibold text-white">Increased capacity within the same bandwidth</h2>
                    </div>
                    <div class="flex items-center gap-4 h-full rounded-3xl bg-white p-8">
                        <NuxtImg class="flex-shrink-0" :src="`images/icons/reduced-interference-and-enhanced-signal-quality.svg`" alt="" width="52" height="52" />
                        <h2 class="text-lg lg:text-xl 2xl:text-2xl font-semibold">Reduced interference and enhanced signal quality</h2>
                    </div>
                </div>
                <div class="w-full flex flex-col gap-6 lg:gap-12">
                    <div class="h-full rounded-3xl">
                        <NuxtImg class="w-full" src="/images/high-spectral-efficiency.webp" alt="" />
                    </div>
                </div>
                <div class="w-full flex flex-col gap-6 lg:gap-12">
                    <div class="flex items-center gap-4 h-full rounded-3xl bg-[#DFEAFF] p-8">
                        <NuxtImg class="flex-shrink-0" :src="`images/icons/increased-cost-efficiency-for-operators.svg`" alt="" width="52" height="52" />
                        <h2 class="text-lg lg:text-xl 2xl:text-2xl font-semibold">Increased cost efficiency for operators</h2>
                    </div>
                    <div class="flex items-center gap-4 h-full rounded-3xl bg-black p-8">
                        <NuxtImg class="flex-shrink-0" :src="`images/icons/facilitated-deployment-of-next-generation-applications.svg`" alt="" width="52" height="52" />
                        <h2 class="text-lg lg:text-xl 2xl:text-2xl font-semibold text-white">Facilitated deployment of next-generation applications, such as 5G and IoT</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="pt-12 lg:pt-24">
        <div class="container">
            <div class="flex flex-col justify-center items-center gap-8 w-full xl:w-2/3 mx-auto text-center">
                <h2 class="text-2xl lg:text-4xl font-semibold">Maximize revenue, Optimize efficiency,<br />Lead the future of mobile.</h2>
            </div>
        </div>
        <NuxtImg class="w-full mt-24" src="images/maximize-revenue-optimize-efficiency.webp" alt="Maximize revenue, Optimize efficiency" width="2878" height="1256"  />
	</section>
        
    <section class="py-12 lg:py-24 bg-[#F8F8F9]">
        <div class="container">
            <div class="flex flex-col justify-center gap-8 w-full lg:w-2/3">
                <h2 class="text-2xl lg:text-4xl font-semibold">High-Capacity Macro Base Station</h2>
                <p class="text-[#5D5D5D]">Moya’s groundbreaking technology enables MNOs to optimize coverage and serve more users efficiently. Developed by our visionary engineers with profitability as a top priority, this innovation accommodates a significantly higher number of simultaneous users compared to competitors, while offering wider geographical coverage. At the heart of our technology are some of the world’s most powerful single onboard chipsets, featuring advanced radio frequency and baseband designs.<br /><br />These chipsets not only reduce power consumption but also implement sophisticated algorithms to maximize the efficiency of power amplifiers, resulting in great energy savings. As energy consumption is a major operational cost in mobile networks, and with growing global concerns around climate change and sustainability, reducing energy usage has become more critical than ever.</p>
            </div>


            <!-- <div class="flex justify-center flex-wrap gap-">
                <div v-for="(benefit, index) in benefits" :key="index" class="flex flex-col gap-4 bg-white rounded-2xl p-6 basis-1/3 w-full">
                    <NuxtImg class="flex-shrink-0" :src="`images/icons/increased-cost-efficiency-for-operators.svg`" alt="" width="52" height="52" />
                    <h3 class="text-lg font-semibold text-gray-900">{{ benefit.title }}</h3>
                    <p class="text-gray-600">{{ benefit.description }}</p>
                </div>
            </div> -->

            <div class="grid lg:grid-cols-6 gap-8 mt-12">
                <div class="flex flex-col gap-4 lg:col-start-1 lg:col-end-3 bg-white rounded-2xl p-6">
                    <NuxtImg class="flex-shrink-0" :src="`images/icons/optimized-resource-use.svg`" alt="Optimized Resource Use" width="52" height="52" />
                    <h3 class="text-2xl font-semibold text-gray-900">Optimized Resource Use</h3>
                    <p class="text-gray-600">Effective resource allocation and increased profitability</p>
                </div>
                <div class="flex flex-col gap-4 lg:col-start-3 lg:col-end-5 bg-white rounded-2xl p-6">
                    <NuxtImg class="flex-shrink-0" :src="`images/icons/reduced-emissions.svg`" alt="Optimized Resource Use" width="52" height="52" />
                    <h3 class="text-2xl font-semibold text-gray-900">Reduced Emissions</h3>
                    <p class="text-gray-600">Reduced carbon emissions and enhanced regulatory requirements</p>
                </div>
                <div class="flex flex-col gap-4 lg:col-start-5 lg:col-end-7 bg-white rounded-2xl p-6">
                    <NuxtImg class="flex-shrink-0" :src="`images/icons/higher-reliability-and-uptime.svg`" alt="Higher Reliability & Uptime" width="52" height="52" />
                    <h3 class="text-2xl font-semibold text-gray-900">Higher Reliability & Uptime</h3>
                    <p class="text-gray-600">Increased network reliability and improved uptime</p>
                </div>
                <div class="flex flex-col gap-4 lg:col-start-1 lg:col-end-4 bg-white rounded-2xl p-6">
                    <NuxtImg class="flex-shrink-0" :src="`images/icons/longer-equipment-lifespan.svg`" alt="Longer Equipment Lifespan" width="52" height="52" />
                    <h3 class="text-2xl font-semibold text-gray-900">Longer Equipment Lifespan</h3>
                    <p class="text-gray-600">Extended equipment lifespan and reduced replacement costs</p>
                </div>
                <div class="flex flex-col gap-4 lg:col-start-4 lg:col-end-7 bg-white rounded-2xl p-6">
                    <NuxtImg class="flex-shrink-0" :src="`images/icons/flexible-site-deployment.svg`" alt="Flexible Site Deployment" width="52" height="52" />
                    <h3 class="text-2xl font-semibold text-gray-900">Flexible Site Deployment</h3>
                    <p class="text-gray-600">Increased flexibility in site location</p>
                </div>
            </div>
        </div>
    </section>

    <section class="pt-12 lg:pt-24 pb-56">
        <div class="container">
            <div class="flex flex-col justify-center items-center gap-8 w-full lg:w-2/3 text-center mx-auto">
                <h2 class="text-2xl lg:text-4xl font-semibold">Targeted Signal Transmission</h2>
                <p class="text-[#5D5D5D]">Moya’s advanced BTS system enhances communication by optimizing signal transmission, focusing it directly on the end user rather than broadcasting it randomly. By utilizing the precise geographical location of the user, the signal is transmitted below noise level, creating a cleaner radio environment. This approach allows for the reuse of the same spectrum within the same cell and time slot.<br /><br /> Thanks to this personalized signal transmission, Moya’s base stations support higher capacity while covering a wider area with less transmitted power. This reduces the need for multiple cells to cover the same area, enabling more simultaneous users within a single cell. As a result, fewer base stations are required, leading to significantly lower operational costs.</p>
            </div>

            <ClientOnly>
                <swiper-container 
                    :slides-per-view="1.2" 
                    :speed="1000"
                    :space-between="25"
                    :grabCursor="true"
                    :pagination="true"
                    :breakpoints="{
                        1280: {
                            slidesPerView:3.7
                        },
                        1024: {
                            slidesPerView:2.5
                        }
                    }"
                    class="mt-14"
                >
                    <swiper-slide v-for="(item, index) in items" :key="index" class="h-auto flex flex-col items-between rounded-3xl bg-[#F8F8F9] overflow-hidden">
                        <img :src="`/images/${item.image}.webp`" :alt="item.title">
                        <div class="flex flex-col gap-8 py-12 px-4 lg:px-8">
                            <h2 class="text-2xl font-semibold">{{ item.title }}</h2>
                            <p v-html="item.description"></p>
                        </div>
                    </swiper-slide>
                </swiper-container>
            </ClientOnly>
        </div>
    </section>
</template>

<script setup>

    useSeoMeta({
        title: 'Innovation - Technology',
        description: '',

        ogTitle: 'Innovation - Technology',
        ogDescription: '',
        ogImage: 'https://moya.com/images/og-image-1200x630.png',

        twitterTitle: 'Innovation - Technology',
        twitterDescription: '',
        twitterCard: 'summary_large_image',
    })

    const benefits = [
        {
            icon: "",
            title: "Optimized Resource Use",
            description: "Effective resource allocation and increased profitability",
        },
        {
            icon: "",
            title: "Reduced Emissions",
            description: "Reduced carbon emissions and enhanced regulatory requirements",
        },
        {
            icon: "",
            title: "Higher Reliability & Uptime",
            description: "Increased network reliability and improved uptime",
        },
        {
            icon: "",
            title: "Longer Equipment Lifespan",
            description: "Extended equipment lifespan and reduced replacement costs",
        },
        {
            icon: "",
            title: "Flexible Site Deployment",
            description: "Increased flexibility in site location",
        },
    ]

    const items = [
        {
            title: "Lower Operational Load",
            description: "Lower energy consumption and reduced operational costs",
            image: "lower-operational-load",
        },
        {
            title: "Simplified Network Management",
            description: "Simplified network management improving overall operational efficiency",
            image: "simplified-network-management",
        },
        {
            title: "Reduced Environmental Impact",
            description: "Decreased environmental impact reducing the number of physical sites and energy consumption",
            image: "reduced-environmental-impact",
        },
        {
            title: "Scalable Deployment",
            description: "Flexible framework allowing easy expansion as user demand grows",
            image: "scalable-deployment",
        },
        {
            title: "Infrastructure Compatibility",
            description: "Designed to work seamlessly with advanced signal systems",
            image: "infrastructure-compability",
        },
    ]
</script>

<style lang="sass" scoped>
    swiper-container::part(pagination) 
        @apply relative mt-24

    swiper-container::part(bullet-active)  
        @apply w-8 rounded-full

    swiper-container::part(bullet)  
        @apply transition-all duration-300 ease-linear

</style>