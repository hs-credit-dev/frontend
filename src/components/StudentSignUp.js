import React from 'react'

const StudentSignUp = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [grade, setGrade] = useState('');
    const [location, setLocation] = useState('');
    const [school, setSchool] = useState('');
    const [userType, setUserType] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
    }

    const handleGrade = (e) => {
        setGrade(e.target.value);
    }

    const handleLocation = (e) => {
        setLocation(e.target.value);
    }

    const handleSchool = (e) => {
        setSchool(e.target.value);
    }

    const handleUserType = (e) => {
        setUserType(e.target.value);
    }

    const handleUserName = (e) => {
        setUserName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // at the beginning of a submit function
        // make sure password and confirm password are equal
        // password length >= 8 characters
        if (password === confirmPassword && password.length >= 8) {
            const newStudentUser = { firstName,lastName,location,school,userType,grade,userName, email, password,  };
            // need proper API for line 65
            axios.post(`${REACT_APP_SERVER_URL}/users/register`, newStudentUser)
            .then(response => {
                console.log('===> Yay, new user');
                console.log(response);
                setRedirect(true);
            })
            .catch(error => console.log('===> Error in Signup', error));
        } else {
            if (password !== confirmPassword) return alert('Passwords don\'t match');
            alert('Password needs to be at least 8 characters. Please try again.');
        }
    }

    if (redirect) return <Redirect to="/login" /> // You can have them redirected to profile (your choice)

    return (
        <div>
            <h1 className="student-signup">Student Sign up</h1>
            <form className="student-signup-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName" >First Name</label>
                    <input type="text" value={firstName} onChange={handleFirstName}></input>
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" value={lastName} onChange={handleLastName}></input>
                </div>
                <div>
                    <label>Username</label>
                    <input type="text" value={userName} onChange={handleUserName}></input>
                </div>
                <div>
                    <label>Location</label>
                    <input type="text" value={location} onChange={handleLocation}></input>
                </div>
                <div>
                    <label>School</label>
                    <input type="text" value={school} onChange={handleSchool}></input>
                </div>
                <div>
                    <label>Grade</label>
                    <input type="text" value={grade} onChange={handleGrade}></input>
                </div>
                <div>
                    <label>User Type</label>
                    <input type="select" value={userType} onChange={handleUserType}></input>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={email} onChange={handleEmail}></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" value={password} onChange={handlePassword}></input>
                </div>
                <div>
                    <label htmlFor="confirmPassword" >Confirm password</label>
                    <input type="password" value={confirmPassword} onChange={handleConfirmPassword}></input>
                </div>
                <button value="submit">Sign Up!</button>

            </form>
        </div>
    )
}

export default StudentSignUp
