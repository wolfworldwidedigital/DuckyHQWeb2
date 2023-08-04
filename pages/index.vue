<template>
	<div class="flex gap-[32px] h-full">
		<PagesNav selected="work" />
		<div
			class="w-full h-full grid grid-cols-2 max-[1000px]:grid-cols-1 overflow-y-scroll gap-[24px] p-[32px] bg-[#0f0f0f]/60 border border-white/10 backdrop-blur-[100px] rounded-[10px]"
		>
			<div
				class="bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.3)),url('/bg.jpg')] bg-cover hover:scale-[.98] cursor-pointer active:scale-75 transition-all duration-200 bg-no-repeat bg-clip-padding rounded-[10px] border border-white/10 w-full h-[400px] flex flex-col gap-[8px] p-[32px] align-bottom place-content-end group"
			>
				<h2
					class="text-[30px] font-medium opacity-0 group-hover:opacity-100 duration-200 transition-all w-full"
				>
					A post!
				</h2>
				<p
					class="text-[18px] opacity-0 group-hover:opacity-50 duration-200 transition-all w-full"
				>
					Design - Aug 3, 2023
				</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
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
