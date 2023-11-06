import axios from 'axios';

const request = axios.create({
	baseURL: 'https://kanban-backend-telg.onrender.com',
});

request.interceptors.request.use(
	config => {
		config.headers['Authorization'] = `Bearer ${localStorage.getItem(
			'token'
		)}`;
		console.log(1)
		return config;
	},
	err => {
		return Promise.reject(err);
	}
);

export {request}
