/**
 * 
 * @param {*} username account username (or email)  
 * @param {*} password account password
 */
export const login = async (username, password) => {
    let users = JSON.parse(localStorage.getItem("hsc-users"));
    if (!users) users = {};
    const user = Object.values(users).find(u => u.username === username && u.password === password);
    localStorage.setItem("hsc-session", JSON.stringify(user));
    return {
        data: {
            data: {
                user,
            }
        }
    };
};

export const logout = async () => {
    localStorage.removeItem("hsc-session");
};

export const getUserInSession = async () => {
    const user = JSON.parse(localStorage.getItem("hsc-session"));

    if (!user) return {
        data: {
        }
    };

    return {
        data: {
            data: {
                ...user,
            }
        }
    };
};

export const verify = async (id, password) => {
    let users = JSON.parse(localStorage.getItem("hsc-users"));
    if (!users) users = {};
    const user = Object.values(users).find(u => u.id === id && u.password === password);
    user.isVerified = true;
    localStorage.setItem("hsc-users", JSON.stringify(users));
};