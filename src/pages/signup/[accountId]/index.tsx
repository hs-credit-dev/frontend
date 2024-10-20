import React from 'react';
import { useRouter } from 'next/router';

import { useFetchSignupUser } from '../../../hooks/auth';
import Page from '../../../layout/Page';
import { toastError, toastSuccess } from '../../../utils/toast';

import CreditAdminForm from './CreditAdminForm';
import CreditOwnerForm from './CreditOwnerForm';
import StudentForm from './StudentForm';

type UserType = 'student' | 'credit-owner' | 'credit-admin';

const RegisterPersonalInfo = () => {
	const { query } = useRouter();

	const {
		data,
		isSuccess: isEmailConfirmSuccess,
		isError: isEmailConfirmError,
	} = useFetchSignupUser(query?.accountId as string);

	const formMap = {
		student: <StudentForm />,
		'credit-owner': <CreditOwnerForm />,
		'credit-admin': <CreditAdminForm />,
	};

	if (isEmailConfirmSuccess) {
		toastSuccess('Email confirmed successfully, please complete signup');
	}

	if (isEmailConfirmError) {
		toastError('We have problem with confirming your email, please try again');
	}

	return <Page>{formMap[data?.user_type as UserType]}</Page>;
};

export default RegisterPersonalInfo;
