const models = require('../datasource/models');
const drivers = models.drivers;
const trips = models.trips;
const vehicles = models.vehicles;

module.exports = class companyRepository {

    async registerDriver(data) {
        try {
            return await drivers.create(data)
                .then(function(result) {
                    return result;
                });
        } catch (error) {
            throw error;
        }
    }

    async registerVehicle(data){
        try {
            return await vehicles.create(data)
                .then(function(result) {
                    return result;
                });
        } catch (error) {
            throw error;
        }
    }

    async startTrip(data){
        try {
            return await trips.create(data)
                .then(function(result) {
                    return result;
                });
        } catch (error) {
            throw error;
        }
    }

    async getVehicleByReg(reg){
        return await vehicles.findAll({
            where: {
                vehicleReg: reg,
            },
        })
        .then((result) => {
            return result.length !== 0 ? result : false;
        })
        .catch((error) =>{
            return error;
        });
    }

    async getAllTrips() {
        try {
            return await trips.findAll();
        } catch (error) {
            throw error;
        }
    }

    async getActiveTripByDriver(phone){
        return await trips.findAll({
            where: {
                phone: phone,
                status: "active"
            },
            limit: 1,
            order: [[ 'createdAt', 'DESC' ]]
        })
        .then((result) => {
            return result.length !== 0 ? result : false;
        })
        .catch((error) => {
            return error;
        });
    }

    async updateTrip(data, phone){
        let trip = await this.getActiveTripByDriver(phone);
        return await trips.update(data, {
            where: {
                id: trip[0].dataValues.id,
            },
        })
        .then((result) => {
            return result;
        })
        .catch((error) => {
            return error;
        });
    }
};
