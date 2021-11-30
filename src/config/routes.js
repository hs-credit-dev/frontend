import { Route, Switch } from 'react-router-dom';
// import { Login, CreditStudioSignUp, Home, StudentSignUp, EducatorSignUp, About, Contact, HowItWorks, RegisterAs, StudentProfile, StudentPlaylist, BasicUserSignUp } from '../components';
import Home from '../pages/Home';
// import Login from '../components/Login';
import BasicUserSignUp from '../pages/BasicUserSignUp';

// import StudentSignUp from '../components/StudentSignUp';

import About from '../pages/About';
import Contact from '../components/Contact';
import HowItWorks from '../components/HowItWorks';

// import StudentProfile from '../components/StudentProfile';
import StudentPlaylist from '../components/StudentPlaylist';
import Browse from '../pages/Browse'
import BasicProfile from '../pages/BasicProfile'


export default (
    <Switch>
        <Route exact path='/' component={Home} />
        {/* <Route exact path='/login' component={Login} />  */}
        <Route exact path='/signup' component={BasicUserSignUp} />
        <Route exact path='/profile' component={BasicProfile} />
        {/* <Route exact path='/studentsignup' component={StudentSignUp} user={currentUser} />  */}

        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/howitworks' component={HowItWorks} />

        <Route exact path='/browse' component={Browse} />
        {/* <Route exact path='/studentprofile' component={StudentProfile} /> */}
        <Route exact path='/studentplaylist' component={StudentPlaylist} />
    </Switch>
)