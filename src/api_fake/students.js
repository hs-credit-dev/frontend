import { v4 as uuid } from 'uuid';

export const create = async (username, email, password, firstName, lastName, dob, schoolName, ceebCode, bio) => {
    const userId = uuid();
    const studentId = uuid();
    const user = {
        username,
        email,
        password,
        firstName,
        lastName,
        isAdmin: false,
        isVerified: false,
        id: userId,
        studentId: studentId,
        teacherId: undefined,
    }

    const student = {
        id: studentId,
        dob,
        schoolName,
        ceebCode,
        bio,
        coinBalance: 0,
        narrative: "",
    };

    let users = JSON.parse(localStorage.getItem("hsc-users"));
    if (!users) users = {};
    users[userId] = user;
    localStorage.setItem("hsc-users", JSON.stringify(users));

    let students = JSON.parse(localStorage.getItem("hsc-students"));
    if (!students) students = {};
    students[studentId] = student;
    localStorage.setItem("hsc-students", JSON.stringify(students));

    return {
        status: 200,
    };
};

/**
 * 
 * @param {Number} id 
 * @returns 
 */
export const get = async (id) => {
    let students = JSON.parse(localStorage.getItem("hsc-students"));
    if (!students) students = {};
    const student = students[id];
    return {
        data: {
            data: {
                student,
            }
        }
    };
};

export const isStudent = (user) => {
    return !!user.studentId;
};

export const update = async (student) => {
    let students = JSON.parse(localStorage.getItem("hsc-students"));
    if (!students) students = {};
    students[student.id] = student;
    localStorage.setItem("hsc-students", JSON.stringify(students));
};