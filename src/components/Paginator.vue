<script>
import axios from "axios";
import Store from "../data/store";
export default {
	name: "Paginator",
	data() {
		return {
			Store,
		};
	},
	methods: {
		changePage(url) {
			axios.get(url).then((result) => {
				Store.projects = result.data.projects;
			});
		},
	},
};
</script>

<template>
	<nav aria-label="Page navigation">
		<ul class="pagination">
			<li v-for="link in Store.projects.links" class="page-item" :class="{ disabled: !link.url, active: link.active }">
				<a href="#" class="page-link" @click="changePage(link.url)" v-html="link.label"></a>
			</li>
		</ul>
	</nav>
</template>

<style scoped></style>
