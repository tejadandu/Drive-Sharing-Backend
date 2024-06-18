class PassengerService {

    constructor(respository) {
        this.respository = respository;
    }

    async createPassenger(passenger) {
        const response = await this.createPassenger(passenger.name, passenger.location);
        return response;
    }
}

module.exports = PassengerService;
