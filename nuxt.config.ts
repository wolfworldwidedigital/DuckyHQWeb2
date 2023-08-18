// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	ssr: true,
	modules: [
		"@nuxtjs/tailwindcss",
		"@nuxt/image",
		"nuxt-icons",
		"@nuxt/content",
	],
});
