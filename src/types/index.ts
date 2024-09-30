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

interface CreditResponse {
	code: string;
	created_at: string;
	description: string;
	discipline: string;
	id: string;
	logo: string;
	mint_text: string;
	name: string;
	pitch_text: string;
	rubric: string[];
	rubric_version: string;
	stake_text: string;
	status: string;
	updated_at: string;
}

export type { CreditResponse, LoginFormInputs, RegisterFormValues, SignupFormValues };
