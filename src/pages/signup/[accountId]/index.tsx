import React from 'react';
import { useRouter } from 'next/router';

import { useFetchSignupUser } from '../../../hooks/auth';
import Page from '../../../layout/Page';
import { toastError, toastSuccess } from '../../../utils/toast';

import CreditOwnerForm from './CreditOwnerForm';
import StudentForm from './StudentForm';

const RegisterPersonalInfo = () => {
	const { query } = useRouter();

	const {
		data,
		isSuccess: isEmailConfirmSuccess,
		isError: isEmailConfirmError,
	} = useFetchSignupUser(query?.accountId as string);

	if (isEmailConfirmSuccess) {
		toastSuccess('Email confirmed successfully, please complete signup');
	}

	if (isEmailConfirmError) {
		toastError('We have problem with confirming your email, please try again');
	}

	return (
		<Page>{data?.user_type === 'student' ? <StudentForm /> : <CreditOwnerForm />}</Page>
	);
};

export default RegisterPersonalInfo;
