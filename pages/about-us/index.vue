<template>
    <section class="mt-12 py-24 relative">
        <div class="absolute bottom-0 left-0 w-full h-full">
            <NuxtImg class="w-full h-full object-cover" src="images/about-us-bg.webp" alt="About Us" width="" height="" />
        </div>
		<div class="container relative z-10 text-center text-white py-12">
            <div class="flex flex-col items-center gap-6">
                <ul class="flex items-center flex-wrap gap-2 text-xs">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li class="flex"><Icon name="fa6-solid:angle-right" /></li>
                    <li>About Us</li>
                </ul>
                <h1 class="text-3xl lg:text-4xl font-bold">The Heart of Moya <br /> Our Core Identity & Vision</h1>
                <p class="text-base">Connecting the Future, Empowering Today.</p>
            </div>
        </div>
	</section>

    <section class="mt-12 max-lg:py-12">
        <div class="container">
            <div class="grid lg:grid-cols-2 gap-12 lg:gap-4 w-full lg:w-4/5 mx-auto">
                <NuxtImg class="w-full order-1 lg:order-0" src="images/mountasser-hachem.webp" alt="Mountasser Hachem" width="987" height="876" />
                <div class="flex flex-col justify-center gap-4 order-0 lg:order-1">
                    <span class="text-6xl text-primary italic leading-10">“</span>
                    <p class="text-xl italic">Although <span class="font-bold">innovation in the telecom</span> industry seems to be getting rarer every day, I believe there are still many opportunities <span class="font-bold">for the bold</span>. All that is needed is an agile, lean approach where innovation <span class="font-bold">is a must</span>.</p>
                    <p class="text-xl font-bold">Mountasser Hachem</p>
                    <span class="rotate-180 text-6xl text-primary italic self-end leading-10">“</span>
                </div>
            </div>
        </div>
	</section>

    <section class="py-24 bg-[#F8F8F9]">
        <div class="container">
            <div class="grid lg:grid-cols-2 items-center gap-8 lg:gap-32">
                <div class="flex flex-col justify-center gap-8">
                    <h3 class="text-sm">About Us</h3>
                    <h2 class="text-2xl lg:text-4xl font-semibold">Pioneering the Future of Telecommunications with Moya</h2>
                    <p class="text-sm text-[#5D5D5D]">With over 25 years of pioneering experience and a legacy of transformative success in the telecom industry, including the establishment of the mobile operator management business unit, Mountasser Hachem, founder and chairman of Monty Holding, is now bringing his visionary concept to life with the launch of Moya, his own telecom equipment brand. This bold venture marks the realization of a long-held vision, setting a new standard for the future of telecommunications technology.<br /><br />Moya seeks to break free from these outdated paradigms, offering fast, agile deployment, just like a "network in a box," with extreme interoperability and no license limitations.<br /><br />Our roadmap includes deploying a 4G core based on Release 9, to be tested and certified through the Comium network. Following this, IMS and Diameter systems will be integrated in the coming quarters. Designed and assembled in Sweden, with production in the Far East, the plan also encompasses O-RAN, IoT, and AI.
                    </p>
                </div>
                <video width="100%" autoplay loop muted playsinline class="w-full h-full object-cover rounded-3xl">
                    <source src="/videos/pioneering-the-future-of-telecommunication.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>

            <div class="flex max-lg:flex-col max-lg:gap-16 lg:justify-around mt-12 lg:mt-24">
                <div v-for="(item,index) in items" :key="index" class="flex flex-col gap-4 text-center items-center">
                    <NuxtImg :src="`images/icons/${item.icon}.svg`" :alt="item.title" width="52" height="52" />
                    <h3 class="font-bold text-xl">{{ item.title }}</h3>
                </div>
            </div>
        </div>
    </section>

    <section class="mt-12 pt-12 pb-56 relative">
        <div class="container">
            <div class="flex flex-col gap-8 lg:w-2/3 mx-auto text-center">
                <h2 class="text-2xl lg:text-4xl font-semibold">Leading Global Telecommunications with Innovative, and Practical Solutions</h2>
                <p class="text-lg">Moya strives to be a regional and global telecom leader, driving innovation and practical breakthroughs in the industry.</p>
            </div>
            
            <div class="relative">
                <ClientOnly>
                    <swiper-container 
                        ref="swiperRef"
                        :slides-per-view="1.5 " 
                        :speed="1000"
                        :loop="true"
                        :grabCursor="true"
                        :initialSlide="3"
                        :centered-slides="true"
                        :watch-overflow="true"
                        class="mt-14"
                    >
                        <swiper-slide v-for="(solution, index) in solutions" :key="index">
                            <video v-if="solution.type == 'video'" width="100%" autoplay loop muted playsinline class="w-full h-full object-cover rounded-3xl">
                                <source :src="`videos/${solution.media}.mp4`" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                            <!-- <NuxtImg v-ixf="solution.type == 'gif'" class="w-full" :src="`images/${solution.media}.gif`" alt="" width="" height="" /> -->
                            <NuxtImg v-else class="w-full rounded-3xl" :src="`images/${solution.media}.png`" alt="" width="1486" height="836" />
                        </swiper-slide>
                    </swiper-container>

                    <div @click="prevSlide" class="swiper-button-prev absolute top-1/2 -left-4 -translate-y-1/2 z-10 cursor-pointer">
                        <svg width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" width="45" height="45" rx="22.5" fill="#2B6FF6"/>
                            <path d="M28.3337 22.5001H16.667M16.667 22.5001L22.5003 28.3334M16.667 22.5001L22.5003 16.6667" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div @click="nextSlide" class="swiper-button-next absolute top-1/2 -right-4 -translate-y-1/2 z-10 cursor-pointer">
                        <svg width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="45" height="45" rx="22.5" transform="matrix(-1 0 0 1 45.5 0)" fill="#2B6FF6"/>
                            <path d="M17.6663 22.5001H29.333M29.333 22.5001L23.4997 28.3334M29.333 22.5001L23.4997 16.6667" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </ClientOnly>
            </div>
        </div>
    </section>

