<template>
	<div class="bg-black text-white">
		<div class="flex flex-col gap-[32px] w-full">
			<h1 class="font-hanson text-9xl">dukc</h1>
			<div
				class="flex flex-col gap-[32px] align-middle place-items-center w-full"
			>
				<div class="flex place-content-between h-fit w-full">
					<p class="text-[20px]">UI designer</p>
					<p class="text-[20px]">Front-end web developer</p>
					<p class="text-[20px]">Content creator</p>
				</div>
				<div class="flex place-content-between h-fit w-[50vw]">
					<nuxt-link
						class="flex gap-[8px] align-middle place-items-center hover:scale-95 active:scale-50 duration-200"
					>
						<p class="text-[20px]">View work</p>
						<nuxt-icon name="link" class="text-white" />
					</nuxt-link>
					<nuxt-link
						class="flex gap-[8px] align-middle place-items-center hover:scale-95 active:scale-50 duration-200"
					>
						<p class="text-[20px]">About</p>
						<nuxt-icon name="link" class="text-white" />
					</nuxt-link>
					<nuxt-link
						class="flex gap-[8px] align-middle place-items-center hover:scale-95 active:scale-50 duration-200"
					>
						<p class="text-[20px]">Contact</p>
						<nuxt-icon name="link" class="text-white" />
					</nuxt-link>
				</div>
			</div>
		</div>
	</div>
</template>
