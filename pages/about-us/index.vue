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
            <div class="grid lg:grid-cols-2 items-center gap-4 lg:gap-32">
                <div class="flex flex-col justify-center gap-8">
                    <h3 class="text-sm">About Us</h3>
                    <h2 class="text-2xl lg:text-4xl font-semibold">Pioneering the Future of Telecommunications with Moya</h2>
                    <p class="text-sm text-[#5D5D5D]">With over 25 years of pioneering experience and a legacy of transformative success in the telecom industry, including the establishment of the mobile operator management business unit, Mountasser Hachem, founder and chairman of Monty Holding, is now bringing his visionary concept to life with the launch of Moya, his own telecom equipment brand. This bold venture marks the realization of a long-held vision, setting a new standard for the future of telecommunications technology.<br /><br />Moya seeks to break free from these outdated paradigms, offering fast, agile deployment, just like a "network in a box," with extreme interoperability and no license limitations.<br /><br />Our roadmap includes deploying a 4G core based on Release 9, to be tested and certified through the Comium network. Following this, IMS and Diameter systems will be integrated in the coming quarters. Designed and assembled in Sweden, with production in the Far East, the plan also encompasses O-RAN, IoT, and AI.
                    </p>
                </div>
                <NuxtImg class="w-full" src="images/pioneering-the-future-of-telecommunication.webp" alt="Satellite" width="1146" height="692" />
            </div>

            <div class="flex max-lg:flex-col max-lg:gap-16 lg:justify-around mt-12">
                <div class="flex flex-col gap-10 text-center items-center" v-for="(item,index) in items" :key="index">
                    <div v-html="item.logo"></div>
                    <h3 class="font-bold text-xl">{{ item.title }}</h3>
                </div>
            </div>
        </div>
    </section>

    <section class="my-12 py-12">
        <div class="container">
            <div class="flex flex-col gap-12 w-2/3 mx-auto text-center">
                <h2 class="text-2xl lg:text-4xl font-semibold">Leading Global Telecommunications with Innovative, and Practical Solutions</h2>
                <p class="text-base">Moya strives to be a regional and global telecom leader, driving innovation and practical breakthroughs in the industry.</p>
            </div>
            
            <ClientOnly>
                <swiper-container 
                    :slides-per-view="1.5" 
                    :loop="true"
                    :speed="1000"
                    :space-between="1"
                    :grabCursor="true"
                    :center-slides="true"
                    :loop-additional-slides="30"
                    class="mt-14"
                >
                    <swiper-slide v-for="(solution, index) in solutions" :key="index">
                        <NuxtImg class="w-full" :src="`images/${solution.image}.webp`" alt="" width="" height="" />
                    </swiper-slide>
                </swiper-container>
            </ClientOnly>
        </div>
    </section>

</template>

