<script>
import MyFunction from "../../helpers/Function";
import Store from "../../data/Store";
export default {
	name: "Paginator",
	data() {
		return {
			Store,
			MyFunction,
		};
	},
	methods: {},
};
</script>

<template>
	<nav aria-label="Page navigation">
		<ul class="pagination">
			<li v-for="link in Store.projects.links" class="page-item" :class="{ disabled: !link.url, active: link.active }">
				<a href="#" class="page-link" @click="MyFunction.changePage(link.url)" v-html="link.label"></a>
			</li>
		</ul>
	</nav>
</template>

<style scoped></style>
