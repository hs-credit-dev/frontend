import React from 'react'
import { Route} from 'react-router-dom'
const RegisterAs = () => {
    return (
        <div>
            <h1>Register As...</h1>
            <Route path="/studentsignup">Student</Route>
            <Route path="/educatorsignup">Educator</Route>
            <Route path="/creditstudiosignup">Credit Studio</Route>
        </div>
    )
}

export default RegisterAs
