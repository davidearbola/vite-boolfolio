<script>
import axios from "axios";
import ProjectCard from "./components/ProjectCard.vue";

export default {
	name: "App",
	components: {
		ProjectCard,
	},
	data() {
		return {
			base_url: "http://127.0.0.1:8000/",
			projects: [],
		};
	},
	methods: {
		getProjectList() {
			axios.get(`${this.base_url}api/projects`).then((result) => {
				this.projects = result.data.projects;
				console.log(this.projects);
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
		<ProjectCard :elemento="projects.data" :url="base_url" />
	</div>
</template>

<style scoped></style>
