import React from 'react'
import { Route, Link} from 'react-router-dom'
const RegisterAs = () => {
    return (
        <div>
            <h1>Register As...</h1>
            <Link to="/studentsignup">Student</Link>
            <br/>
            <Link path="/educatorsignup">Educator</Link>
            {/* no thanks im a basic user */}
        </div>
    )
}

export default RegisterAs
