const express = require('express');

const v1Router = express.Router();

const driverRouter = require('./driver_router');
const passengerRouter = require('./passenger_router');
const rideRouter = require('./ride_router');

// Any new api if we have to introduce we should just register it here
// if it is a V1 api

v1Router.use('/drivers', driverRouter)
v1Router.use('/passengers', passengerRouter)
v1Router.use('/rides', rideRouter)

module.exports = v1Router;
