import { Route, Switch } from 'react-router-dom';
// import { Login, CreditStudioSignUp, Home, StudentSignUp, EducatorSignUp, About, Contact, HowItWorks, RegisterAs, StudentProfile, StudentPlaylist, BasicUserSignUp } from '../components';
import Home from '../components/Home';
// import Login from '../components/Login';
import BasicUserSignUp from '../components/BasicUserSignUp';
import CreditStudioSignUp from '../components/CreditStudioSignUp';
// import StudentSignUp from '../components/StudentSignUp';
import EducatorSignUp from '../components/EducatorSignUp';
import About from '../components/About';
import Contact from '../components/Contact';
import HowItWorks from '../components/HowItWorks';
import RegisterAs from '../components/RegisterAs';
// import StudentProfile from '../components/StudentProfile';
import StudentPlaylist from '../components/StudentPlaylist';
import Browse from '../components/Browse'


export default(
        <Switch>
            <Route exact path='/' component={Home} />
             {/* <Route exact path='/login' component={Login} />  */}
            <Route exact path='/signup' component={ BasicUserSignUp } />
            <Route exact path='/credit' component={CreditStudioSignUp} />
            {/* <Route exact path='/studentsignup' component={StudentSignUp} user={currentUser} />  */}
            <Route exact path='/educatorsignup' component={EducatorSignUp} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/howitworks' component={HowItWorks} />
            <Route exact path='/registeras' component={RegisterAs} />
            <Route exact path='/browse' component={Browse}/>
            {/* <Route exact path='/studentprofile' component={StudentProfile} /> */}
            <Route exact path='/studentplaylist' component={StudentPlaylist} />
        </Switch>
)