<script>
import Store from "../../data/Store";
import MyFunction from "../../helpers/Function";
import { RouterLink } from "vue-router";

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
		<li v-for="link in Store.menuLink">
			<router-link :to="{ name: link }" class="nav-link text-white">
				{{ link }}
			</router-link>
		</li>
	</nav>
</template>

<style scoped></style>
