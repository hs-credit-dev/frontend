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

interface CreditAdmin {
	email: string;
	first_name: string;
	last_name: string;
}

interface Expert {
	email: string;
	first_name: string;
	last_name: string;
}

interface Rubric {
	title: string;
	points: number;
	blurb: string;
	notes: string;
	is_active: boolean;
}

interface Credit {
	name: string;
	discipline: string;
	description: string;
	rubic_version: string;
	stake_text: string;
	pitch_text: string;
	logo: string;
	mint_text: string;
	credit_admins: CreditAdmin[];
	experts: Expert[];
	rubric: Rubric[];
}

export type { Credit, LoginFormInputs, RegisterFormValues, SignupFormValues };
