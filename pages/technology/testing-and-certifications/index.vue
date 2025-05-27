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
                    <li>Testing & Certifications</li>
                </ul>
                <h1 class="text-3xl lg:text-4xl font-bold">Quality You Can Trust, Tested and Certified</h1>
                <p class="text-base">Validated Quality Through Comprehensive Testing and Certifications</p>
            </div>
        </div>
	</section>

    <section class="py-12 lg:py-24">
        <div class="container">
            <div class="flex flex-col gap-8 w-full lg:w-2/3">
                <h2 class="text-2xl lg:text-4xl font-semibold">Multi-site Handover Drive Tests</h2>
                <p>Moya offers advanced multi-site handover drive tests to ensure seamless connectivity and optimal performance across networks. These tests evaluate how effectively users maintain call and data sessions when moving between different base station sites. By simulating real-world conditions, Moya helps operators fine-tune handover processes, ensuring a smooth transition between cells without service interruptions.<br /><br />Our solutions allow MNOs to identify and resolve handover issues, reducing dropped calls, improving data speeds, and enhancing overall user experience. With precise measurements and detailed reporting, Moya’s drive tests optimize network performance, ensuring reliable service across large areas while minimizing operational disruptions.</p>
            </div>

            <div class="stack-cards js-stack-cards mt-24">
               <div
                    v-for="(card, index) in cards" :key="index" class="js-stack-cards__item flex max-lg:flex-col justify-between gap-12 lg:gap-24 sticky top-[var(--space-sm)] origin-[center_top] bg-[#F8F8F9] w-full rounded-3xl lg:ps-12 p-6">
                    <div class="lg:w-2/5 flex flex-col gap-8 lg:py-12">
                        <div class="flex flex-col gap-8">
                            <h2 class="text-2xl lg:text-4xl font-semibold">{{ card.title }}</h2>
                            <p>{{ card.description }}</p>
                        </div>
                        <span class="font-BankGothic text-2xl text-primary mt-auto">0{{ index + 1 }}</span>
                    </div>
                    <div class="lg:w-3/5 rounded-l-3xl overflow-hidden">
                        <NuxtImg class="w-full aspect-[4/3] 2xl:aspect-video object-cover" :src="`/images/${card.image}.webp`" :alt="card.title" />
                    </div>
                </div>
            </div>
        </div>
	</section>

    <section class="py-12 lg:py-24 bg-[#F8F8F9]">
        <div class="container">
            <div class="flex flex-col justify-center gap-8 w-full lg:w-2/3">
                <h2 class="text-2xl lg:text-4xl font-semibold">Optimization and Calibration Tools</h2>
                <p class="text-[#5D5D5D]">Moya provides enhanced optimization and calibration tools to help MNOs fine-tune their networks for peak performance. These tools enable precise adjustments to base station parameters, ensuring optimal coverage, capacity, and quality of service. By continuously monitoring and analyzing network data, Moya’s solutions allow operators to detect performance bottlenecks, minimize interference, and enhance overall network efficiency.<br /><br />With real-time calibration capabilities, our tools help MNOs quickly respond to changing conditions, ensuring networks remain stable and adaptable. These optimization tools not only improve user experience by enhancing call quality and data speeds but also help operators reduce operational costs by minimizing unnecessary adjustments and maintenance efforts.</p>
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
                    <swiper-slide v-for="(item, index) in items" :key="index" class="h-auto flex flex-col items-between rounded-3xl bg-white overflow-hidden">
                        <NuxtImg :src="`/images/${item.image}.webp`" :alt="item.title" />
                        <div class="flex flex-col gap-8 py-12 px-4 lg:px-8">
                            <h2 class="text-2xl font-semibold">{{ item.title }}</h2>
                            <p v-html="item.description"></p>
                        </div>
                    </swiper-slide>
                </swiper-container>
            </ClientOnly>
        </div>
    </section>

    <section class="pt-12 lg:pt-24 bg-[#2B6FF6]">
        <div class="container">
            <div class="flex flex-col justify-center gap-8 w-full py-12 px-4 lg:px-24 bg-white rounded-3xl text-center">
                <h2 class="text-2xl lg:text-4xl font-semibold">Field Support and Coaching</h2>
                <p class="text-[#5D5D5D]">Moya provides comprehensive field Support and coaching services to empower MNOs with the expertise and resources needed to optimize their network operations.<br /><br />Our experienced team works closely with operators to deliver hands-on training and support, ensuring that their staff is well-prepared to handle equipment installation, troubleshooting, and maintenance. By fostering a collaborative environment, Moya helps MNOs enhance their operational efficiency and build a skilled workforce capable of addressing challenges in real-time.</p>
            </div>
        </div>
        <div class="relative">
            <div class="container">
                <div class="relative grid lg:grid-cols-3 lg:gap-12 mt-8 lg:mt-12 z-10 pb-24">
                    <div class="lg:col-span-1 bg-white rounded-3xl w-full p-4 lg:p-8">
                        <NuxtImg class="mx-auto" src="images/field-support-and-coaching.webp" alt="" />
                    </div>
                    <div class="lg:col-span-2 flex gap-4 lg:gap-12 bg-white rounded-3xl w-full py-12 px-4 lg:p-12">
                        <div class="flex flex-col items-center">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20" r="20" fill="#2B6FF6"/>
                                <path d="M26 20.5C26 20.5 21.5811 26.5 20 26.5C18.4188 26.5 14 20.5 14 20.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M26 13.5001C26 13.5001 21.5811 19.5 20 19.5C18.4188 19.5 14 13.5 14 13.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span class="w-1 h-full bg-gradient-to-b from-primary from-40% to-white to-100% shadow-2xl"></span>
                        </div>
                        <div class="flex flex-col gap-8">
                            <h2 class="text-2xl lg:text-4xl font-semibold">How Can We Help You</h2>
                            <ul className='flex flex-col gap-12'>
								<li class="flex items-start gap-4 lg:gap-8">
                                    <img class="flex-shrink-0" src="/images/icons/checkmark-circle.svg" alt="Checkmark Circle" width="28" height="28">
                                    <p class="lg:text-xl">Enhanced technical expertise for effective equipment handling, installation, and maintenance</p>
                                </li>
								<li class="flex items-start gap-4 lg:gap-8">
                                    <img class="flex-shrink-0" src="/images/icons/checkmark-circle.svg" alt="Checkmark Circle" width="28" height="28">
                                    <p class="lg:text-xl">Improved operational efficiency so teams can quickly identify and resolve issues</p>
                                </li>
								<li class="flex items-start gap-4 lg:gap-8">
                                    <img class="flex-shrink-0" src="/images/icons/checkmark-circle.svg" alt="Checkmark Circle" width="28" height="28">
                                    <p class="lg:text-xl">Hands-on training that reinforces theoretical knowledge, leading to better retention and application of skills</p>
                                </li>
								<li class="flex items-start gap-4 lg:gap-8">
                                    <img class="flex-shrink-0" src="/images/icons/checkmark-circle.svg" alt="Checkmark Circle" width="28" height="28">
                                    <p class="lg:text-xl">Long-term partnership between Moya and MNOs, leading to ongoing support and continuous improvement in operations</p>
                                </li>
							</ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="absolute bottom-0 left-0 w-full h-full">
                <NuxtImg class="w-full h-full object-cover" src="images/field-support-and-coaching-bg.webp" alt="Field Support and Coaching" width="" height="" />
            </div>
        </div>
    </section>

    <section class="pt-12 lg:pt-24 pb-56 bg-[#F8F8F9]">
        <div class="container">
            <div class="flex max-lg:flex-col justify-center gap-24 lg:gap-8">
                <div class="w-full lg:w-1/2 flex flex-col gap-8">
                    <h2 class="text-2xl lg:text-4xl font-semibold">Training Service</h2>
                    <p class="text-[#5D5D5D]">Moya offers specialized training designed to enhance the skills and knowledge of MNOs' personnel, ensuring they are equipped to manage and optimize telecom networks effectively.<br /><br />Our comprehensive training sessions cover a wide range of topics, including equipment installation, network management, troubleshooting techniques, and industry best practices.<br /><br />By combining theoretical knowledge with practical exercises, Moya enables MNO staff to gain hands-on experience that translates directly into improved network performance and operational efficiency.</p>
                </div>

                <div class="w-full lg:w-1/2">
                    <NuxtImg class="mx-auto" src="images/training-service.webp" alt="Training Services" width="" height="" />
                </div>
            </div>

            <div class="grid lg:grid-cols-3 gap-8 mt-12">
                <div class="flex flex-col gap-4 bg-white rounded-3xl p-6">
                    <img class="flex-shrink-0" src="/images/icons/checkmark-circle.svg" alt="Checkmark Circle" width="28" height="28">
                    <h3 class="text-2xl font-semibold text-gray-900">Trend-Driven Compliance</h3>
                    <p>Staying current with industry trends allowing them to remain competitive and compliant with regulations</p>
                </div>
                <div class="flex flex-col gap-4 bg-white rounded-3xl p-6">
                    <img class="flex-shrink-0" src="/images/icons/checkmark-circle.svg" alt="Checkmark Circle" width="28" height="28">
                    <h3 class="text-2xl font-semibold text-gray-900">Tailored Training for MNOs</h3>
                    <p>Customizable training solutions that address the specific needs and challenges faced by each MNO</p>
                </div>
                <div class="flex flex-col gap-4 bg-white rounded-3xl p-6">
                    <img class="flex-shrink-0" src="/images/icons/checkmark-circle.svg" alt="Checkmark Circle" width="28" height="28">
                    <h3 class="text-2xl font-semibold text-gray-900">Skilled Teams, Strong Networks</h3>
                    <p>Enhanced customer satisfaction by empowering staff with the knowledge and skills necessary to maintain high-quality network performance</p>
                </div>
            </div>
        </div>
    </section>

