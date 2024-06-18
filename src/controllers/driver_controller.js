const { StatusCodes, ReasonPhrases } = require('http-status-codes');

const driverService = new DriverService(new DriverRepository());

async function createDriver(req, res) {

    try {

        const response = await driverService.createDriver(req.body);

        return res.status(StatusCodes.CREATED).json({
            sucess: true,
            error: {},
            message: ReasonPhrases.CREATED + " Driver",
            data: response
        });

    } catch(error) {
        console.log("Something went wrong", error);
    }
}


module.exports = {
    createDriver
}
