export const isStudent = (user) => {
    return !!user.studentId;
};

export const isTeacher = (user) => {
    return !!user.teacherId;
};