import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AccountPage from './pages/Account';
import SummonerPage from './pages/Summoner';
import ChampionPage from './pages/Champion';
import ChampionMasteryPage from './pages/ChampionMastery';
import ClashPage from './pages/Clash';
import LeaguePage from './pages/League';
import LeagueExpPage from './pages/LeagueEXP';
import LolChallengesPage from './pages/LolChallenges';
import LolStatusPage from './pages/LolStatus';
import MatchPage from './pages/Match';
import SpectatorPage from './pages/Spectator';



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

        {/* Default route to champion testing API page*/}
        <Route path="/champion" element={<ChampionPage />} />

        {/* Default route to league testing API page*/}
        <Route path="/league" element={<LeaguePage />} />

        {/* Default route to league-exp testing API page*/}
        <Route path="/league-exp" element={<LeagueExpPage />} />

        {/* Default route to clash testing API page*/}
        <Route path="/clash" element={<ClashPage />} />

        {/* Default route to lol-status testing API page*/}
        <Route path="/lol-status" element={<LolStatusPage />} />

        {/* Default route to match testing API page*/}
        <Route path="/match" element={<MatchPage />} />

        {/* Default route to lol-challenges testing API page*/}
        <Route path="/lol-challenges" element={<LolChallengesPage />} />

        {/* Default route to champion-mastery testing API page*/}
        <Route path="/champion-mastery" element={<ChampionMasteryPage />} />

        {/* Default route to spectator testing API page*/}
        <Route path="/spectator" element={<SpectatorPage />} />


      </Routes>
    </Router>
  );
}

export default App;
