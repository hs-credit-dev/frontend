import { v4 as uuid } from 'uuid';

export const create = async (username, email, password, firstName, lastName, ceebCode, schoolName, schoolWebsite, bio) => {
    const userId = uuid();
    const teacherId = uuid();
    const user = {
        username,
        email,
        password,
        firstName,
        lastName,
        isAdmin: false,
        isVerified: false,
        id: userId,
        studentId: undefined,
        teacherId: teacherId,
    }

    const teacher = {
        id: teacherId,
        ceebCode,
        schoolName,
        schoolWebsite,
        bio,
    };

    let users = JSON.parse(localStorage.getItem("hsc-users"));
    if (!users) users = {};
    users[userId] = user;
    localStorage.setItem("hsc-users", JSON.stringify(users));

    let teachers = JSON.parse(localStorage.getItem("hsc-teachers"));
    if (!teachers) teachers = {};
    teachers[teacherId] = teacher;
    localStorage.setItem("hsc-teachers", JSON.stringify(teachers));

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
    let teachers = JSON.parse(localStorage.getItem("hsc-teachers"));
    if (!teachers) teachers = {};
    const teacher = teachers[id];
    return {
        data: {
            data: {
                teacher,
            }
        }
    };
};

export const isTeacher = (user) => {
    return !!user.teacherId;
};