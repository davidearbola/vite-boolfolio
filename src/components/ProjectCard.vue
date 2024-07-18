<script>
export default {
	name: "ProjectCard",
	props: ["elemento", "url"],
};
</script>

<template>
	<div v-for="project in elemento" class="card col-4">
		<template v-if="!project.thumb_path.startsWith('http')">
			<img class="card-img-top" :src="url + 'storage/' + project.thumb_path" />
		</template>
		<template v-else>
			<img class="card-img-top" :src="project.thumb_path" />
		</template>
		<div class="card-body">
			<h4 class="card-title">{{ project.name }}</h4>
			<p class="card-text">{{ project.description }}</p>
			<p>Linguaggi Utilizzati:</p>
			<i v-for="language in project.languages" :class="language.icon" class="me-2"></i>
			<p>Tipo di progetto:</p>
			<p>{{ project.type.name }}</p>
		</div>
	</div>
</template>

<style scoped></style>
