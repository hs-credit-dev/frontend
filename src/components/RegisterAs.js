import React from 'react'
import { Link} from 'react-router-dom'

const RegisterAs = (props) => {



    return (
        <div>
            <h1>Register As...</h1>
            <Link to="/studentsignup">Student</Link><br/>
            <Link to="/educatorsignup">Educator</Link>
            {/* no thanks im a basic user */}
        </div>
    )
}

export default RegisterAs
