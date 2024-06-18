const Driver = require('../models/driver');

class DriverRepository {
    async getDrivers() {
        try {
            const response = await Driver.findAll();
            return response;
        } catch(error) {
            console.log(error);
        }
    }

    async getDriver(id) {
        try {
            const response = await Driver.findByPk(id);
            return response;

        } catch(error) {
            console.log(error);
        }
    }

    async createDriver(name, location, isAvailable) {
        try{
            const response = await Driver.create({
                name,
                location,
                isAvailable
            });
            return response;
        } catch(error) {
            console.log(error);
        }
    }
}

module.exports = DriverRepository;
