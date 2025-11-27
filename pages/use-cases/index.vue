<template>
	<!-- <pre v-if="categoryData && productData" >{{productData}}</pre> -->
	<section class="pt-12">
		<div class="container">
			<ul class="hidden lg:flex items-center gap-2 text-xs">
				<li><NuxtLink to="/">Home</NuxtLink></li>
				<li class="flex"><Icon name="fa6-solid:angle-right" /></li>
				<li>Use Cases</li>
			</ul>

			<h1 class="text-3xl lg:text-5xl font-semibold lg:mt-8">Moya Use Cases</h1>

			<div class="relative py-32 px-4 lg:px-14 text-white mt-12">
				<div class="absolute bottom-0 left-0 w-full h-full -z-10">
					<NuxtImg class="w-full h-full object-cover rounded-3xl" src="images/use-cases-bg.webp" alt="Use Cases" width="" height="" />
				</div>
				<div class="flex flex-col gap-8 lg:w-1/2 mx-auto text-center">
					<h2 class="text-3xl lg:text-4xl font-semibold">Your Network's Most <br />Reliable Partner.</h2>
					<p class="text-sm">Signal. Strength. Stability.</p>
				</div>
			</div>
		</div>
	</section>

	<section class="pt-12 lg:pt-24 pb-56">
		<div class="container space-y-32">
			<div class="flex max-lg:flex-col justify-between items-start max-lg:gap-4 gap-32">
				<div class="flex-1 flex flex-col justify-center gap-8 lg:w-2/3">
					<h2 class="text-xl lg:text-3xl font-semibold text-primary">MNO Solution Case: Comium</h2>
					<h3 class="text-2xl lg:text-4xl font-semibold">Nationwide Mobile Network Modernization in Gambia</h3>
					<a href="https://comium.gm" target="_blank">
						<button class="p-2 min-w-[120px] text-sm border border-primary text-primary bg-transparent hover:border-primary hover:text-white hover:bg-primary rounded-full select-none transition-all duration-300 ease-in-out">Visit Website</button>
					</a>
					<div class="flex flex-col gap-12">
						<div class="flex flex-col">
							<p class="text-lg text-[#5D5D5D]">Delivered 4G data services to underserved rural areas in Gambia.</p>
							<hr class="my-3" />
							<p class="text-lg text-[#5D5D5D]">Achieved seamless cross-vendor interoperability, supports CSFB.</p>
							<hr class="my-3" />
							<p class="text-lg text-[#5D5D5D]">Engineered to support over 100,000 concurrent connections with a total system throughput of 50 Gbps.</p>
							<hr class="my-3" />
							<p class="text-lg text-[#5D5D5D]">Implemented a flexible CUPS architecture with integrated DPI for intelligent traffic management and service differentiation.</p>
							<hr class="my-3" />
							<p class="text-lg text-[#5D5D5D]">Enabled rapid commercial launch with a scalable network foundation built for future evolution.</p>
						</div>
					</div>
				</div>

				<div class="flex-1">
					<NuxtImg class="w-full mx-auto" src="images/mno-solution-case.webp" alt="MNO Solution Case" width="1038" height="912" />
				</div>
			</div>

			<div class="flex max-lg:flex-col justify-between items-start max-lg:gap-4 gap-32">
				<div class="flex-1 flex flex-col justify-center gap-8 lg:w-2/3">
					<h2 class="text-xl lg:text-3xl font-semibold text-primary">MVNO Solution Case: Monty eSIM</h2>
					<h3 class="text-2xl lg:text-4xl font-semibold">Digital-First Mobile Launch with Full Network Agility</h3>
					<a href="https://montyesim.com" target="_blank">
						<button class="p-2 min-w-[120px] text-sm border border-primary text-primary bg-transparent hover:border-primary hover:text-white hover:bg-primary rounded-full select-none transition-all duration-300 ease-in-out">Visit Website</button>
					</a>
					<div class="flex flex-col gap-12">
						<div class="flex flex-col">
							<p class="text-lg text-[#5D5D5D]">Enabled 3G, 4G, and 5G Non-Standalone (NSA) services through a unified core platform.</p>
							<hr class="my-3" />
							<p class="text-lg text-[#5D5D5D]">Deployed a comprehensive “MVNO-in-a-Box” solution, natively integrated with the Monty eSIM platform.</p>
							<hr class="my-3" />
							<p class="text-lg text-[#5D5D5D]">Scaled to support 500,000 subscribers and 100 Gbps data throughput.</p>
							<hr class="my-3" />
							<p class="text-lg text-[#5D5D5D]">Ensured seamless service delivery through smooth integration with host MNO networks.</p>
							<hr class="my-3" />
							<p class="text-lg text-[#5D5D5D]">Leveraged built-in DPI for real-time service orchestration and granular policy control.</p>
							<hr class="my-3" />
							<p class="text-lg text-[#5D5D5D]">Accelerated time-to-market with a lean operational model that eliminates physical infrastructure overhead.</p>
						</div>
					</div>
				</div>

				<div class="flex-1">
					<NuxtImg class="w-full mx-auto" src="images/mvno-solution-case.webp" alt="MNO Solution Case" width="1038" height="912" />
				</div>
			</div>

			<div class="flex max-lg:flex-col justify-between items-start max-lg:gap-4 gap-32">
				<div class="flex-1 flex flex-col justify-center gap-8 lg:w-2/3">
					<h2 class="text-xl lg:text-3xl font-semibold text-primary">RAN (Rural Area) Solution Case: Comium</h2>
					<h3 class="text-2xl lg:text-4xl font-semibold">Network Expansion for Comium: Rural Connectivity Expansion with High-Capacity RAN</h3>
					<a href="https://comium.gm" target="_blank">
						<button class="p-2 min-w-[120px] text-sm border border-primary text-primary bg-transparent hover:border-primary hover:text-white hover:bg-primary rounded-full select-none transition-all duration-300 ease-in-out">Visit Website</button>
					</a>
					<div class="flex flex-col gap-12">
						<div class="flex flex-col">
							<p class="text-lg text-[#5D5D5D]">Expanded 4G data and CSFB coverage across Gambia's rural regions.</p>
							<hr class="my-3" />
							<p class="text-lg text-[#5D5D5D]">Strengthened network capacity to serve over 100,000 new users.</p>
							<hr class="my-3" />
							<p class="text-lg text-[#5D5D5D]">Rolled out 100 carrier-grade base stations, optimized for challenging environments.</p>
							<hr class="my-3" />
							<p class="text-lg text-[#5D5D5D]">Significantly enhanced service quality and coverage, bridging the digital divide in remote areas.</p>
						</div>
					</div>
				</div>

				<div class="flex-1">
					<NuxtImg class="w-full mx-auto" src="images/ran-solution-case.webp" alt="MNO Solution Case" width="1038" height="912" />
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	useSeoMeta({
		title: 'Use Cases',
		description: ``,
		
		ogTitle: 'Use Cases',
		ogDescription: '',
		ogImage: 'https://moya.com/images/og-image-1200x630.png',

		twitterTitle: 'Use Cases',
		twitterDescription: '',
		twitterCard: 'summary_large_image',
	});
</script>

<style lang="sass">

</style>