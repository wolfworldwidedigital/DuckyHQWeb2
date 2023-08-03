<template>
	<div class="bg-black text-white h-full w-full flex gap-[64px]">
		<div id="left" class="flex flex-col w-full h-full gap-[64px]">
			<div class="flex flex-col gap-[32px] w-full h-full">
				<h1 class="font-hanson text-[100px] leading-[50px]">dukc</h1>
				<p class="text-[20px]">UI designer, & front-end web developer.</p>
			</div>
			<div class="flex gap-[32px] w-full h-full">
				<div
					class="w-fit h-full flex flex-col gap-[32px] px-[16px] bg-[#0f0f0f]/60 border border-white/10 backdrop-blur-[100px] rounded-[10px]"
				>
					<nuxt-icon name="work" />
				</div>
				<div
					class="w-full h-full flex flex-col gap-[32px] p-[32px] bg-[#0f0f0f]/60 border border-white/10 backdrop-blur-[100px] rounded-[10px]"
				>
					<p class="text-[20px]">hello world</p>
				</div>
			</div>
		</div>
		<div
			id="right"
			class="flex flex-col gap-[32px] w-fit h-full align-middle place-items-center"
		>
			<div class="flex flex-col gap-[16px]">
				<a href="#" class="hover:scale-95 active:scale-50 duration-200">
					<nuxt-img src="/icons/yt.png" />
				</a>
				<a href="#" class="hover:scale-95 active:scale-50 duration-200">
					<nuxt-img src="/icons/behance.png" />
				</a>
				<a href="#" class="hover:scale-95 active:scale-50 duration-200">
					<nuxt-img src="/icons/discord.png" />
				</a>
			</div>
			<div class="w-[1px] h-full border border-white/10"></div>
		</div>
	</div>
</template>
