const Passenger = require('../models/passenger');

class PassengerRepository {
    async getPassengers() {
        try {
            const response = await Passenger.findAll();
            return response;
        } catch(error) {
            console.log(error);
        }
    }

    async getPassenger(id) {
        try {
            const response = await Passenger.findByPk(id);
            return response;
        } catch(error) {
            console.log(error);
        }
    }

    async createPassenger(name, location) {
        try {
            const response = await Passenger.create({
                name,
                location
            });
            return response;
        } catch(error) {
            console.log(error);
        }
    }
}

module.exports = PassengerRepository;
