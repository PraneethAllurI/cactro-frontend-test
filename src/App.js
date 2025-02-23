// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/navbar';
import Dashboard from './components/dashboard';

function App() {

  return (
    <Router>
      <Navbar />
      <div className="pt-16">
        {/* Routes for each section */}
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<div>Projects Content</div>} />
          <Route path="/team" element={<div>Team Content</div>} />
          <Route path="/clients" element={<div>Clients Content</div>} />
          <Route path="/time" element={<div>Time Content</div>} />
          <Route path="/reports" element={<div>Reports Content</div>} />
          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
