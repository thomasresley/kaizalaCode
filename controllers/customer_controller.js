const express = require('express');
const router = express.Router();
const customerRepository = require('../domain/customer_repository');
const customerRepo = new customerRepository();

router.post('/customer',async (req, res) => {
	try {
		const result = await customerRepo.createCustomer(req.body);
		return res.json(result);

	} catch (error) {
		return res.json(error);
	}
});


router.get('/customer', async (req, res) => {
	try {
		const result = await customerRepo.getAllCustomers();
		return res.json(result);
	} catch (error) {
		return res.json(error);
	}
});

router.post('/diagnosis',async (req, res) => {
	try {
		const result = await customerRepo.createDiagnosis(req.body);
		return res.json(result);

	} catch (error) {
		return res.json(error);
	}
});

router.get('/diagnosis', async (req, res) => {
	try {
		const result = await customerRepo.getAllDiagnosis();
		return res.json(result);
	} catch (error) {
		return res.json(error);
	}
});

router.get('/customerPhone', async (req, res) => {
	try {
		const result = await customerRepo.getCustomerPhone(req.query.phone);
		return res.json(result);
	} catch (error) {
		return res.json(error);
	}
});


module.exports = router;
