const models = require('../datasource/models');
const customer = models.customer;
const diagnosis = models.diagnosis;

module.exports = class customerRepository {
	async createCustomer(user) {
		try {
			return await customer.create(user)
				.then(function(result) {
				return result;
			});
		} catch (error) {
			throw error;
		}
	}

	async getAllCustomers() {
		try {
			return await customer.findAll();
		} catch (error) {
			throw error;
		}
	}

	async createDiagnosis(data){
		try {
			return await diagnosis.create(data)
				.then(function(result) {
					return result;
				});
		} catch (error) {
			throw error;
		}
	}

	async getAllDiagnosis() {
		try {
			return await diagnosis.findAll();
		} catch (error) {
			throw error;
		}
	}

	async getCustomerPhone(phone){
		return await customer.findAll({
			where: {
				phone: phone,
			},
		})
		.then((result) => {
			return result.length !== 0;
		})
		.catch((error) =>{
			return false;
		});
	}
};
