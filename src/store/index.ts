import { create } from 'zustand';

type CreditAdmin = {
	link: string;
	label: string;
};

interface User {
	bio: string;
	city: string;
	credit_admins: CreditAdmin[]; // Assuming credit_admins is an array of strings
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

const useUserStoreHook = () => {
	const isStudent = useUserStore((store) => !!store.user?.student);
	const isCreditOwner = useUserStore((store) => !!store.user?.credit_owner);
	const isEducator = useUserStore((store) => !!store.user?.educator);
	const firstName = useUserStore((store) => store.user?.first_name);
	const lastName = useUserStore((store) => store.user?.last_name);
	const setUserInformation = useUserStore((store) => store.setUserInformation);
	const isAuthorized = () => {
		if (typeof window !== 'undefined') {
			const token = localStorage.getItem('hstoken');
			return !!token;
		}
	};
	const creditAdmins = useUserStore((store) => store.user?.credit_admins);
	const isCreditAdmin = useUserStore((store) => !!store.user?.credit_admins?.length);

	return {
		isStudent,
		isCreditOwner,
		isEducator,
		firstName,
		lastName,
		setUserInformation,
		isAuthorized: isAuthorized(),
		creditAdmins,
		isCreditAdmin,
	};
};

export default useUserStoreHook;
