import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./views/AppHome.vue";
import AppAbout from "./views/AppAbout.vue";
import AppProjects from "./views/AppProjects.vue";
import AppContacts from "./views/AppContacts.vue";
import AppProjectDetail from "./views/AppProjectDetail.vue";

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
			path: "/projects/:id",
			name: "ProjectDetail",
			component: AppProjectDetail,
		},
		{
			path: "/contacts",
			name: "Contacts",
			component: AppContacts,
		},
	],
});

export { router };
