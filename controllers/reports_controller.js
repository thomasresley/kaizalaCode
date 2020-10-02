const express = require('express');
const router = express.Router();
const reportsRepository = require('../domain/reports_repository');
const reportsRepo = new reportsRepository();

router.post('/reportAccident',async (req, res) => {
    try {
        const result = await reportsRepo.reportAccident(req.body);
        return res.json(result);

    } catch (error) {
        return res.json(error);
    }
});

router.post('/reportIncident', async (req, res) => {
    try {
        const result = await reportsRepo.reportIncident(req.body);
        return res.json(result);
    } catch (error) {
        return res.json(error);
    }
});

router.post('/reportService',async (req, res) => {
    try {
        const result = await reportsRepo.reportService(req.body);
        return res.json(result);

    } catch (error) {
        return res.json(error);
    }
});

router.post('/reportFueling', async (req, res) => {
    try {
        const result = await reportsRepo.reportFueling(req.body);
        return res.json(result);
    } catch (error) {
        return res.json(error);
    }
});

router.get('/incidentReports', async (req, res) => {
    try {
        const result = await reportsRepo.incidentReports();
        return res.json(result);
    } catch (error) {
        return res.json(error);
    }
});

router.get('/fuelReports', async (req, res) => {
    try {
        const result = await reportsRepo.fuelReports();
        return res.json(result);
    } catch (error) {
        return res.json(error);
    }
});

module.exports = router;

