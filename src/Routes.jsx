import { Routes as ReactRoutes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import Verification from './pages/Verification';
import Stake from './pages/Stake';
import Mint from './pages/Mint';
import CreditPage from './pages/Credit';
import NotFound from './pages/NotFound';

const Routes = () => {
    return <ReactRoutes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/verify" element={<Verification />} />
        <Route exact path="/stake" element={<Stake />} />
        <Route exact path="/mint" element={<Mint />} />
        <Route exact path="/credit" element={<CreditPage />} />
        <Route path="*" element={<NotFound />} />
    </ReactRoutes>;
};

export default Routes;