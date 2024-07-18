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
			});
		},
		changePage(url) {
			axios.get(url).then((result) => {
				this.projects = result.data.projects;
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
		<div v-for="project in projects.data" class="card col-4">
			<ProjectCard :project="project" :url="base_url" />
		</div>
		<nav aria-label="Page navigation">
			<ul class="pagination">
				<li v-for="link in projects.links" class="page-item" :class="{ disabled: !link.url, active: link.active }">
					<a href="#" class="page-link" @click="changePage(link.url)" v-html="link.label"></a>
				</li>
			</ul>
		</nav>
	</div>
</template>

<style scoped></style>
