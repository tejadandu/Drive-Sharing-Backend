const express = require('express');

const { createRide } = require('../../controllers/ride_controller');

const rideRouter = express.Router();

rideRouter.post('/', createRide); // mapping a route to controller

// GET /api/v1/rides/:id -->
// GET /api/v1/rides/: --> all rides

module.exports = rideRouter;
