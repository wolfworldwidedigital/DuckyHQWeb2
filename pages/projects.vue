<template>
	<div class="flex gap-[32px] h-full min-h-0">
		<PagesNav selected="projects" />
		<div
			class="w-full overflow-y-auto h-full flex flex-col gap-[64px] p-[64px] bg-[#0f0f0f]/60 border border-white/10 backdrop-blur-[100px] rounded-[10px]"
		>
			<Project />
			<Project />
			<div class="h-96"></div>
		</div>
	</div>
</template>

<script setup>
useSeoMeta({
	title: "DuckyHQ : Projects",
	ogTitle: "DuckyHQ : Projects",
	description:
		"I'm dukc. And I'm a versatile designer skilled in UI, graphic, & motion design",
	ogDescription:
		"I'm dukc. And I'm a versatile designer skilled in UI, graphic, & motion design",
	ogImage: "/logobg.png",
	twitterCard: "summary_large_image",
});
</script>
