// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	css: ["~/assets/sass/app.sass"],
	pages: true,
	app: {
		head: {
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
			titleTemplate: "%s | Moya",
			htmlAttrs: {
				lang: "en",
			},
			link: [
				{
					rel: "icon",
					type: "image/png",
					href: "https://moya.com/images/favicon-64x64.png",
				},
				{
					rel: "icon",
					type: "image/png",
					href: "https://moya.com/images/favicon-32x32.png",
				},
				{
					rel: "icon",
					type: "image/png",
					href: "https://moya.com/images/favicon-16x16.png",
				},
				{
					rel: "apple-touch-icon",
					type: "image/png",
					href: "https://moya.com/images/apple-touch-icon-180x180.png",
				},
				{
					rel: "mask-icon",
					href: "https://moya.com/images/icons/mask-icon.svg",
					color: "#32393C",
				},
				{
					rel: "icon",
					sizes: "192x192",
					href: "https://moya.com/images/android-chrome-192x192.png",
				},
				{
					rel: "icon",
					sizes: "512x512",
					href: "https://moya.com/images/android-chrome-512x512.png",
				},
			],
			meta: [
				{ name: "theme-color", content: "#32393C" },
				{ name: "format-detection", content: "telephone=no" },
				{ name: "author", content: "Moya" },
				{ name: "og:site_name", content: "Moya" },
				{ name: "og:image:alt", content: "Moya" },
				{ name: "og:image:width", content: "1200" },
				{ name: "og:image:height", content: "630" },
				{ name: "mobile-web-app-capable", content: "yes" },
				{ name: "apple-mobile-web-app-capable", content: "yes" },
				{ name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
				{ name: "robots", content: "index, follow" },
			],
			script: [
				{
					type: 'application/ld+json',
					children: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Organization",
						"name": "Moya",
						"url": "https://www.moya.com",
						"description": "",
						"logo": "https://moya.com/images/logo.svg", // png
						"sameAs": [
							// "https://www.facebook.com/moya",
							// "https://x.com/moyaapp",
							// "https://www.instagram.com/moya",
							// "https://www.linkedin.com/company/my-monty",
							// "https://www.youtube.com/@moya4395",
							// "https://apps.apple.com/lb/app/moya-europe/id6451243007",
							// "https://play.google.com/store/apps/details?id=com.moya.wallet",
						]
					})
				},
			],
		},
		//pageTransition: { name: 'page', mode: 'out-in' }
	},
	modules: [
		'@nuxtjs/tailwindcss',
		"@nuxt/image",
		"@nuxt/icon",
		"nuxt-swiper",
		"@nuxt/scripts",
		"@vueuse/nuxt",
	],
	image: {
		provider: "twicpics",
	},
})