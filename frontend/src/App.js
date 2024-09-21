import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AccountPage from './pages/Account';
import SummonerPage from './pages/Summoner';


function App() {
  return (
    <Router>
      <Routes>
        {/* Default route to load LandingPage */}
        <Route path="/" element={<HomePage />} />

        {/* Default route to account testing API page*/}
        <Route path="/account" element={<AccountPage />} />

        {/* Default route to summoner testing API page*/}
        <Route path="/summoner" element={<SummonerPage />} />

      </Routes>
    </Router>
  );
}

export default App;
