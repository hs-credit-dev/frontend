import { Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import CreditStudioSignUp from './components/CreditStudioSignUp'
import Home from './components/Home'
import StudentSignUp from './components/StudentSignUp'
import EducatorSignUp from './components/EducatorSignUp'
import About from './compoments/About'
import Contact from './compoments/Contact'
import HowItWorks from './compoments/HowItWorks'
import RegisterAs from './compomonents/RegisterAs'
import StudentMenu from './components/StudentMenu'
import StudentProfile from './components/StudentProfile'
import StudentPlaylist from './components/StudentPlaylist'

export default(
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/credit" component={CreditStudioSignUp}/>
        <Route exact path="/studentsignup" component={StudentSignUp}/>
        <Route exact path="/educatorsignup" component={EducatorSignUp}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/howitworks" component={HowItWorks}/>
        <Route exact path="/signup" component={RegisterAs}/>
        <Route exact path="/studentmenu" component={StudentMenu}/>
        <Route exact path="/studentprofile" component={StudentProfile}/>
        <Route exact path="/studentplaylist" component={StudentPlaylist}/>
    </Switch>
)