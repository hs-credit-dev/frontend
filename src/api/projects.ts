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

type MediaAsset = File | null;

type FormValues = {
	media_asset: MediaAsset;
};

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

const approveProject = async (projectId: string) => {
	const { data } = await axios.post(`/api/projects/${projectId}/approve_stake/`);
	return data;
};

const studentPitch = async (projectId: string, values: FormValues) => {
	const { data } = await axios.post(`/api/projects/${projectId}/pitch/`, values);
	return data;
};

const acceptPitch = async (projectId: string, status: boolean) => {
	const { data } = await axios.post(`/api/projects/${projectId}/approve_pitch/`, {
		approved: status,
	});
	return data;
};

export {
	acceptPitch,
	approveProject,
	createProject,
	fetchProject,
	fetchProjects,
	studentPitch,
};
