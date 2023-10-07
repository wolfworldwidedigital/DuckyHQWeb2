<template>
	<div class="flex gap-[32px] min-h-0 max-[800px]:flex-col">
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
						I'm a versatile designer skilled in UI design, graphic design,
						motion design, 3D design, & front-end web development. And I'm
						focusing on creating innovative apps, websites, tools, & concept
						videos.
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
								src="/icons/skills/figma.svg"
							/>
							<nuxt-img
								v-tooltip="'Affinity'"
								width="32"
								height="32"
								src="/icons/skills/designer.svg"
							/>
							<nuxt-img
								v-tooltip="'After Effects'"
								width="32"
								height="32"
								src="/icons/skills/ae.svg"
							/>
							<nuxt-img
								v-tooltip="'Visual Studio Code'"
								width="32"
								height="32"
								src="/icons/skills/vscode.svg"
							/>
							<nuxt-img
								v-tooltip="'Git'"
								width="32"
								height="32"
								preload
								src="/icons/skills/git.svg"
							/>
							<nuxt-img
								v-tooltip="'Jetbrains IDEs'"
								width="32"
								height="32"
								src="/icons/skills/jetbrains.svg"
							/>
						</div>
						<p class="text-[18px]">Languages & Frameworks</p>
						<div class="flex flex-wrap gap-[16px] h-fit">
							<nuxt-img
								v-tooltip="'Javascript'"
								width="32"
								height="32"
								preload
								src="/icons/skills/js.svg"
							/>
							<nuxt-img
								v-tooltip="'Python'"
								width="32"
								height="32"
								src="/icons/skills/python.svg"
							/>
							<nuxt-img
								v-tooltip="'Nuxt.js'"
								width="32"
								height="32"
								src="/icons/skills/nuxt.svg"
							/>
							<nuxt-img
								v-tooltip="'Vue.js'"
								width="32"
								height="32"
								src="/icons/skills/vue.svg"
							/>
						</div>
					</div>
				</div>
				<div class="flex flex-col gap-[32px] h-fit w-full">
					<h1 class="text-[40px] font-medium">Experience</h1>
					<h3 class="text-[28px] font-medium">Bananacraft</h3>
					<p class="text-[18px] leading-[225%]">
						I am a developer at the Minecraft network Bananacraft. I help out
						with plugin configuration, building, and web design.
					</p>
					<h3 class="text-[28px] font-medium">Extronode & Seanodes</h3>
					<p class="text-[18px] leading-[225%]">
						Extronode/Seanodes <b>were</b> Minecraft server hosting networks. I
						was an admin there, and helped out with the MC server network, web &
						brand design, advertising, and community managment.
					</p>
					<h3 class="text-[28px] font-medium">TVS</h3>
					<p class="text-[18px] leading-[225%]">
						Designed, coded, and deployed website for TVS.
						<a href="https://www.trashvomitstudios.com" class="underline" target="_blank">Visit the website</a>
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
		"I'm dukc. And I'm a versatile designer skilled in UI, graphic, & motion design",
	ogDescription:
		"I'm dukc. And I'm a versatile designer skilled in UI, graphic, & motion design",
	ogImage: "/seoCover.png",
	twitterCard: "summary_large_image",
});
</script>
