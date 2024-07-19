import axios from "axios";
import Store from "../data/Store";

const MyFunction = {
	getProjectList() {
		axios.get(`${Store.base_url}api/projects`).then((result) => {
			Store.projects = result.data.projects;
			console.log(Store.projects);
		});
	},
	changePage(url) {
		axios.get(url).then((result) => {
			Store.projects = result.data.projects;
		});
	},
};

export default MyFunction;
