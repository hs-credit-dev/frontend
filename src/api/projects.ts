import axios from '../utils/axios';

interface CreateProject {
	credit: string;
	title: string;
	educator: {
		first_name: string;
		last_name: string;
		email: string;
	};
}

const createProject = async (values: CreateProject) => {
	const { data } = await axios.post('/api/projects/', values);
	return data;
};

const fetchProjects = async (page: number) => {
	const { data } = await axios.get('/api/projects/?page=' + page);
	return data;
};

const fetchProject = async (projectId: string) => {
	const { data } = await axios.get(`/api/projects/${projectId}/`);
	return data;
};

const aproveProject = async (projectId: string) => {
	const { data } = await axios.post(`/api/projects/${projectId}/approve_stake/`);
	return data;
};

export { aproveProject, createProject, fetchProject, fetchProjects };
