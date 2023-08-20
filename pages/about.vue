<template>
	<div class="flex gap-[32px] min-h-0">
		<PagesNav selected="about" />
		<div
			class="w-full overflow-hidden h-full flex bg-[#0f0f0f]/60 border border-white/10 backdrop-blur-[100px] rounded-[10px]"
		>
			<div class="flex flex-col place-content-between p-[64px] h-full w-full">
				<div class="flex flex-col gap-[32px] h-fit w-full">
					<h1 class="text-[40px] font-medium">About</h1>
					<p class="text-[18px] leading-[225%]">
						I'm a versatile designer skilled in UI design, graphic design,
						motion design, 3D design, & front-end web development. Focusing on
						creating innovative apps, websites, tools, & concept videos.
					</p>
				</div>
				<div class="h-screen"></div>
				<div class="flex place-content-between h-fit w-full">
					<nuxt-link
						to="/contact"
						class="flex gap-[8px] place-items-center hover:scale-95 active:scale-50 duration-200 cursor-pointer"
					>
						<p class="text-[18px] font-medium">Contact me</p>
						<nuxt-icon name="link" />
					</nuxt-link>
					<button
						@click="openModal"
						class="text-[18px] font-medium hover:scale-95 active:scale-50 duration-200 cursor-pointer"
					>
						View Skills
					</button>
				</div>
			</div>
			<nuxt-img
				src="/about.png"
				class="w-[50%] min-[1800px]:min-w-[950px] max-[1300px]:hidden object-cover h-screen"
			/>
		</div>
	</div>
	<TransitionRoot appear :show="isOpen" as="template">
		<Dialog as="div" @close="closeModal" class="relative z-10">
			<TransitionChild
				as="template"
				enter="duration-300 ease-out"
				enter-from="opacity-0"
				enter-to="opacity-100"
				leave="duration-200 ease-in"
				leave-from="opacity-100"
				leave-to="opacity-0"
			>
				<div
					class="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-25"
				></div>
			</TransitionChild>

			<div class="fixed inset-0 overflow-y-auto">
				<div
					class="flex min-h-full items-center justify-center p-[32px] text-center"
				>
					<TransitionChild
						as="template"
						enter="duration-300 ease-out"
						enter-from="opacity-0 scale-95"
						enter-to="opacity-100 scale-100"
						leave="duration-200 ease-in"
						leave-from="opacity-100 scale-100"
						leave-to="opacity-0 scale-95"
					>
						<DialogPanel
							class="w-fit transform overflow-hidden rounded-[10px] text-white bg-[#0f0f0f]/60 backdrop-blur-[50px] border-2 border-white/10 p-[32px] text-left align-middle transition-all flex flex-col gap-[16px]"
						>
							<DialogTitle
								as="h3"
								class="text-[28px] font-medium leading-6 text-white"
							>
								Skills
							</DialogTitle>
							<div class="flex flex-col gap-[16px]">
								<p class="text-[18px]">Tools & Software</p>
								<div class="flex gap-[16px] h-[32px]">
									<nuxt-img
										v-tooltip="'Figma'"
										width="32"
										height="32"
										src="/icons/skills/figma.png"
									/>
									<nuxt-img
										v-tooltip="'Affinity'"
										width="32"
										height="32"
										src="/icons/skills/designer.png"
									/>
									<nuxt-img
										v-tooltip="'After Effects'"
										width="32"
										height="32"
										src="/icons/skills/ae.png"
									/>
									<nuxt-img
										v-tooltip="'Visual Studio Code'"
										width="32"
										height="32"
										src="/icons/skills/vscode.png"
									/>
									<nuxt-img
										v-tooltip="'Git'"
										width="32"
										height="32"
										src="/icons/skills/git.png"
									/>
									<nuxt-img
										v-tooltip="'Jetbrains IDEs'"
										width="32"
										height="32"
										src="/icons/skills/jetbrains.png"
									/>
								</div>
								<p class="text-[18px]">Languages & Frameworks</p>
								<div class="flex gap-[16px] h-[32px]">
									<nuxt-img
										v-tooltip="'Javascript'"
										width="32"
										height="32"
										src="/icons/skills/js.png"
									/>
									<nuxt-img
										v-tooltip="'Python'"
										width="32"
										height="32"
										src="/icons/skills/python.png"
									/>
									<nuxt-img
										v-tooltip="'Nuxt.js'"
										width="32"
										height="32"
										src="/icons/skills/nuxt.png"
									/>
									<nuxt-img
										v-tooltip="'Vue.js'"
										width="32"
										height="32"
										src="/icons/skills/vue.png"
									/>
									<nuxt-img
										v-tooltip="'Next.js'"
										width="32"
										height="32"
										src="/icons/skills/next.png"
									/>
									<nuxt-img
										v-tooltip="'React.js'"
										width="32"
										height="32"
										src="/icons/skills/react.png"
									/>
								</div>
							</div>
						</DialogPanel>
					</TransitionChild>
				</div>
			</div>
		</Dialog>
	</TransitionRoot>
</template>

<script setup>
import {
	TransitionRoot,
	TransitionChild,
	Dialog,
	DialogPanel,
	DialogTitle,
} from "@headlessui/vue";

const isOpen = ref(false);

function closeModal() {
	isOpen.value = false;
}

function openModal() {
	isOpen.value = true;
}
useSeoMeta({
	title: "About",
	ogTitle: "About",
	description:
		"I'm dukc. And I'm a versatile designer skilled in UI, graphic, & motion design",
	ogDescription:
		"I'm dukc. And I'm a versatile designer skilled in UI, graphic, & motion design",
	ogImage: "/logobg.png",
	twitterCard: "summary_large_image",
});
</script>
