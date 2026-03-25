import React from 'react'

    const Dashboard = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar - Fixed on the left */}
      <aside className="w-64 bg-indigo-900 text-white p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-10">Edusity Portal</h2>
        <nav className="space-y-4">
          <div className="hover:bg-indigo-800 p-3 rounded cursor-pointer">Dashboard</div>
          <div className="hover:bg-indigo-800 p-3 rounded cursor-pointer">My Courses</div>
          <div className="hover:bg-indigo-800 p-3 rounded cursor-pointer">Grades</div>
          <div className="hover:bg-indigo-800 p-3 rounded cursor-pointer">Fees</div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-semibold">Student Overview</h1>
            <div className="flex items-center gap-4">
                <span>Alex Johnson</span>
                <div className="w-10 h-10 bg-indigo-200 rounded-full"></div>
            </div>
        </header>
        {children}
      </main>
    </div>
  );
};

export default Dashboard