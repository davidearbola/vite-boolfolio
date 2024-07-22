import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./views/AppHome.vue";
import AppAbout from "./views/AppAbout.vue";
import AppProjects from "./views/AppProjects.vue";
import AppContacts from "./views/AppContacts.vue";
import AppProjectDetail from "./views/AppProjectDetail.vue";
import AppNotFound from "./views/AppNotFound.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			name: "Home",
			component: AppHome,
		},
		{
			path: "/about",
			name: "About",
			component: AppAbout,
		},
		{
			path: "/projects",
			name: "Projects",
			component: AppProjects,
		},
		{
			path: "/projects/:slug",
			name: "ProjectDetail",
			component: AppProjectDetail,
		},
		{
			path: "/contacts",
			name: "Contacts",
			component: AppContacts,
		},
		{
			path: "/:pathMatch(.*)*",
			name: "not-found",
			component: AppNotFound,
		},
		// {
		// 	path: "/not-found",
		// 	name: "not-found",
		// 	component: AppNotFound,
		// },
	],
});

export { router };
