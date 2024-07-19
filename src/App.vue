<script>
import axios from "axios";
import Store from "./data/store";
import Paginator from "./components/Paginator.vue";
import ProjectCard from "./components/ProjectCard.vue";

export default {
	name: "App",
	components: {
		ProjectCard,
		Paginator,
	},
	data() {
		return {
			Store,
		};
	},
	methods: {
		getProjectList() {
			axios.get(`${Store.base_url}api/projects`).then((result) => {
				Store.projects = result.data.projects;
				console.log(Store.projects);
			});
		},
	},
	mounted() {
		this.getProjectList();
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