</template>

<script setup>
    useSeoMeta({
        title: 'About Us',
        description: '',

        ogTitle: 'About Us',
        ogDescription: '',
        ogImage: 'https://moya.com/images/og-image-1200x630.png',

        twitterTitle: 'About Us',
        twitterDescription: '',
        twitterCard: 'summary_large_image',
    })

    const items = [
        {
            title: 'Fast Deployment',
            icon: 'fast-deployment'
        },
        {
            title: 'License-Free Innovation',
            icon: 'license-free-innovation'
        },
        {
            title: 'Interoperability',
            icon: 'interoperability'
        },

    ]

    const solutions = [
        {
            type: 'image',
            media: 'global-telecommunications-2'
        },
        {
            type: 'image',
            media: 'global-telecommunications-3'
        },
        {
            type: 'image',
            media: 'global-telecommunications-4'
        },
        {
            type: 'video',
            media: 'global-telecommunications-1'
        }, 
        {
            type: 'image',
            media: 'global-telecommunications-5'
        },
        {
            type: 'image',
            media: 'global-telecommunications-6'
        },
        {
            type: 'image',
            media: 'global-telecommunications-7'
        },
        {
            type: 'image',
            media: 'global-telecommunications-8'
        },
        {
            type: 'image',
            media: 'global-telecommunications-9'
        },
        {
            type: 'image',
            media: 'global-telecommunications-10'
        },
    ]

    const swiperRef = ref(null);

    const prevSlide = () => {
        if (swiperRef.value?.swiper) {
            swiperRef.value.swiper.slidePrev();
        }
    };

    const nextSlide = () => {
        if (swiperRef.value?.swiper) {
            swiperRef.value.swiper.slideNext();
        }
    };
</script>

<style lang="sass" scoped>
    .swiper-slide-active
        @apply scale-100

    swiper-slide
        @apply scale-90 transition-all duration-300 ease-in-out
</style>