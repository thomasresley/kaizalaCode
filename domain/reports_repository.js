const models = require('../datasource/models');
const accidents = models.accidents;
const incidents = models.incidents;
const service = models.service;
const fuel = models.fuel;

module.exports = class reportsRepository {

    async reportAccident(data) {
        try {
            return await accidents.create(data)
                .then(function(result) {
                    return result;
                });
        } catch (error) {
            throw error;
        }
    }

    async reportIncident(data){
        try {
            return await incidents.create(data)
                .then(function(result) {
                    return result;
                });
        } catch (error) {
            throw error;
        }
    }

    async reportService(data) {
        try {
            return await service.create(data)
                .then(function(result) {
                    return result;
                });
        } catch (error) {
            throw error;
        }
    }

    async reportFueling(data){
        try {
            return await fuel.create(data)
                .then(function(result) {
                    return result;
                });
        } catch (error) {
            throw error;
        }
    }

    async incidentReports() {
        try {
            return await incidents.findAll();
        } catch (error) {
            throw error;
        }
    }

    async fuelReports() {
        try {
            return await fuel.findAll();
        } catch (error) {
            throw error;
        }
    }
};
