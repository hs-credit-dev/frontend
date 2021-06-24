import {Switch, Route} from 'react-router-dom'
import Login from './components/Login'

export default(
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={SignUp}/>
    </Switch>
)