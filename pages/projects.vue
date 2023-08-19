<template>
	<div class="flex gap-[32px] h-full min-h-0">
		<PagesNav selected="projects" />
		<div
			class="w-full overflow-y-auto h-full flex flex-col gap-[64px] p-[64px] bg-[#0f0f0f]/60 border border-white/10 backdrop-blur-[100px] rounded-[10px]"
		>
			<ContentList path="/projects" v-slot="{list}">
				<NuxtLink
					v-for="project in list"
					:key="project._path"
					:to="project._path"
					class="h-fit w-full flex gap-[64px]"
				>
					<h1 class="text-[30px] font-medium">{{ project.title }}</h1>
					<div class="flex flex-col gap-[16px]">
						<p class="text-[18px]">
							{{ project.description }}
						</p>
						<div class="flex gap-[32px]">
							<div
								class="flex gap-[8px] place-items-center hover:scale-95 active:scale-50 duration-200 cursor-pointer"
							>
								<p class="text-[13px]">Learn More</p>
								<nuxt-icon name="link" />
							</div>
							<div
								class="flex gap-[8px] place-items-center hover:scale-95 active:scale-50 duration-200 cursor-pointer"
							>
								<p class="text-[13px]">Website</p>
								<nuxt-icon name="link" />
							</div>
						</div>
					</div>
				</NuxtLink>
			</ContentList>
			<div class="h-96"></div>
		</div>
	</div>
</template>

<script setup>
useSeoMeta({
	title: "DuckyHQ : Projects",
	ogTitle: "DuckyHQ : Projects",
	description:
		"I'm dukc. And I'm a versatile designer skilled in UI, graphic, & motion design",
	ogDescription:
		"I'm dukc. And I'm a versatile designer skilled in UI, graphic, & motion design",
	ogImage: "/logobg.png",
	twitterCard: "summary_large_image",
});
</script>
