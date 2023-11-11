<template>
	<div class="flex gap-[32px] min-h-0 max-[800px]:flex-col max-[800px]:min-h-[500px]">
		<PagesNav selected="about" />
		<div
			class="w-full overflow-hidden h-full flex bg-[#0f0f0f]/60 border border-white/10 backdrop-blur-[100px] rounded-[10px] max-[800px]:overflow-y-auto"
		>
			<div
				class="flex flex-col max-[800px]:place-content-start gap-[86px] max-[800px]:gap-[64px] p-[64px] max-[800px]:p-[32px] h-full w-full overflow-y-scroll"
			>
				<div class="flex flex-col gap-[32px] h-fit w-full">
					<h1 class="text-[40px] font-medium">About</h1>
					<p class="text-[18px] leading-[225%]">
					No exaggerated presentations or impossibly fussy scenarios, but data-based, actionable strategies with a clear roadmap to achieve results.
					Make your project stand out with Wolf Worldwide!
					Do you have a business project that requires efficient and expert management? Look no further than Wolf Worldwide! Our experienced team will handle all aspects of your business projects, from creating a website to handling your social media strategies and developing video production. We offer full-service management for any project and guarantee quick yet professional results.
					Save time, money, and effort with our online project management service. Increase the success rate of your projects by leaving it in the hands of experts! With Wolf Worldwide, you’ll get personalized attention, reliable advice and an unbeatable performance.
					
					Start taking advantage of our Digital Project Management services now — maximize the efficiency and success rate of your projects with Wolf Worldwide!
					</p>
				</div>
				<div class="flex flex-col gap-[32px] h-fit w-full">
					<h1 class="text-[40px] font-medium">Skills</h1>
					<div class="flex flex-col gap-[16px]">
						<p class="text-[18px]">Tools & Software</p>
						<div class="flex flex-wrap gap-[16px] h-fit">
							<nuxt-img
								v-tooltip="'Figma'"
								width="32"
								height="32"
								alt="Figma"
								src="/icons/skills/figma.svg"
							/>
							<nuxt-img
								v-tooltip="'Affinity'"
								width="32"
								height="32"
								alt="Affinity"
								src="/icons/skills/designer.svg"
							/>
							<nuxt-img
								v-tooltip="'After Effects'"
								width="32"
								height="32"
								alt="After Effects"
								src="/icons/skills/ae.svg"
							/>
							<nuxt-img
								v-tooltip="'Visual Studio Code'"
								width="32"
								height="32"
								alt="Visual Studio Code"
								src="/icons/skills/vscode.svg"
							/>
							<nuxt-img
								v-tooltip="'Git'"
								width="32"
								height="32"
								preload
								alt="Git"
								src="/icons/skills/git.svg"
							/>
							<nuxt-img
								v-tooltip="'Jetbrains IDEs'"
								width="32"
								height="32"
								alt="Jetbrains"
								src="/icons/skills/jetbrains.svg"
							/>
						</div>
						<p class="text-[18px]">Languages & Frameworks</p>
						<div class="flex flex-wrap gap-[16px] h-fit">
							<nuxt-img
								v-tooltip="'Javascript'"
								width="32"
								height="32"
								alt="Javascript"
								src="/icons/skills/js.svg"
							/>
							<nuxt-img
								v-tooltip="'Python'"
								width="32"
								height="32"
								alt="Python"
								src="/icons/skills/python.svg"
							/>
							<nuxt-img
								v-tooltip="'Nuxt.js'"
								width="32"
								height="32"
								alt="Nuxt"
								src="/icons/skills/nuxt.svg"
							/>
							<nuxt-img
								v-tooltip="'Vue.js'"
								width="32"
								height="32"
								alt="Vue"
								src="/icons/skills/vue.svg"
							/>
						</div>
					</div>
				</div>
				<div class="flex flex-col gap-[32px] h-fit w-full">
					<h1 class="text-[40px] font-medium">Experience</h1>
					<h3 class="text-[28px] font-medium">Pijntherapie</h3>
					<p class="text-[18px] leading-[225%]">
						I am the project manager and developer of pijntherapie.com. A platform in the Netherlands that helps people with chronic pain and locating triggerpoints.
						<a href="https://pijntherapie.com" class="underline" target="_blank">Visit the website</a>
					</p>
					<h3 class="text-[28px] font-medium">Treated</h3>
					<p class="text-[18px] leading-[225%]">
						I worked for Treated as a customer service representative and developer. I helped with the development of the website and the customer service.
						<a href="https://nl.treated.com" class="underline" target="_blank">Visit the website</a>
					</p>
				</div>
				<nuxt-link
					to="/contact"
					class="flex gap-[8px] w-fit place-items-center hover:scale-95 active:scale-50 duration-200 cursor-pointer"
				>
					<p class="text-[18px] font-medium">Contact me</p>
					<nuxt-icon name="link" />
				</nuxt-link>
			</div>
			<nuxt-img
				src="/about.png"
				format="webp"
				fit="contain"
				loading="lazy"
				alt="About image"
				class="w-[50%] min-[1800px]:min-w-[950px] max-[1300px]:hidden object-cover h-screen"
			/>
		</div>
	</div>
</template>

<script setup>
useSeoMeta({
	title: "About",
	ogTitle: "About",
	description:
		"David is what they call me around these parts. Check out my online price estimator and let's get to work!",
	ogDescription:
		"David is what they call me around these parts. Check out my online price estimator and let's get to work!",
	ogImage: "/seoCover.png",
	twitterCard: "summary_large_image",
});
</script>
