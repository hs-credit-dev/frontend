import React from 'react';
import { useRouter } from 'next/router';

import { useGetSignup } from '../../../hooks/auth';
import Page from '../../../layout/Page';
import { toastError, toastSuccess } from '../../../utils/toast';

import CreditAdminForm from './CreditAdminForm';
import CreditExpertForm from './CreditExpertForm';
import CreditOwnerForm from './CreditOwnerForm';
import EducatorForm from './EducatorForm';
import StudentForm from './StudentForm';

type UserType = 'student' | 'credit-owner' | 'credit-admin' | 'educator';

const RegisterPersonalInfo = () => {
	const { query } = useRouter();

	const {
		data,
		isSuccess: isEmailConfirmSuccess,
		isError: isEmailConfirmError,
	} = useGetSignup(query?.accountId as string);

	console.log('-data', data);

	const formMap = {
		'credit-owner': <CreditOwnerForm />,
		'credit-admin': <CreditAdminForm />,
		student: <StudentForm />,
		expert: <CreditExpertForm />,
		educator: <EducatorForm />,
	};

	if (isEmailConfirmSuccess) {
		toastSuccess('Email confirmed successfully, please complete signup');
	}

	if (isEmailConfirmError) {
		toastError('We have problem with confirming your email, please try again');
	}

	return <Page isProtected={false}>{formMap[data?.user_type as UserType]}</Page>;
};

export default RegisterPersonalInfo;
