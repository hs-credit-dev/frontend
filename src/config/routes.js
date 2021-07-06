import { Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import CreditStudioSignUp from './components/CreditStudioSignUp'
import Home from './components/Home'
import StudentSignUp from './components/StudentSignUp'
import EducatorSignUp from './components/EducatorSignUp'

export default(
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/credit" component={CreditStudioSignUp}/>
        <Route exact path="/studentsignup" component={StudentSignUp}/>
        <Route exact path="/educatorsignup" component={EducatorSignUp}/>
    </Switch>
)