</template>

<script setup>
    useSeoMeta({
        title: 'Performance - Technology',
        description: '',

        ogTitle: 'Performance - Technology',
        ogDescription: '',
        ogImage: 'https://moya.com/images/og-image-1200x630.png',

        twitterTitle: 'Performance - Technology',
        twitterDescription: '',
        twitterCard: 'summary_large_image',
    })

    const cards = [
        {
            title: "Superior Coverage for Seamless Connectivity",
            description: "Superior network coverage ensuring consistent service across large geographic areas.",
            image: "superior-coverage-for-seamless-connectivity",
        },
        {
            title: "Reduced Latency for Smoother Real-Time Connectivity",
            description: "Reduced latency improving real-time data transmission by fine-tuning handovers, minimizing delays during transitions between network cells",
            image: "reduced-latency-for-smoother-real-time-connectivity",
        },
        {
            title: "Enhancing Customer Experience with Reliable Connectivity",
            description: "Improved customer experience by reducing dropped calls and fewer service interruptions",
            image: "enhancing-customer-experience-with-reliable-connectivity",
        },
    ]


    const items = [
        {
            title: "Expanded Coverage and Capacity for Superior Service",
            description: "Improved coverage and capacity to accommodate more users without degrading service quality",
            image: "expanded-coverage-and-capacity-for-superior-service",
        },
        {
            title: "Adaptive Performance for Dynamic Network Demands",
            description: "Quick response to changing network conditions, such as increased traffic or interference",
            image: "adaptive-performance-for-dynamic-network-demands",
        },
        {
            title: "Lower Operational Costs Through Smarter Maintenance",
            description: "Reduced operational expenses by streamlining maintenance efforts and minimizing the need for equipment changes",
            image: "lower-operational-costs-through-smarter-maintenance",
        },
        {
            title: "Boosting Customer Satisfaction with Reliable, High-Speed Connectivity",
            description: "Enhanced overall customer satisfaction by ensuring stable connections, faster data speeds, and reliable service across the network",
            image: "boosting-customer-satisfaction-with-reliable-high-speed-connectivity",
        },
    ]

    onMounted(async () => {
        if (process.client) {
            const module = await import('@/assets/js/stack-cards.js')
        }
    })
</script>

<style lang="sass" scoped>
    swiper-container::part(pagination) 
        @apply relative mt-24

    swiper-container::part(bullet-active)  
        @apply w-8 rounded-full

    swiper-container::part(bullet)  
        @apply transition-all duration-300 ease-linear

</style>