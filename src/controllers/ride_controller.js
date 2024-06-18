const { StatusCodes, ReasonPhrases } = require('http-status-codes');

const rideService = new RideService(new RideRepository());

async function createRide(req, res) {

    try {

        const response = await RideService.createRide(req.body);

        return res.status(StatusCodes.CREATED).json({
            sucess: true,
            error: {},
            message: ReasonPhrases.CREATED + " Ride",
            data: response
        });

    } catch(error) {
        console.log("Something went wrong", error);
    }
}

module.exports = {
    createRide
}
