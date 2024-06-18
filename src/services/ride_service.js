class RideService {

    constructor(respository) {
        this.respository = respository;
    }

    async createRide(ride) {
        const response = await this.createRide(ride.driverId, ride.passengerId, ride.status);
        return response;
    }
}


module.exports = RideService;
