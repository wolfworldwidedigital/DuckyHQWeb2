<template>
	<div
		class="w-fit h-full flex flex-col align-middle justify-center gap-[32px] p-[16px] bg-[#0f0f0f]/60 border border-white/10 backdrop-blur-[100px] rounded-[10px]"
	>
		<nuxt-link to="/">
			<nuxt-icon
				name="work"
				:class="[
					{
						'selected hover:scale-95 active:scale-50 duration-200': work,
					},
					{
						'text-white hover:scale-95 active:scale-50 duration-200': about,
					},
					{
						'text-white hover:scale-95 active:scale-50 duration-200': projects,
					},
					{
						'text-white hover:scale-95 active:scale-50 duration-200': contact,
					},
				]"
			/>
		</nuxt-link>
		<nuxt-link to="/about">
			<nuxt-icon
				name="about"
				:class="[
					{
						'text-white hover:scale-95 active:scale-50 duration-200': work,
					},
					{
						'selected hover:scale-95 active:scale-50 duration-200': about,
					},
					{
						'text-white hover:scale-95 active:scale-50 duration-200': projects,
					},
					{
						'text-white hover:scale-95 active:scale-50 duration-200': contact,
					},
				]"
			/>
		</nuxt-link>
		<nuxt-link to="/projects">
			<nuxt-icon
				name="projects"
				:class="[
					{
						'text-white hover:scale-95 active:scale-50 duration-200': work,
					},
					{
						'text-white hover:scale-95 active:scale-50 duration-200': about,
					},
					{
						'selected hover:scale-95 active:scale-50 duration-200': projects,
					},
					{
						'text-white hover:scale-95 active:scale-50 duration-200': contact,
					},
				]"
			/>
		</nuxt-link>
		<nuxt-link to="/contact">
			<nuxt-icon
				name="contact"
				:class="[
					{
						'text-white hover:scale-95 active:scale-50 duration-200': work,
					},
					{
						'text-white hover:scale-95 active:scale-50 duration-200': about,
					},
					{
						'text-white hover:scale-95 active:scale-50 duration-200': projects,
					},
					{
						'selected hover:scale-95 active:scale-50 duration-200': contact,
					},
				]"
			/>
		</nuxt-link>
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
	},
};
</script>
