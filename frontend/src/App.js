import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import RiotIdPage from './pages/RiotIdPage';  // Import other pages

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route to load LandingPage */}
        <Route path="/" element={<LandingPage />} />

        {/* Define other routes */}
        <Route path="/riot-id" element={<RiotIdPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
