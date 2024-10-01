interface LoginFormInputs {
	email: string;
	password: string;
}

type UserType = 'student' | 'credit-owner';

interface SignupFormValues {
	email: string;
	first_name: string;
	last_name: string;
	confirmEmail: string;
	user_type: UserType;
}

interface RegisterFormValues {
	first_name: string;
	last_name: string;
	middle_initial?: string;
	ceeb_code?: string;
	school_name?: string;
	bio?: string;
	ageConfirmation: boolean;
	password: string;
	confirmPassword?: string;
	dob?: string;
}

interface RegisterPersonalInfoValues {
	firstName: string;
	lastName: string;
	middleInitial?: string;
	organizationName: string;
	code: number;
	ageConfirmation: boolean;
}

export type {
	LoginFormInputs,
	RegisterFormValues,
	RegisterPersonalInfoValues,
	SignupFormValues,
	UserType,
};
