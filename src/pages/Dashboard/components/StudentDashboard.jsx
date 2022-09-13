import React from 'react';

import Banner from './DashBoardBanner/index.jsx';
import DashboardContent from './DashboardContent.jsx';

const StudentDashboard = () => {
  return (
    <div className='mx-auto w-11/12 flex flex-col gap-4 my-4'>
      <Banner />
      <DashboardContent />
    </div>
  )
};

export default StudentDashboard;
