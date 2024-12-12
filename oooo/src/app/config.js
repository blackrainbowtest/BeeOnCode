import axios from "axios";

const createAxios = (basePath) => {
	return axios.create({
		baseURL: `http://localhost:3000/${basePath}`
	})
}

export const userAPI = createAxios('users');