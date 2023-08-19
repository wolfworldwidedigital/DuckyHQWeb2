<script>
import {gsap} from "gsap";

export default {
	mounted() {
		gsap.fromTo(
			this.$refs.header,
			{autoAlpha: 0, y: -100},
			{autoAlpha: 1, y: 0, duration: 1, ease: "power4.inOut"}
		);
	}
};
</script>

<template>
	<div
		class="bg-transparent text-white p-[64px] h-screen min-h-screen flex flex-col gap-[64px] z-10"
	>
		<nav
			class="flex place-content-between h-fit w-full align-middle place-items-center"
		>
			<nuxt-link to="/"
				><nuxt-img
					class="hover:scale-95 active:scale-50 duration-200"
					src="/logo.svg"
					width="24"
			/></nuxt-link>
			<Status type="No" />
		</nav>
		<div class="min-h-0 w-full flex gap-[64px]">
			<div id="left" class="w-full h-full flex flex-col gap-[64px]">
				<div class="flex flex-col gap-[32px]">
					<h1
						class="font-hanson text-[100px] leading-[75px] opacity-0"
						ref="header"
					>
						dukc
					</h1>
					<p class="text-[20px]">UI designer, & front-end web developer.</p>
				</div>
				<NuxtPage />
			</div>
			<div
				id="right"
				class="w-fit h-full flex flex-col gap-[32px] align-middle place-items-center"
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
	<div
		class="relative bottom-[70vh] left-[10vw] h-[30rem] w-[40rem] bg-gradient-to-tr animate-spin-slow from-brand-blue-1 to-brand-purple blur-[128px] rounded-full -z-10"
	></div>
	<div
		class="relative bottom-[90vh] left-[80vw] opacity-50 h-[40rem] w-[35rem] bg-gradient-to-tr animate-spin-slow from-brand-purple to-brand-purple blur-[128px] rounded-full -z-10"
	></div>
	<div
		class="relative bottom-[50vh] left-[50vw] opacity-70 h-[30rem] w-[15rem] bg-gradient-to-tr animate-spin-slow from-brand-blue-2 to-brand-blue-1 blur-[128px] rounded-full -z-10"
	></div>
</template>
