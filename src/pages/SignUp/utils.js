import { writeAtom } from 'jotai-nexus';

import { page, userType } from '.';
import { username, email, password } from './components/SignUpUser';

// Reset all atomic state in SignUp Page
export const resetState = () => {
    writeAtom(page, 0);
    writeAtom(userType, "");
    writeAtom(username, "");
    writeAtom(email, "");
    writeAtom(password, "");
}