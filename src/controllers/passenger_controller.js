const { StatusCodes, ReasonPhrases } = require('http-status-codes');

const passengerService = new PassengerService(new PassengerRepository());

async function createPassenger(req, res) {

    try {

        const response = await passengerService.createPassenger(req.body);

        return res.status(StatusCodes.CREATED).json({
            sucess: true,
            error: {},
            message: ReasonPhrases.CREATED + " Passenger",
            data: response
        });

    } catch(error) {
        console.log("Something went wrong", error);
    }
}


module.exports = {
    createPassenger
}
