interface LoginFormInputs {
	email: string;
	password: string;
}

interface SignupFormValues {
	email: string;
	first_name: string;
	last_name: string;
	confirmEmail: string;
}

interface RegisterFormValues {
	first_name: string;
	last_name: string;
	middle_initial?: string;
	ceeb_code: string;
	school_name: string;
	bio: string;
	ageConfirmation: boolean;
	password: string;
	confirmPassword: string;
	dob: string;
}

export type { LoginFormInputs, RegisterFormValues, SignupFormValues };
