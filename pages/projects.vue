<template>
	<div class="flex gap-[32px] h-full min-h-0 max-[800px]:flex-col max-[800px]:min-h-[500px]">
		<PagesNav selected="projects" />
		<div
			class="w-full overflow-y-auto h-full flex flex-col gap-[64px] max-[800px]:p-[32px] p-[64px] bg-[#0f0f0f]/60 border border-white/10 backdrop-blur-[100px] rounded-[10px]"
		>
			<div class="h-fit w-full flex gap-[64px] max-[990px]:flex-col max-[995px]:gap-[32px]">
				<h1 class="text-[30px] font-medium">HQLauncher</h1>
				<div class="flex flex-col gap-[16px] max-[995px]:gap-[32px]">
					<p class="text-[18px]">
						A functional Minecraft launcher with several features and beautiful
						UI. <br />
						Work in progress. Not available for download yet.
					</p>
					<div class="flex gap-[32px]">
						<NuxtLink
							to="/posts/2-treated"
							class="flex gap-[8px] place-items-center hover:scale-95 active:scale-50 duration-200 cursor-pointer"
						>
							<p class="text-[13px]">Learn More</p>
							<nuxt-icon name="link" />
						</NuxtLink>
						<NuxtLink
							to="#"
							class="flex gap-[8px] place-items-center hover:scale-95 active:scale-50 duration-200 cursor-pointer"
						>
							<p class="text-[13px]">Website</p>
							<nuxt-icon name="link" />
						</NuxtLink>
					</div>
				</div>
			</div>
			<div class="h-screen"></div>
		</div>
	</div>
</template>

<script setup>
useSeoMeta({
	title: "Projects",
	ogTitle: "Projects",
	description:
		"David is what they call me around these parts. Check out my online price estimator and let's get to work!",
	ogDescription:
		"David is what they call me around these parts. Check out my online price estimator and let's get to work!",
	ogImage: "/seoCover.png",
	twitterCard: "summary_large_image",
});
</script>
