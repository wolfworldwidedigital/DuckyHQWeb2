<template>
	<nav
		class="flex sticky place-content-between h-fit w-full align-middle place-items-center"
	>
		<nuxt-link to="/"
			><nuxt-img
				class="hover:scale-95 active:scale-50 duration-200"
				src="/logo.png"
				width="24"
		/></nuxt-link>
		<Status type="No" />
	</nav>
</template>
