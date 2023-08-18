<template>
	<div class="flex gap-[32px] min-h-0">
		<PagesNav selected="work" />
		<div
			appear
			@load="beforeEnter"
			class="w-full overflow-y-auto h-full grid grid-cols-3 max-[1270px]:grid-cols-2 max-[1000px]:grid-cols-1 gap-[24px] p-[32px] bg-[#0f0f0f]/60 border border-white/10 backdrop-blur-[100px] rounded-[10px]"
		>
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
		</div>
	</div>
</template>

<script setup>
useSeoMeta({
	title: "DuckyHQ : Work",
	ogTitle: "DuckyHQ : Work",
	description:
		"I'm dukc. And I'm a versatile designer skilled in UI, graphic, & motion design",
	ogDescription:
		"I'm dukc. And I'm a versatile designer skilled in UI, graphic, & motion design",
	ogImage: "/logobg.png",
	twitterCard: "summary_large_image",
});
</script>
