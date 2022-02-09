import { Route, Switch } from 'react-router-dom';

//components

import About from '../pages/About';
import Contact from '../components/Contact';
import HowItWorks from '../components/HowItWorks';
import StudentPlaylist from '../components/StudentPlaylist';
import Explore from '../pages/Explore';
import Profile from '../pages/Profile';
// import Login from '../components/Login';



export default (
    <Switch>
        <Route exact path='/howitworks' component={ HowItWorks } />
        <Route exact path='/studentplaylist' component={ StudentPlaylist } />
        {/* <Route exact path='/educators/franklin-johnson' component={ EducatorProfile } /> */}
        {/* <Route exact path='/login' component={Login} />  */}
    </Switch>
)