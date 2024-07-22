<script>
import AppHeader from "./components/header/AppHeader.vue";
import { RouterView } from "vue-router";

export default {
	name: "App",
	components: {
		AppHeader,
		RouterView,
	},
	data() {
		return {};
	},
	methods: {},
	mounted() {},
};
</script>

<template>
	<AppHeader />
	<div class="container">
		<RouterView />
	</div>
</template>

<style scoped></style>
