<script>
import axios from "axios";
import Store from "../data/Store";
import ProjectCard from "../components/elements/ProjectCard.vue";
export default {
	name: "AppHome",
	components: {
		ProjectCard,
	},
	data() {
		return {
			Store,
			latestProjects: null,
		};
	},
	methods: {},
	mounted() {
		axios.get(`${Store.base_url}api/projects/latest`).then((response) => {
			this.latestProjects = response.data.projects;
		});
	},
};
</script>

<template>
	<div v-if="latestProjects" class="d-flex flex-wrap">
		<div v-for="project in latestProjects" class="card col-4">
			<ProjectCard :project="project" :url="Store.base_url" />
		</div>
	</div>
</template>

<style scoped></style>
