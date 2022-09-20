import { v4 as uuid } from 'uuid';

export const stake = async (studentId, discipline, contentStaked, teacherEmail) => {
    const creditId = uuid();

    const credit = {
        id: creditId,
        discipline,
        contentStaked,
        teacherEmail,
        studentId,
        status: "Staked - Pending",
        dateStaked: new Date(),
        checkpoints: [],
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

export const get = (studentId, id) => {
    let credits = JSON.parse(localStorage.getItem("hsc-credits"));
    if (!credits) credits = {};
    const studentCredits = credits[studentId];

    for (let credit of studentCredits) {
        if (credit.id === id) {
            return credit;
        }
    }

    return null;
};

export const update = async (studentId, creditId, properties) => {
    let credits = JSON.parse(localStorage.getItem("hsc-credits"));
    if (!credits) credits = {};
    const studentCredits = credits[studentId];

    let i = 0
    for (; i < studentCredits.length; i++) {
        if (studentCredits[i].id === creditId) {
            for (const [key, value] of Object.entries(properties)) {
                studentCredits[i][key] = value;
            }

            break;
        }
    }

    if (i === studentCredits.length) {
        await stake(studentId, properties.discipline, properties.contentStaked, properties.teacherEmail);
    }

    credits[studentId] = studentCredits;
    localStorage.setItem("hsc-credits", JSON.stringify(credits));
};

export const addCheckpoint = async (studentId, creditId, checkpoint) => {
    let credits = JSON.parse(localStorage.getItem("hsc-credits"));
    if (!credits) credits = {};
    const studentCredits = credits[studentId];

    const credit = studentCredits.find(c => c.id === creditId);
    if (!credit) return;

    credit.checkpoints.push(checkpoint);
    localStorage.setItem("hsc-credits", JSON.stringify(credits));
};

export const pitch = async (studentId, creditId) => {
    let credits = JSON.parse(localStorage.getItem("hsc-credits"));
    if (!credits) credits = {};
    const studentCredits = credits[studentId];

    const credit = studentCredits.find(c => c.id === creditId);
    if (!credit) return;

    credit.status = 'Pitched';
    localStorage.setItem("hsc-credits", JSON.stringify(credits));
};