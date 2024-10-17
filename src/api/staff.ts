import axios from 'axios';

import { CreditOwner } from '../types';

const getCreditOwners = async (): Promise<CreditOwner[]> => {
	const { data } = await axios.get<CreditOwner[]>(
		'https://api.hs.credit/api/credit_owners/',
	);
	return data;
};

export { getCreditOwners };
