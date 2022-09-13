import { v4 as uuid } from 'uuid';

export const stake = async (studentId, title, discipline, rubric, teacherEmail) => {
    const creditId = uuid();

    const credit = {
        id: creditId,
        title,
        discipline,
        rubric,
        teacherEmail,
        studentId,
        status: "Staked",
        dateStaked: new Date(),
    };

    let credits = JSON.parse(localStorage.getItem("hsc-credits"));
    if (!credits) credits = {};
    let studentCredits = credits[studentId];
    if (!studentCredits) studentCredits = [];
    studentCredits.push(credit);
    credits[studentId] = studentCredits;
    localStorage.setItem("hsc-credits", JSON.stringify(credits));

    return {
        status: 200,
    };
};

export const getAll = (studentId) => {
    let credits = JSON.parse(localStorage.getItem("hsc-credits"));
    if (!credits) credits = {};
    let studentCredits = credits[studentId];
    if (!studentCredits) studentCredits = [];
    return studentCredits;
};