import { useMutation } from '@tanstack/react-query';

import {
	CompleteSignupFormCreditAdminValues,
	CompleteSignupFormExpertValues,
	CompleteSignupFormStudentValues,
} from '../../../types';
import { completeSignup } from '../api';

type OnSuccessCallback = () => void;
type OnErrorCallback = (message?: string) => void;

export const useCompleteSignup = (
	accountId: string,
	onSuccess: OnSuccessCallback,
	onError: OnErrorCallback,
) => {
	return useMutation({
		mutationFn: (
			values:
				| FormData
				| CompleteSignupFormStudentValues
				| CompleteSignupFormCreditAdminValues
				| CompleteSignupFormExpertValues,
		) => completeSignup(accountId, values),
		onSuccess: () => {
			onSuccess();
		},
		onError: () => {
			onError();
		},
	});
};
