import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./components/views/AppHome";
import AppAbout from "./components/views/AppAbout";
import AppProjects from "./components/views/AppProjects";
import AppContacts from "./components/views/AppContacts";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			name: "home",
			component: AppHome,
		},
		{
			path: "/about",
			name: "about",
			component: AppAbout,
		},
		{
			path: "/projects",
			name: "projects",
			component: AppProjects,
		},
		{
			path: "/contacts",
			name: "contacts",
			component: AppContacts,
		},
	],
});
