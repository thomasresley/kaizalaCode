const express = require('express');
const router = express.Router();
const companyRepository = require('../domain/company_repository');
const companyRepo = new companyRepository();

router.post('/registerDriver',async (req, res) => {
    try {
        const result = await companyRepo.registerDriver(req.body);
        return res.json(result);

    } catch (error) {
        return res.json(error);
    }
});

router.post('/registerVehicle', async (req, res) => {
    try {
        const result = await companyRepo.registerVehicle(req.body);
        return res.json(result);
    } catch (error) {
        return res.json(error);
    }
});

router.post('/startTrip', async (req, res) => {
    try {
        req.body.phone = req.body.phone.substring(1);
        const result = await companyRepo.startTrip(req.body);
        return res.json(result);
    } catch (error) {
        return res.json(error);
    }
});

router.get('/getVehicleByReg', async (req, res) => {
    try {
        const result = await companyRepo.getVehicleByReg(req.query.registration);
        return result ? res.json(result) : res.status(400).json();
    } catch (error) {
        return res.json(error);
    }
});

router.get('/getAllTrips', async (req, res) => {
    try {
        const result = await companyRepo.getAllTrips();
        return res.json(result);
    } catch (error) {
        return res.json(error);
    }
});

router.get('/getActiveTripByDriver', async (req, res) => {
    try {
        const result = await companyRepo.getActiveTripByDriver(req.query.phone);
        return result ? res.json(result) : res.status(400).json();
    } catch (error) {
        return res.json(error);
    }
});

router.put('/updateTrip', async (req, res) => {
    try {
        const phone = req.body.phone.substring(1);
        req.body.phone = phone;
        const result = await companyRepo.updateTrip(req.body, phone);
        return res.json(result);
    } catch (error) {
        return res.json(error);
    }
});

module.exports = router;

