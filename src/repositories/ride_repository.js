const Ride = require('../models/ride');

class RideRepository {
    async getRides() {
        try {
            const response = await Ride.findAll();
            return response;
        } catch(error) {
            console.log(error);
        }
    }

    async getRide(id) {
        try {
            const response = await Ride.findByPk(id);
            return response;
        } catch(error) {
            console.log(error);
        }
    }

    async createRide() {
        try {
            const response = await Ride.create({
                driverId,
                passengerId,
                status
            });
            return response;
        } catch(error) {
            console.log(error);
        }
    }
}

module.exports = RideRepository;
