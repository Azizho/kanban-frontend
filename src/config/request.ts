import axios from 'axios';

const request = axios.create({
    baseURL: 'https://kanban-backend.zeabur.app',
});

request.interceptors.request.use(
	config => {
		config.headers['Authorization'] = `Bearer ${localStorage.getItem(
			'token'
		)}`;
		return config;
	},
	err => {
		return Promise.reject(err);
	}
);

export {request}
