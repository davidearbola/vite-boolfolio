<script>
import Store from "../data/Store";
import MyFunction from "../helpers/Function";
import ProjectCard from "../components/elements/ProjectCard.vue";
import Paginator from "../components/elements/Paginator.vue";

export default {
	name: "AppProjects",
	components: {
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
	<div class="d-flex flex-wrap">
		<div v-for="project in Store.projects.data" class="card col-4">
			<ProjectCard :project="project" :url="Store.base_url" />
		</div>
	</div>
	<Paginator />
</template>

<style scoped></style>
