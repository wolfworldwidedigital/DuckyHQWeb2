<template>
	<div class="flex gap-[32px] min-h-0">
		<PagesNav selected="contact" />
		<div
			class="w-full overflow-hidden h-full flex bg-[#0f0f0f]/60 border border-white/10 backdrop-blur-[100px] rounded-[10px]"
		>
			<div class="flex flex-col place-content-between p-[64px] h-full w-full">
				<div class="flex flex-col gap-[32px] h-fit w-full">
					<h1 class="text-[40px] font-medium">Contact</h1>
					<p class="text-[18px] leading-[225%]">
						I am not available to work right now.
						But if you need to contact me, do it via <b>Discord</b> or <b>Email</b>.
					</p>
				</div>
				<div class="flex flex-col gap-[16px]">
					<p class="text-[18px]">Discord: dukkcc (dukc#1881)</p>
					<p class="text-[18px]">Email: jacobdukc@gmail.com</p>
				</div>
			</div>
			<nuxt-img src="/contact.png" class="w-[50%] object-cover h-screen" />
		</div>
	</div>
</template>

<script setup>
useSeoMeta({
	title: "DuckyHQ : Contact",
	ogTitle: "DuckyHQ : Contact",
	description:
		"I'm dukc. And I'm a versatile designer skilled in UI, graphic, & motion design",
	ogDescription:
		"I'm dukc. And I'm a versatile designer skilled in UI, graphic, & motion design",
	ogImage: "/logobg.png",
	twitterCard: "summary_large_image",
});
</script>
