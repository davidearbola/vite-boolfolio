<script>
import Store from "./data/Store";
import MyFunction from "./helpers/Function";
import AppHeader from "./components/Header/AppHeader.vue";
import Paginator from "./components/Paginator.vue";
import ProjectCard from "./components/ProjectCard.vue";

export default {
	name: "App",
	components: {
		AppHeader,
		ProjectCard,
		Paginator,
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
	<div class="d-flex flex-wrap">
		<div v-for="project in Store.projects.data" class="card col-4">
			<ProjectCard :project="project" :url="Store.base_url" />
		</div>
	</div>
	<Paginator />
</template>

<style scoped></style>
