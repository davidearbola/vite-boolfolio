import { reactive } from "vue";

const myData = reactive({
	base_url: "http://127.0.0.1:8000/",
	projects: [],
	menuLink: ["Home", "About", "Projects", "Contacts"],
});

export default myData;
