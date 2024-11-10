import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import {
	aproveProject,
	createProject,
	fetchProject,
	fetchProjects,
} from '../api/projects';
import { CACHE_KEY_FETCH_PROJECT, CACHE_KEY_FETCH_PROJECTS } from '../constants';
import { handleAxiosError } from '../utils/errors';

type OnSuccessCallback = (message?: string) => void;
type OnErrorCallback = (message?: string) => void;

const useCreateProject = (onSuccess: OnSuccessCallback, onError: OnErrorCallback) => {
	return useMutation({
		mutationFn: createProject,
		onSuccess: (response) => {
			console.log('response', response);
			onSuccess('Educator succesfully invited');
		},
		onError: (error: AxiosError) => {
			console.log('error', error);
			handleAxiosError(error, onError);
		},
	});
};

const useGetProjects = (page: number) => {
	return useQuery({
		queryKey: [CACHE_KEY_FETCH_PROJECTS, page],
		queryFn: () => fetchProjects(page),
		staleTime: 1_000 * 60 * 60,
		enabled: !!page,
		retry: false,
	});
};

const useGetProject = (projectId: string) => {
	return useQuery({
		queryKey: [CACHE_KEY_FETCH_PROJECT, projectId],
		queryFn: () => fetchProject(projectId),
		staleTime: 1_000 * 60 * 60,
		enabled: !!projectId,
		retry: false,
	});
};

const useAproveProject = (
	projectId: string,
	onSuccess: OnSuccessCallback,
	onError: OnErrorCallback,
) => {
	return useMutation({
		mutationFn: () => aproveProject(projectId),
		onSuccess: () => {
			onSuccess('Stake approved');
		},
		onError: (error: AxiosError) => {
			console.log('error', error);
			handleAxiosError(error, onError);
		},
	});
};

export { useAproveProject, useCreateProject, useGetProject, useGetProjects };
