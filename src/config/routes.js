import { Route, Switch } from 'react-router-dom';

//components

import Home from '../pages/Home';
import BasicUserSignUp from '../pages/BasicUserSignUp';
import About from '../pages/About';
import Contact from '../components/Contact';
import HowItWorks from '../components/HowItWorks';
import StudentPlaylist from '../components/StudentPlaylist';
import Browse from '../pages/Browse'
import Profile from '../pages/Profile'
import CreditDetails from '../pages/CreditDetails'
// import Login from '../components/Login';



export default (
        <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/signup' component={BasicUserSignUp} />
                <Route exact path='/credit-details' component={CreditDetails} />
                <Route exact path='/profile' component={Profile} />
                <Route exact path='/about' component={About} />

                <Route exact path='/contact' component={Contact} />
                <Route exact path='/howitworks' component={HowItWorks} />
                <Route exact path='/browse' component={Browse} />
                <Route exact path='/studentplaylist' component={StudentPlaylist} />
                {/* <Route exact path='/login' component={Login} />  */}
        </Switch>
)