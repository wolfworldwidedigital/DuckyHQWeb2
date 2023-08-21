<template>
	<div
		class="flex gap-[32px] min-h-0 max-[800px]:flex-col max-[800px]:h-fit max-[800px]:min-h-[500px]"
	>
		<PagesNav selected="contact" />
		<div
			class="w-full overflow-hidden h-full flex bg-[#0f0f0f]/60 border border-white/10 backdrop-blur-[100px] rounded-[10px]"
		>
			<div
				class="flex flex-col place-content-between p-[64px] max-[800px]:p-[32px] h-full w-full"
			>
				<div class="flex flex-col gap-[32px] h-fit w-full">
					<h1 class="text-[40px] font-medium">Contact</h1>
					<p class="text-[18px] leading-[225%]">
						I am not available to work right now.
					</p>
				</div>
				<div class="h-screen max-[800px]:hidden"></div>
				<div class="hidden flex-col gap-[16px]">
					<p class="text-[18px]">Discord: dukkcc (dukc#1881)</p>
					<p class="text-[18px]">Email: jacobdukc@gmail.com</p>
				</div>
			</div>
			<nuxt-img
				src="/contact.png"
				preload
				format="webp"
				class="w-[50%] min-[1800px]:min-w-[950px] max-[1300px]:hidden object-cover h-screen"
			/>
		</div>
	</div>
</template>

<script setup>
useSeoMeta({
	title: "Contact",
	ogTitle: "Contact",
	description:
		"I'm dukc. And I'm a versatile designer skilled in UI, graphic, & motion design",
	ogDescription:
		"I'm dukc. And I'm a versatile designer skilled in UI, graphic, & motion design",
	ogImage: "/logobg.png",
	twitterCard: "summary_large_image",
});
</script>
