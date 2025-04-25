<template>
    <section class="py-24 relative">
        <div class="absolute bottom-0 left-0 w-full h-full">
            <NuxtImg class="w-full h-full object-cover" src="images/about-us-bg.webp" alt="About Us" width="" height="" />
        </div>
		<div class="container relative z-10 text-center text-white py-12">
            <div class="flex flex-col items-center gap-6">
                <ul class="hidden lg:flex items-center flex-wrap gap-2 text-xs">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li class="flex"><Icon name="fa6-solid:angle-right" /></li>
                    <li>About Us</li>
                </ul>
                <h1 class="text-3xl lg:text-4xl font-bold">The Heart of Moya <br /> Our Core Identity & Vision</h1>
                <p class="text-base">Connecting the Future, Empowering Today.</p>
            </div>
        </div>
	</section>

    <section class="mt-12 max-lg:pt-6">
        <div class="container">
            <div class="grid lg:grid-cols-2 gap-12 lg:gap-24 w-full lg:w-4/5 mx-auto">
                <NuxtImg class="w-full order-1 lg:order-0" src="images/mountasser-hachem.webp" alt="Mountasser Hachem" width="987" height="876" />
                <div class="flex flex-col justify-center gap-4 order-0 lg:order-1">
                    <span class="text-6xl text-primary italic leading-10">“</span>
                    <p class="text-xl italic">Although <span class="font-bold">innovation in the telecom</span> industry seems to be getting rarer every day, I believe there are still many opportunities <span class="font-bold">for the bold</span>. All that is needed is an agile, lean approach where innovation <span class="font-bold">is a must</span>.</p>
                    <!-- <p class="text-xl font-bold">Mountasser Hachem</p> -->
                    <NuxtImg class="w-[250px]" :src="`images/icons/signature.svg`" alt="Monty's Signature" width="300" height="108" />
                    <!-- <span class="rotate-180 text-6xl text-primary italic self-end leading-10">“</span> -->
                </div>
            </div>
        </div>
	</section>

    <section class="py-12 lg:py-24 bg-[#F8F8F9]">
        <div class="container">
            <div class="grid lg:grid-cols-2 gap-8 lg:gap-32">
                <div class="flex flex-col justify-center gap-8">
                    <h3 class="text-primary text-sm">About Us</h3>
                    <h2 class="text-2xl lg:text-4xl font-semibold">Pioneering the Future of Telecommunications with Moya</h2>
                    <p class="text-sm text-[#5D5D5D]">With over 25 years of pioneering experience and a legacy of transformative success in the telecom industry, including the establishment of the mobile operator management business unit, Mountasser Hachem, founder and chairman of Monty Holding, is now bringing his visionary concept to life with the launch of Moya, his own telecom equipment brand. This bold venture marks the realization of a long-held vision, setting a new standard for the future of telecommunications technology.<br /><br />Moya seeks to break free from these outdated paradigms, offering fast, agile deployment, just like a "network in a box," with extreme interoperability and no license limitations.<br /><br />Our roadmap includes deploying a 4G core based on Release 9, to be tested and certified through the Comium network. Following this, IMS and Diameter systems will be integrated in the coming quarters. Designed and assembled in Sweden, with production in the Far East, the plan also encompasses O-RAN, IoT, and AI.
                    </p>
                </div>
                <NuxtImg :src="`images/pioneering-the-future-of-telecommunication.webp`" alt="Pioneering the future of telecommunications" width="1044" height="704" />
            </div>

            <div class="grid lg:grid-cols-2 gap-8 lg:gap-32 mt-12 lg:mt-24">
                <NuxtImg :src="`images/agile-telecom-infrastructure.webp`" alt="Agile Telecom Infrastructure" width="1044" height="704" />
                <div class="flex flex-col justify-center gap-8">
                    <h3 class="text-primary text-sm">What We Offer</h3>
                    <h2 class="text-2xl lg:text-4xl font-semibold">Agile Telecom Infrastructure with Global Reach and Smart Integration</h2>
                    <p class="text-sm text-[#5D5D5D]">Moya seeks to break free from these outdated paradigms, offering fast, agile deployment, just like a "network in a box," with extreme interoperability and no license limitations.<br /><br />Our roadmap includes deploying a 4G core based on Release 9, to be tested and certified through the Comium network. Following this, IMS and Diameter systems will be integrated in the coming quarters.<br /><br />Designed and assembled in Sweden, with production based in the Far East, the scope of delivery will cover several verticals and specific requirements. It encompasses solutions for small networks with less than 1000k subscribers in fixed wireless broadband, as well as innovations in IoT, AI, and FinTech. Additionally, it supports smart city infrastructure, addressing needs in education, health, and security, alongside serving as a comprehensive digital enabler.<br /><br />Moya aims to position itself as a regional and global leader in the rapidly evolving telecommunications sector, empowering the industry to achieve unprecedented technological breakthroughs by blending innovation with practicality.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="py-12 lg:py-24">
        <div class="container">
            <div class="w-full lg:w-1/2 mx-auto text-center">
                <div class="flex flex-col justify-center gap-8">
                    <h3 class="text-primary text-sm">Our Vision</h3>
                    <h2 class="text-2xl lg:text-4xl font-semibold">A Vision for Empowering the Future Through Seamless Network Innovation</h2>
                    <p class="text-sm text-[#5D5D5D]">We envision a future where mobile networks are the source of all data, empowering individuals, businesses, and societies to reach their full potential. Moya aims to provide superior network coverage through innovative solutions and rapid deployment at any part of the network delivery phase, offering connectivity and analytics within the shortest time-to-market and the most competitive cost of ownership.</p>
                </div>

                <div class="flex flex-col justify-center gap-8 mt-12 lg:mt-24">
                    <h3 class="text-primary text-sm">Our Mission</h3>
                    <h2 class="text-2xl lg:text-4xl font-semibold">Mission-Driven Innovation for a Connected and Sustainable Tomorrow</h2>
                    <p class="text-sm text-[#5D5D5D]">At Moya, we design and deploy networks that minimize costs and maximize analytics, delivering technology that brings people together. Today, we are laying the foundation for a world where limitless connectivity enhances lives, reshapes businesses, and paves the way toward a sustainable future.</p>
                </div>
            </div>

            <div class="flex max-lg:flex-col max-lg:gap-16 lg:justify-around mt-12 lg:mt-24">
                <div v-for="(item,index) in items" :key="index" class="flex flex-col gap-4 text-center items-center">
                    <NuxtImg :src="`images/icons/${item.icon}.svg`" :alt="item.title" width="52" height="52" />
                    <h3 class="text-xl w-full lg:w-2/3" v-html="item.title"></h3>
                </div>
            </div>
        </div>
    </section>


    <section class="py-12 lg:py-24 bg-[#F8F8F9]">
        <div class="container">
            <div class="flex flex-col justify-center gap-8">
                <h3 class="text-primary text-sm">Moya's Team</h3>
                <h2 class="text-2xl lg:text-4xl font-semibold">Leadership</h2>
                <p class="text-sm text-[#5D5D5D]">Driven by Industry Professionals with a Clear Strategic Vision</p>
            </div>

            <div class="flex max-lg:flex-col gap-16 lg:justify-around mt-12 lg:mt-24">
                <div v-for="(item,index) in leadership" :key="index" class="flex flex-col gap-4 text-center items-center">
                    <NuxtImg class="flex-shrink-1" :src="`images/${item.image}.webp`" :alt="item.name" width="714" height="810" />
                    <h3 class="font-semibold text-2xl mt-4">{{ item.name }}</h3>
                    <h2 class="text-lg mt-2">{{ item.position }}</h2>
                </div>
            </div>
        </div>
    </section>

    <section class="mt-6 pt-6 lg:mt-12 lg:pt-12 pb-56 relative">
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
                            <NuxtImg v-else class="w-full rounded-3xl" :src="`images/${solution.media}.webp`" alt="" width="1486" height="836" />
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


    const leadership = [
        {
            name: 'Mountasser Hachem',
            position: 'Chairman',
            image: 'mountasser-hachem-1'
        },
        {
            name: 'Cesar Jabr',
            position: 'CEO - Sweden',
            image: 'cesar-jabr'
        },
        {
            name: 'Hassan Raya',
            position: 'CEO - China',
            image: 'hassan-raya'
        },
    ]
        
    const items = [
        {
            title: '<span class="font-semibold">Cost-efficient</span>, analytics-driven networks',
            icon: 'cost-efficient-analytics-driven-networks'
        },
        {
            title: 'Technology that <span class="font-semibold">connects people</span>',
            icon: 'technology-that-connects-people'
        },
        {
            title: 'Sustainable, future-ready <span class="font-semibold">connectivity</span>',
            icon: 'sustainable-future-ready-connectivity'
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