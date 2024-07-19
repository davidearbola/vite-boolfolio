<script>
import Store from "./data/Store";
import MyFunction from "./helpers/Function";
import AppHeader from "./components/header/AppHeader.vue";
import Paginator from "./components/elements/Paginator.vue";
import ProjectCard from "./components/elements/ProjectCard.vue";
import { RouterView } from "vue-router";

export default {
	name: "App",
	components: {
		AppHeader,
		ProjectCard,
		Paginator,
		RouterView,
	},
	data() {
		return {
			Store,
			MyFunction,
		};
	},
	methods: {},
	mounted() {
		MyFunction.getProjectList();
	},
};
</script>

<template>
	<AppHeader />
	<RouterView />
	<div class="d-flex flex-wrap">
		<div v-for="project in Store.projects.data" class="card col-4">
			<ProjectCard :project="project" :url="Store.base_url" />
		</div>
	</div>
	<Paginator />
</template>

<style scoped></style>
