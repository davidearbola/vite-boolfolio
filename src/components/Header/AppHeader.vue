<script>
import Store from "../../data/Store";
import MyFunction from "../../helpers/Function";

export default {
	name: "AppHeader",
	data() {
		return {
			Store,
			MyFunction,
		};
	},
	methods: {},
	mounted() {},
};
</script>

<template>
	<nav class="nav justify-content-center bg-dark">
		<a class="nav-link text-decoration-none text-white" href="#">Home</a>
		<a class="nav-link text-decoration-none text-white" href="#">About</a>
		<a class="nav-link text-decoration-none text-white" href="#">Projects</a>
	</nav>
</template>

<style scoped></style>
