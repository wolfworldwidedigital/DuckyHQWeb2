<template>
	<div class="bg-black text-white p-[64px] h-screen flex flex-col gap-[64px]">
		<nav
			class="flex place-content-between h-fit w-full align-middle place-items-center"
		>
			<nuxt-link to="/"
				><nuxt-img
					class="hover:scale-95 active:scale-50 duration-200"
					src="/logo.png"
					width="24"
			/></nuxt-link>
			<Status type="No" />
		</nav>
		<div class="flex gap-[64px] h-full w-full">
			<div id="left" class="flex flex-col gap-[64px] w-full h-full">
				<div class="flex flex-col gap-[32px]">
					<h1 class="font-hanson text-[100px] leading-[75px]">dukc</h1>
					<p class="text-[20px]">UI designer, & front-end web developer.</p>
				</div>
				<NuxtPage />
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
	</div>
</template>
