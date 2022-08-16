import { writeAtom } from 'jotai-nexus';

import { page, userType } from './SignUp';
import { username, email, password } from './components/SignUpUser';
import { firstName, middleName, lastName, schoolId, schoolName, bio } from './components/SignUpStudent';

// Reset all atomic state in SignUp Page
export const resetState = () => {
    writeAtom(page, 0);
    writeAtom(userType, "");
    writeAtom(username, "");
    writeAtom(email, "");
    writeAtom(password, "");
    writeAtom(firstName, "");
    writeAtom(middleName, "");
    writeAtom(lastName, "");
    writeAtom(schoolId, "");
    writeAtom(schoolName, "");
    writeAtom(bio, "");
}