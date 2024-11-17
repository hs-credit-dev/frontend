import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import {
	acceptPitch,
	approveMint,
	approveProject,
	createProject,
	fetchProject,
	fetchProjects,
	studentMint,
	studentPitch,
} from '../api/projects';
import { CACHE_KEY_FETCH_PROJECT, CACHE_KEY_FETCH_PROJECTS } from '../constants';
import { handleAxiosError } from '../utils/errors';

type MediaAsset = File | null;

type FormValues = {
	media_asset: MediaAsset;
};

type MintValues = {
	title: string;
};

type OnSuccessCallback = (message?: string) => void;
type OnErrorCallback = (message?: string) => void;

const useCreateProject = (onSuccess: OnSuccessCallback, onError: OnErrorCallback) => {
	return useMutation({
		mutationFn: createProject,
		onSuccess: () => {
			onSuccess('Educator succesfully invited');
		},
		onError: (error: AxiosError) => {
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

const useApproveProject = (
	projectId: string,
	onSuccess: OnSuccessCallback,
	onError: OnErrorCallback,
) => {
	return useMutation({
		mutationFn: () => approveProject(projectId),
		onSuccess: () => {
			onSuccess('Stake approved');
		},
		onError: (error: AxiosError) => {
			console.log('error', error);
			handleAxiosError(error, onError);
		},
	});
};

const usePitch = (
	projectId: string,
	onSuccess: OnSuccessCallback,
	onError: OnErrorCallback,
) => {
	return useMutation({
		mutationFn: (values: FormValues) => studentPitch(projectId, values),
		onSuccess: () => {
			onSuccess('Pitch successfully sent');
		},
		onError: (error: AxiosError) => {
			console.log('error', error);
			handleAxiosError(error, onError);
		},
	});
};

const useApprovePitch = (
	projectId: string,
	onSuccess: OnSuccessCallback,
	onError: OnErrorCallback,
) => {
	return useMutation({
		mutationFn: (status: boolean) => acceptPitch(projectId, status),
		onSuccess: (res) => {
			onSuccess(
				`Pitch successfully ${res.status === 'pitch-approved' ? 'approved' : 'rejected'}`,
			);
		},
		onError: (error: AxiosError) => {
			console.log('error', error);
			handleAxiosError(error, onError);
		},
	});
};

const useStudentMint = (
	projectiId: string,
	onSuccess: OnSuccessCallback,
	onError: OnErrorCallback,
) => {
	return useMutation({
		mutationFn: (values: MintValues) => studentMint(projectiId, values),
		onSuccess: () => {
			onSuccess('Successfully submited mint!');
		},
		onError: (error: AxiosError) => {
			console.log('error', error);
			handleAxiosError(error, onError);
		},
	});
};

const useApproveMint = (
	projectId: string,
	onSuccess: OnSuccessCallback,
	onError: OnErrorCallback,
) => {
	return useMutation({
		mutationFn: (status: boolean) => approveMint(projectId, status),
		onSuccess: () => {
			onSuccess('Mint successfully approved');
		},
		onError: (error: AxiosError) => {
			console.log('error', error);
			handleAxiosError(error, onError);
		},
	});
};

export {
	useApproveMint,
	useApprovePitch,
	useApproveProject,
	useCreateProject,
	useGetProject,
	useGetProjects,
	usePitch,
	useStudentMint,
};
