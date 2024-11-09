import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';

import { fetchUserInformation } from '../../../api/users';
import { handleAxiosError } from '../../../utils/errors';
import { toastError, toastSuccess } from '../../../utils/toast';
import { login } from '../api';

export const useLogin = () => {
	const { push } = useRouter();

	return useMutation({
		mutationFn: login,
		onSuccess: (response) => {
			localStorage.setItem('hstoken', response.token);

			fetchUserInformation()
				.then((res) => {
					console.log('res', res);
					toastSuccess('Login Successful!');
					setTimeout(() => {
						if (!!res.student) {
							push('/dashboard/student');
						} else if (!!res.credit_owner) {
							push('/dashboard/creditowner');
						} else if (!!res.credit_admins.length) {
							push('/dashboard/creditadmin');
						} else {
							push('/dashboard/staff/students');
						}
					}, 1000);
				})
				.catch((err) => {
					console.log(err);
				});
		},
		onError: (error: AxiosError) => {
			handleAxiosError(error, toastError);
		},
	});
};