<script setup>
    import { ClientOnly } from '#components';

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
            logo: '<svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M51.7932 45.6V20L29.6182 7.22498V18.875L41.7432 25.8L41.6932 39.775L51.7932 45.6Z" fill="#4285F4"/><path d="M37.7936 49.6501V28.075L19.1436 17.3V27.35L29.1686 33.075L29.1186 44.625L37.7936 49.6501Z" fill="#669DF6"/><path d="M25.218 52.8751V35.3501L10.043 26.6001V35.0001L17.968 39.5251L17.918 48.6751L25.218 52.8751Z" fill="#AECBFA"/></svg>',
            title: 'Fast Deployment'
        },
        {
            logo: '<svg width="49" height="60" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33.8161 0H24.4248V2.08696C25.5774 2.08696 26.5118 3.02129 26.5118 4.17391C26.5118 5.32654 25.5774 6.26087 24.4248 6.26087V8.34783H33.8161C37.2679 8.34783 40.077 11.1569 40.077 14.6087V19.8261H48.4248V14.6087C48.4248 6.55304 41.8718 0 33.8161 0ZM31.7292 6.26087C30.5765 6.26087 29.6422 5.32654 29.6422 4.17391C29.6422 3.02129 30.5765 2.08696 31.7292 2.08696C32.8818 2.08696 33.8161 3.02129 33.8161 4.17391C33.8161 5.32654 32.8818 6.26087 31.7292 6.26087Z" fill="#2B6FF6" fill-opacity="0.45"/><path d="M8.77263 14.6087C8.77263 11.1569 11.5817 8.34783 15.0335 8.34783H24.4248V6.26087C23.2722 6.26087 22.3378 5.32654 22.3378 4.17391C22.3378 3.02129 23.2722 2.08696 24.4248 2.08696V0H15.0335C6.97785 0 0.424805 6.55304 0.424805 14.6087V19.8261H8.77263V14.6087ZM17.1205 2.08696C18.2731 2.08696 19.2074 3.02129 19.2074 4.17391C19.2074 5.32654 18.2731 6.26087 17.1205 6.26087C15.9678 6.26087 15.0335 5.32654 15.0335 4.17391C15.0335 3.02129 15.9678 2.08696 17.1205 2.08696Z" fill="#2B6FF6" fill-opacity="0.47"/><path d="M24.4248 19.826V24H44.2509V43.826H24.4248V48H48.4248V19.826H24.4248Z" fill="#669DF6"/><path d="M4.59872 43.826V24H24.4248V19.826H0.424805V48H24.4248V43.826H4.59872Z" fill="#2B6FF6" fill-opacity="0.45"/><path d="M4.59863 43.8261H24.4247V39.6523H8.77317V35.4784H24.4247V32.3478H8.77317V28.1739H24.4247V24H4.59863V43.8261Z" fill="white"/><path d="M31.7292 28.1739V32.3478H24.4248V35.4784H40.0776V39.6523H24.4248V43.8261H44.2509V24H24.4248V28.1739H31.7292Z" fill="#2B6FF6" fill-opacity="0.47"/><path d="M40.0778 35.4784H8.77344V39.6523H40.0778V35.4784Z" fill="#2B6FF6"/><path d="M31.7293 28.174H8.77344V32.3479H31.7293V28.174Z" fill="#2B6FF6"/></svg>',
            title: 'License-Free Innovation'
        },
        {
            logo: '<svg width="51" height="60" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.7578 34.25C11.655 31.6255 10.5088 28.363 10.5078 25H0.507832C0.500184 31.0168 2.68676 36.8298 6.65783 41.35L13.7578 34.25Z" fill="#669DF6"/><path d="M25.5078 0C19.4902 0.00436332 13.6761 2.17911 9.13281 6.125L16.2328 13.225C18.4444 11.485 21.1008 10.4022 23.8985 10.1003C26.6962 9.79841 29.5225 10.2896 32.0543 11.5177C34.5861 12.7458 36.7215 14.6613 38.2163 17.0454C39.7112 19.4295 40.5052 22.186 40.5078 25H50.5078C50.5078 21.717 49.8612 18.4661 48.6048 15.4329C47.3484 12.3998 45.5069 9.6438 43.1855 7.32233C40.864 5.00087 38.108 3.15938 35.0749 1.90301C32.0418 0.646644 28.7909 0 25.5078 0Z" fill="#669DF6"/><path d="M15.5078 47.5C18.2692 47.5 20.5078 45.2614 20.5078 42.5C20.5078 39.7386 18.2692 37.5 15.5078 37.5C12.7464 37.5 10.5078 39.7386 10.5078 42.5C10.5078 45.2614 12.7464 47.5 15.5078 47.5Z" fill="#AECBFA"/><path d="M43.0078 40C45.7692 40 48.0078 37.7614 48.0078 35C48.0078 32.2386 45.7692 30 43.0078 30C40.2464 30 38.0078 32.2386 38.0078 35C38.0078 37.7614 40.2464 40 43.0078 40Z" fill="#4285F4"/><path d="M30.5078 50C33.2692 50 35.5078 47.7614 35.5078 45C35.5078 42.2386 33.2692 40 30.5078 40C27.7464 40 25.5078 42.2386 25.5078 45C25.5078 47.7614 27.7464 50 30.5078 50Z" fill="#669DF6"/><path d="M10.5078 25H0.507812C0.513671 27.466 0.884352 29.9175 1.60781 32.275L11.6078 30.3C10.9228 28.6147 10.55 26.8188 10.5078 25Z" fill="#4285F4"/><path d="M8.00781 20C10.7692 20 13.0078 17.7614 13.0078 15C13.0078 12.2386 10.7692 10 8.00781 10C5.24639 10 3.00781 12.2386 3.00781 15C3.00781 17.7614 5.24639 20 8.00781 20Z" fill="#AECBFA"/><path d="M39.5332 19.7001C40.1755 21.3934 40.5058 23.1891 40.5082 25.0001H50.5082C50.5104 22.5354 50.1482 20.0838 49.4332 17.7251L39.5332 19.7001Z" fill="#4285F4"/></svg>',
            title: 'Interoperability'
        },

    ]

    const solutions = [
        {
            image: 'about-us-solution-1'
        },
        {
            image: 'about-us-solution-1'
        }, 
        {
            image: 'about-us-solution-1'
        },
        {
            image: 'about-us-solution-1'
        }, 
        {
            image: 'about-us-solution-1'
        },
    ]
</script>

<style lang="sass" scoped>
    .swiper-slide-active
        @apply scale-100

    swiper-slide
        @apply scale-75 transition-all duration-300 ease-in-out
</style>