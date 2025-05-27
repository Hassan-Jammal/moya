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
                    <li>Perfomance</li>
                </ul>
                <h1 class="text-3xl lg:text-4xl font-bold">Performance that Powers Possibility</h1>
                <p class="text-base">Ensuring Reliability Through Rigorous Standards</p>
            </div>
        </div>
	</section>

    <section class="py-12 lg:py-24">
        <div class="container">
            <div class="flex max-lg:flex-col justify-center gap-24 lg:gap-8">
                <div class="w-full lg:w-1/2 flex flex-col gap-8">
                    <h2 class="text-2xl lg:text-4xl font-semibold">Ultra-Fast Deployment</h2>
                    <p class="text-[#5D5D5D]">Moya’s telecom solutions are engineered for ultra-fast deployment, providing operators with the ability to rapidly expand or enhance their network infrastructure with minimal downtime. Our advanced technology meets and exceeds market demands, offering one of the fastest and most efficient deployment processes available, significantly reducing time to market.<br /><br />Moya’s base station exemplifies this with its quick and straightforward installation process. It is also designed for plug-and-play functionality, supporting all SON (Self-Organizing Networks) features to minimize manual intervention. With little to no frequency planning required, operators can deploy and optimize the system quickly, even in challenging environments. <br /><br />The base station’s minimal power requirements and solar-suitable options further accelerate deployment, making it a fast, efficient, and sustainable solution for modern networks.</p>
                </div>

                <div class="w-full lg:w-1/2">
                    <NuxtImg class="mx-auto" src="images/ultra-fast-deployment.webp" alt="Products Background" width="" height="" />
                </div>
            </div>

            <div class="grid lg:grid-cols-6 gap-8 mt-12 lg:mt-24">
                <div class="flex flex-col gap-4 lg:col-start-1 lg:col-end-3 bg-[#F8F8F9] rounded-3xl p-6">
                    <NuxtImg class="flex-shrink-0" :src="`images/icons/rapid-extension-low-downtime.svg`" alt="Rapid Expansion, Low Downtime" width="52" height="52" />
                    <h3 class="text-2xl font-semibold text-gray-900">Rapid Expansion, Low Downtime</h3>
                    <p class="text-gray-600">Quicker network expansion with minimal downtime</p>
                </div>
                <div class="flex flex-col gap-4 lg:col-start-3 lg:col-end-5 bg-[#F8F8F9] rounded-3xl p-6">
                    <NuxtImg class="flex-shrink-0" :src="`images/icons/faster-time-to-network.svg`" alt="Faster Time to Market" width="52" height="52" />
                    <h3 class="text-2xl font-semibold text-gray-900">Faster Time to Market</h3>
                    <p class="text-gray-600">Reduced time to market with streamlined setup</p>
                </div>
                <div class="flex flex-col gap-4 lg:col-start-5 lg:col-end-7 bg-[#F8F8F9] rounded-3xl p-6">
                    <NuxtImg class="flex-shrink-0" :src="`images/icons/seamless-service-continuity.svg`" alt="Seamless Service Continuity" width="52" height="52" />
                    <h3 class="text-2xl font-semibold text-gray-900">Seamless Service Continuity</h3>
                    <p class="text-gray-600">Minimized service disruption with rapid installation</p>
                </div>
                <div class="flex flex-col gap-4 lg:col-start-1 lg:col-end-4 bg-[#F8F8F9] rounded-3xl p-6">
                    <NuxtImg class="flex-shrink-0" :src="`images/icons/versatile-installation-flexibilty.svg`" alt="Versatile Installation Flexibility" width="52" height="52" />
                    <h3 class="text-2xl font-semibold text-gray-900">Versatile Installation Flexibility</h3>
                    <p class="text-gray-600">Greater flexibility with easy setup in various environments</p>
                </div>
                <div class="flex flex-col gap-4 lg:col-start-4 lg:col-end-7 bg-[#F8F8F9] rounded-3xl p-6">
                    <NuxtImg class="flex-shrink-0" :src="`images/icons/effortless-network-optimization.svg`" alt="Effortless Network Optimization" width="52" height="52" />
                    <h3 class="text-2xl font-semibold text-gray-900">Effortless Network Optimization</h3>
                    <p class="text-gray-600">Simplified network management with automated optimization</p>
                </div>
            </div>
        </div>
    </section>
        
    <section class="py-12 lg:py-24 bg-[#F8F8F9]">
        <div class="container">
            <div class="flex flex-col justify-center gap-8 w-full lg:w-2/3">
                <h2 class="text-2xl lg:text-4xl font-semibold">Cost-Effectiveness</h2>
                <p class="text-[#5D5D5D]">Moya’s telecom solutions are designed with cost-effectiveness at their core, offering MNOs the ability to reduce both capital and operational expenditures. By minimizing the number of base stations needed and utilizing advanced technologies like all-outdoor, plug-and-play designs, operators can significantly cut installation and maintenance costs. The streamlined deployment process ensures fewer resources are required, saving on labor and infrastructure while speeding up time to market.<br /><br />Additionally, the ultra-low power consumption of our base stations, combined with solar-suitable options, drastically reduces energy costs, contributing to long-term savings. With features like optimized connectivity and reduced cabling, our solutions not only lower upfront costs but also minimize ongoing expenses. This efficiency, paired with simplified maintenance through self-organizing networks (SON), ensures that MNOs achieve maximum performance while keeping operational costs in check, making Moya’s solutions a smart, cost-effective investment for any telecom provider.</p>
            </div>

            <div class="flex max-lg:flex-col gap-12 lg:gap-8 mt-12">
                <div class="grid sm:grid-cols-2 gap-8 lg:gap-20 w-full lg:w-1/2">
                    <div class="flex flex-col gap-4">
                        <NuxtImg class="flex-shrink-0" :src="`images/icons/optimized-infrastructure-investment.svg`" alt="Optimized Infrastructure Investment" width="52" height="52" />
                        <h3 class="text-2xl font-semibold text-gray-900">Optimized Infrastructure Investment</h3>
                        <p class="text-gray-600">Minimized capital expenditures by requiring fewer base stations to cover the same area</p>
                    </div>
                    <div class="flex flex-col gap-4">
                        <NuxtImg class="flex-shrink-0" :src="`images/icons/lower-energy-and-operational-costs.svg`" alt="Lower Energy and Operational Costs" width="52" height="52" />
                        <h3 class="text-2xl font-semibold text-gray-900">Lower Energy and Operational Costs</h3>
                        <p class="text-gray-600">Decreased operational expenses through energy-efficient base stations</p>
                    </div>
                    <div class="flex flex-col gap-4">
                        <NuxtImg class="flex-shrink-0" :src="`images/icons/cost-effective-system-design.svg`" alt="Cost-Effective System Design" width="52" height="52" />
                        <h3 class="text-2xl font-semibold text-gray-900">Cost-Effective System Design</h3>
                        <p class="text-gray-600">Reduced material and maintenance costs by minimizing cabling between antennas, RRUs, and BBUs</p>
                    </div>
                    <div class="flex flex-col gap-4">
                        <NuxtImg class="flex-shrink-0" :src="`images/icons/sustainable-and-eco-friendly-operations.svg`" alt="Sustainable and Eco-Friendly Operations" width="52" height="52" />
                        <h3 class="text-2xl font-semibold text-gray-900">Sustainable and Eco-Friendly Operations</h3>
                        <p class="text-gray-600">Lower ongoing costs and environmental impact through solar-compatible systems and energy-efficient designs</p>
                    </div>
                </div>
                <div class="w-full lg:w-1/2 2xl:w-1/3 mx-auto">
                    <NuxtImg class="mx-auto" src="images/cost-effectiveness.webp" alt="Cost Effectiveness" width="" height="" />
                </div>
            </div>
        </div>
    </section>

    <section class="py-12 lg:py-24 bg-black text-white">
        <div class="container">
            <div class="flex flex-col justify-center items-center gap-8 w-full lg:w-2/3 text-center mx-auto">
                <h2 class="text-2xl lg:text-4xl font-semibold">Security</h2>
                <p>Security is a top priority for Moya, and we are committed to delivering telecom solutions that offer MNOs the highest levels of protection. Our hardware and software are designed to meet or exceed the most stringent security standards set by world-class technology leaders. By adopting the latest security protocols, Moya ensures that its solutions are aligned with the evolving threats and regulatory requirements in the telecommunications industry.<br /><br />Moya’s secure telecom infrastructure provides MNOs with a robust defense against cyber threats, ensuring that their networks remain safe and reliable for both commercial applications and everyday use. Our technologies incorporate advanced encryption, secure authentication mechanisms, and real-time threat monitoring, helping operators protect sensitive data, prevent unauthorized access, and mitigate risks associated with cyberattacks.</p>
            </div>
        </div>
        
        <div class="relative">
            <div class="container">
                <div class="grid lg:grid-cols-3 gap-6 lg:gap-12 mt-24 relative z-10 pb-24">
                    <div class="w-full flex flex-col gap-6 lg:gap-12">
                        <div class="flex flex-col gap-4 h-full p-8">
                            <NuxtImg class="flex-shrink-0 lg:ml-auto" :src="`images/icons/highest-level-of-protection-for-networks-and-users.svg`" alt="Highest levels of protection for networks and users" width="52" height="52" />
                            <h2 class="text-lg lg:text-xl 2xl:text-2xl font-semibold lg:text-right">Highest levels of protection for networks and users</h2>
                        </div>
                        <div class="flex flex-col gap-4 h-full p-8">
                            <NuxtImg class="flex-shrink-0 lg:ml-auto" :src="`images/icons/compliance-with-stringent-security-standards.svg`" alt="Compliance with stringent security standards" width="52" height="52" />
                            <h2 class="text-lg lg:text-xl 2xl:text-2xl font-semibold lg:text-right">Compliance with stringent security standards</h2>
                        </div>
                    </div>
                    <div class="w-full flex flex-col gap-6 lg:gap-12">
                        <div class="h-full rounded-3xl">
                            <NuxtImg class="mx-auto" src="/images/security.webp" alt="Security" />
                        </div>
                    </div>
                    <div class="w-full flex flex-col gap-6 lg:gap-12">
                        <div class="flex flex-col gap-4 h-full p-8">
                            <NuxtImg class="flex-shrink-0" :src="`images/icons/increased-trust-and-confidence-among-users.svg`" alt="Increased trust and confidence among users" width="52" height="52" />
                            <h2 class="text-lg lg:text-xl 2xl:text-2xl font-semibold">Increased trust and confidence among users</h2>
                        </div>
                        <div class="flex flex-col gap-4 h-full p-8">
                            <NuxtImg class="flex-shrink-0" :src="`images/icons/enhanced-operational-resilience.svg`" alt="Enhanced operational resilience" width="52" height="52" />
                            <h2 class="text-lg lg:text-xl 2xl:text-2xl font-semibold">Enhanced operational resilience</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="absolute bottom-0 left-0 w-full h-full">
                <NuxtImg class="w-full h-full object-cover" src="images/security-bg.webp" alt="Security Background" width="" height="" />
            </div>
        </div>
    </section>

    <section class="pt-12 lg:pt-24 pb-56">
        <div class="container">
            <div class="flex flex-col justify-center gap-8 w-full lg:w-2/3">
                <h2 class="text-2xl lg:text-4xl font-semibold">Smaller Number of BTSs</h2>
                <p class="text-[#5D5D5D]">Moya’s innovative telecom solutions enable MNOs to achieve excellent coverage with fewer Base Transceiver Stations (BTSs), optimizing network performance while significantly reducing infrastructure costs. By utilizing advanced technologies such as beamforming and smart signal processing, fewer stations are required to cover larger areas, resulting in lower capital and operational expenditures.<br /><br />This streamlined approach offers substantial environmental benefits by reducing energy consumption and minimizing the physical footprint of network infrastructure. With fewer BTS sites, operators can decrease carbon emissions and minimize disruption to natural landscapes, aligning with sustainability goals and global environmental standards.<br /><br />In addition to cost savings and environmental impact, our solutions support higher user capacity and enhance network reliability. MNOs can roll out services faster, serve more customers, and ensure a high-quality, future-proof network, all while contributing to a more sustainable telecom industry.</p>
            </div>

            <div class="flex max-lg:flex-col gap-12 lg:gap-8 mt-12">
                <div class="grid sm:grid-cols-2 gap-8 lg:gap-20 w-full lg:w-1/2">
                    <div class="flex flex-col gap-4">
                        <NuxtImg class="flex-shrink-0" :src="`images/icons/faster-deployment.svg`" alt="Faster Deployment" width="52" height="52" />
                        <h3 class="text-2xl font-semibold text-gray-900">Faster Deployment</h3>
                        <p class="text-gray-600">Faster deployment with fewer sites to build</p>
                    </div>
                    <div class="flex flex-col gap-4">
                        <NuxtImg class="flex-shrink-0" :src="`images/icons/higher-capacity.svg`" alt="Higher Capacity" width="52" height="52" />
                        <h3 class="text-2xl font-semibold text-gray-900">Higher Capacity</h3>
                        <p class="text-gray-600">Higher capacity optimizing network resources and improving service quality</p>
                    </div>
                    <div class="flex flex-col gap-4">
                        <NuxtImg class="flex-shrink-0" :src="`images/icons/scalable-growth.svg`" alt="Scalable Growth" width="52" height="52" />
                        <h3 class="text-2xl font-semibold text-gray-900">Scalable Growth</h3>
                        <p class="text-gray-600">Enhanced scalability without adding many new BTS sites</p>
                    </div>
                    <div class="flex flex-col gap-4">
                        <NuxtImg class="flex-shrink-0" :src="`images/icons/sustainable-impact.svg`" alt="Sustainable Impact" width="52" height="52" />
                        <h3 class="text-2xl font-semibold text-gray-900">Sustainable Impact</h3>
                        <p class="text-gray-600">Minimized physical and environmental disruption supporting sustainability goals</p>
                    </div>
                </div>
                <div class="w-full lg:w-1/2 2xl:w-1/3 mx-auto">
                    <NuxtImg class="mx-auto" src="images/smaller-number-of-bts.webp" alt="Cost Effectiveness" width="" height="" />
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
        @apply w-8 rounded-full transition-all duration-300 ease-linear

</style>