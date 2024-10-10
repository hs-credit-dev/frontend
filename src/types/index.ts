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
	user_type?: UserType;
}

interface CompleteSignupFormBaseValues {
	first_name: string;
	last_name: string;
	middle_initial: string;
	password: string;
	confirm_password: string;
	age_confirmation: boolean;
	ceeb_code: string;
}

interface CompleteSignupFormStudentValues extends CompleteSignupFormBaseValues {
	school_name: string;
	bio: string;
	dob: string;
}

interface CompleteSignupFormCreditOwnerValues extends CompleteSignupFormBaseValues {
	logo: File;
	organization: string;
}

interface CompleteSignupFormCreditAdminValues {
	first_name: string;
	last_name: string;
	password: string;
	confirm_password: string;
}

interface RegisterPersonalInfoValues {
	firstName: string;
	lastName: string;
	middleInitial?: string;
	organizationName: string;
	code: number;
	ageConfirmation: boolean;
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

type Admin = {
	first_name: string;
	last_name: string;
	email: string;
	status?: string;
};

interface CreditAdmins {
	credit_admins: Admin[];
}

export type {
	Admin,
	CompleteSignupFormBaseValues,
	CompleteSignupFormCreditAdminValues,
	CompleteSignupFormCreditOwnerValues,
	CompleteSignupFormStudentValues,
	CreditAdmins,
	CreditResponse,
	LoginFormInputs,
	RegisterPersonalInfoValues,
	SignupFormValues,
	UserType,
};
