<template>
	<div class="flex gap-[32px] min-h-0">
		<PagesNav selected="none" />
		<div
			class="w-full overflow-y-auto p-[32px] bg-[#0f0f0f]/60 border border-white/10 backdrop-blur-[100px] rounded-[10px]"
		>
			<article
				class="prose lg:prose-xl prose-h1:text-white prose-h2:text-white prose-h3:text-white prose-h4:text-white prose-h6:text-white prose-p:text-[#e1e1e1] prose-a:text-[#4abeff] hover:prose-a:text-[#a4deff] prose-code:text-[#b3b3b3] prose-li:text-[#e1e1e1] prose-ul:text-[#e1e1e1] prose-blockquote:text-[#e1e1e1]"
			>
				<ContentDoc />
			</article>
            <div class="h-96"></div>
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
