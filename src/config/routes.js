import {Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import StudentSignUp from './components/StudentSignUp'

export default(
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/studentsignup" component={StudentSignUp}/>
    </Switch>
)