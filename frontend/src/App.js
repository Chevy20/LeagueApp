import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AccountPage from './pages/Account';

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route to load LandingPage */}
        <Route path="/" element={<LandingPage />} />

        {/* Define other routes */}
        <Route path="/account" element={<AccountPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
