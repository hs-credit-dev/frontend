import { Switch, Route} from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/Login'
// import SignUp from '../components/RegisterAs'
import CreditStudioSignUp from '../components/CreditStudioSignUp'
import StudentSignUp from '../components/StudentSignUp'
import EducatorSignUp from '../components/EducatorSignUp'
// import About from '../components/About'
import Contact from '../components/Contact'
import HowItWorks from '../components/HowItWorks'

export default(
    <Switch>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/login" component={ Login }/>
        {/* <Route exact path="/signup" component={SignUp}/> */}
        <Route exact path="/credit" component={ CreditStudioSignUp }/>
        <Route exact path="/studentsignup" component={ StudentSignUp }/>
        <Route exact path="/educatorsignup" component={ EducatorSignUp }/>
        {/* <Route exact path="/about" component={About}/> */}
        <Route exact path="/contact" component={ Contact }/>
        {/* <Route exact path="/howitworks" component={HowItWorks}/> */}
    </Switch>
)