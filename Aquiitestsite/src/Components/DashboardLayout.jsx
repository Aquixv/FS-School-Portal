import React from 'react'
import Sidebar from '../Dashboard/Sidebar';
const DashboardLayout = ({ user, children }) => {
  return (
    <div className="flex">
      <Sidebar user={user} />
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout