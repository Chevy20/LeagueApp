import React from 'react';
import LeagueQueueForm from '../components/LeagueQueueForm';
import SummonerIDForm from '../components/SummonerIDForm';
import LeagueByRankForm from '../components/LeagueByRankForm';

const LeaguePage = () => {
    return (
        <div>
            <h1>League API Test Page</h1>
            <div>
                <LeagueQueueForm />
            </div>
            <div>
                <SummonerIDForm />
            </div>
            <div>
                <LeagueByRankForm />
            </div>
        </div>
    );
};

export default LeaguePage;
