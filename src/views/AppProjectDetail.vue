<script>
import axios from "axios";
import Store from "../data/Store";
export default {
	name: "AppProjectDetail",
	components: {},
	data() {
		return {
			Store,
			project: null,
		};
	},
	methods: {},
	created() {
		axios.get(`${Store.base_url}api/projects/${this.$route.params.slug}`).then((response) => {
			if (response.data.success) {
				this.project = response.data.project;
			} else {
				this.$router.push({ name: "not-found" });
			}
		});
	},
};
</script>

<template>
	<div v-if="project" class="row">
		<div class="col 3">
			<template v-if="!project.thumb_path.startsWith('http')">
				<img class="w-100" :src="Store.base_url + 'storage/' + project.thumb_path" />
			</template>
			<template v-else>
				<img class="w-100" :src="project.thumb_path" />
			</template>
		</div>
		<div class="col-9">
			<h3>{{ project.name }}</h3>
			<p>{{ project.description }}</p>
			<p>
				Linguaggi utilizzati:
				<i v-for="language in project.languages" :class="language.icon"></i>
			</p>
			<p>Type: {{ project.type.name }}</p>
		</div>
	</div>
</template>

<style scoped></style>
