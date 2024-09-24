const express = require('express');
const router = express.Router();
const leagueController = require('../controllers/leagueController');

//Route to map getChallangerLeaguesByQueue function to internal api
router.get('/challengerleagues/by-queue/:queue', leagueController.getChallangerLeaguesByQueue);

//Route to map getGrandmasterLeaguesByQueue function to internal api
router.get('/grandmasterleagues/by-queue/:queue', leagueController.getGrandmasterLeaguesByQueue);

//Route to map getMasterLeaguesByQueue function to internal api
router.get('/masterleagues/by-queue/:queue', leagueController.getMasterLeaguesByQueue);

//Route to map getLeaguesBySummoner function to internal api
router.get('/by-summoner/:summonerID', leagueController.getLeaguesBySummoner);

// Route to map getLeaguesByRank function to internal api with optional page parameter
router.get('/entries/:queue/:tier/:division/:page?', leagueController.getLeaguesByRank);

// Route to map getLeaguesByID function to internal api with optional
router.get('/leagues/:leagueID', leagueController.getLeaguesByID);

module.exports = router;
