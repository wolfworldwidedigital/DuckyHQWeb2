<template>
	<div
		class="w-fit h-full flex flex-col align-middle justify-center gap-[32px] p-[16px] bg-[#0f0f0f]/60 border border-white/10 backdrop-blur-[100px] rounded-[10px]"
	>
		<NuxtLink to="/" class="hover:scale-95 active:scale-50 duration-200">
			<nuxt-icon
				name="work"
				v-tooltip="'Work'"
				:class="[
					{
						'selected': work,
					},
					{
						'text-white': about,
					},
					{
						'text-white': projects,
					},
					{
						'text-white': contact,
					},
					{
						'text-white': none,
					},
				]"
			/>
		</NuxtLink>
		<NuxtLink to="/about" class="hover:scale-95 active:scale-50 duration-200">
			<nuxt-icon
				name="about"
				v-tooltip="'About'"
				:class="[
					{
						'text-white': work,
					},
					{
						'selected': about,
					},
					{
						'text-white': projects,
					},
					{
						'text-white': contact,
					},
					{
						'text-white': none,
					},
				]"
			/>
		</NuxtLink>
		<NuxtLink to="/projects" class="hover:scale-95 active:scale-50 duration-200">
			<nuxt-icon
				name="projects"
				v-tooltip="'Projects'"
				:class="[
					{
						'text-white': work,
					},
					{
						'text-white': about,
					},
					{
						'selected': projects,
					},
					{
						'text-white': contact,
					},
					{
						'text-white': none,
					},
				]"
			/>
		</NuxtLink>
		<NuxtLink to="/contact" class="hover:scale-95 active:scale-50 duration-200">
			<nuxt-icon
				name="contact"
				v-tooltip="'Contact'"
				:class="[
					{
						'text-white': work,
					},
					{
						'text-white ': about,
					},
					{
						'text-white': projects,
					},
					{
						'selected': contact,
					},
					{
						'text-white': none,
					},
				]"
			/>
		</NuxtLink>
	</div>
</template>

<script>
export default {
	props: {
		selected: {
			type: String,
			default: "work",
		},
	},

	computed: {
		work() {
			return this.selected === "work";
		},
		about() {
			return this.selected === "about";
		},
		projects() {
			return this.selected === "projects";
		},
		contact() {
			return this.selected === "contact";
		},
		none() {
			return this.selected === "none";
		},
	}
};
</script>
