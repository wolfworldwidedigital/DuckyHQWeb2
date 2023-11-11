<template>
	<div
		class="bg-transparent text-white p-[64px] max-[800px]:px-[32px] h-screen min-h-screen overflow-y-hidden overflow-x-hidden flex flex-col gap-[64px] z-10 max-[800px]:overflow-y-scroll"
	>
		<nav
			class="flex place-content-between h-fit w-full align-middle place-items-center"
		>
			<nuxt-link to="https://wolfworldwide.digital"
				><nuxt-img
					class="hover:scale-95 active:scale-50 duration-200"
					src="/logo.svg"
					width="24"
			/></nuxt-link>
			<Status />
		</nav>
		<div class="min-h-0 w-full flex max-[800px]:flex-col gap-[64px]">
			<slot />
			<div
				id="right"
				class="w-fit h-full max-[800px]:h-fit max-[800px]:w-full flex flex-col gap-[32px] align-middle place-items-center"
			>
				<div class="flex min-[800px]:flex-col gap-[16px]">
					<NuxtLink
					to="https://www.facebook.com/daviddewolf88"
						target="_blank"
						class="hover:scale-95 active:scale-50 duration-200"
					>
						<nuxt-img width="36" alt="Bento" src="/icons/bento.svg" />
					</NuxtLink>
					<NuxtLink
						to="https://www.youtube.com/@wolfworldwide.digital"
						target="_blank"
						class="hover:scale-95 active:scale-50 duration-200"
					>
						<nuxt-img width="36" alt="YouTube" src="/icons/yt.svg" />
					</NuxtLink>
					<NuxtLink
						to=""
						target="_blank"
						class="hover:scale-95 active:scale-50 duration-200"
					>
						<nuxt-img width="36" alt="Behance" src="/icons/behance.svg" />
					</NuxtLink>
					<NuxtLink
						to=""
						target="_blank"
						class="hover:scale-95 active:scale-50 duration-200"
					>
						<nuxt-img width="36" alt="Discord" src="/icons/discord.svg" />
					</NuxtLink>
					<NuxtLink
						to="https://github.com/wolfworldwidedigital"
						target="_blank"
						class="hover:scale-95 active:scale-50 duration-200"
					>
						<nuxt-img width="36" alt="GitHub" src="/icons/github.svg" />
					</NuxtLink>
				</div>
				<div
					class="w-[1px] h-full border max-[800px]:hidden border-white/10"
				></div>
			</div>
		</div>
	</div>
	<div
		class="relative bottom-[70vh] left-[10vw] h-[30rem] w-[40rem] bg-gradient-to-tr animate-spin-slow from-brand-blue-1 to-brand-purple blur-[128px] rounded-full -z-10"
	></div>
	<div
		class="relative bottom-[90vh] left-[80vw] opacity-50 h-[40rem] w-[35rem] bg-gradient-to-tr animate-spin-slow from-brand-purple to-brand-purple blur-[128px] rounded-full -z-10"
	></div>
</template>
