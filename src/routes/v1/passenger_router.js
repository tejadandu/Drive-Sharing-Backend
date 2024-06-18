const express = require('express');

const { createPassenger } = require('../../controllers/passenger_controller');

const passengerRouter = express.Router();

passengerRouter.post('/', passengerDriver); // mapping a route to controller

// GET /api/v1/passengers/:id -->
// GET /api/v1/passengers/: --> all passengers

module.exports = passengerRouter;
