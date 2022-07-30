import React, { } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/App.css';

import NotFound from './pages/NotFound';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="app">
      <Router>
        <div className='mainAppContainer'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            {/* <Route exact path='/basic-signup' element={<BasicUserSignUp />} />
          <Route exact path='/student-signup' element={<StudentSignUp />} />
          <Route exact path='/profile' element={<Profile />} user={currentUser} />
          <Route exact path='/explore' element={<Explore />} />
          <Route exact path='/credit-search' element={<CreditSearch />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />

          <Route exact path='/teacher-signup' element={<TeacherSignUp />} />

          <Route exact path='/username/credits/the-revolutionary-war' element={<CreditDetails />} />
          <Route exact path='/howitworks' element={<HowItWorks />} />
          <Route exact path='/studentplaylist' element={<StudentPlaylist />} />
          <Route
            exact path='/login'
            render={(props) =>
              <Login {...props} nowCurrentUser={nowCurrentUser} setIsAuthenticated={setIsAuthenticated} user={currentUser} />} />
          <Route exact path='/studentprofile' element={<StudentProfile />} user={currentUser} handleLogout={handleLogout} /> */}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
