import { create } from 'zustand';

interface User {
	bio: string;
	city: string;
	credit_admins: string[]; // Assuming credit_admins is an array of strings
	credit_owner: string | null;
	date_joined: string; // Using string since it's an ISO date
	date_of_birth: string; // Using string for the ISO date format
	educator: string | null;
	email: string;
	first_name: string;
	id: string;
	last_login: string | null;
	last_name: string;
	middle_initial: string;
	phone: string;
	state: string;
	street1: string;
	street2: string;
	student: string; // Assuming this is a URL string
	zip: string;
}

type Store = {
	user: User | null;
	setUserInformation: (information: User) => void;
};

const useUserStore = create<Store>()((set) => ({
	user: null,
	setUserInformation: (information: User) => set({ user: information }),
}));

export default useUserStore;