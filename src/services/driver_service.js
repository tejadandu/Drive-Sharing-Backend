class DriverService {

    constructor(respository) {
        this.respository = respository;
    }

    async createDriver(driver) {
        const response = await this.createDriver(driver.name, driver.location, driver.isAvailable);
        return response;
    }
}


module.exports = DriverService;
