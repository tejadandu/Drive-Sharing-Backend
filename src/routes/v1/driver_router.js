const express = require('express');

const { createDriver } = require('../../controllers/driver_controller');

const driverRouter = express.Router();

driverRouter.post('/', createDriver); // mapping a route to controller

// GET /api/v1/drivers/:id -->
// GET /api/v1/drivers/: --> all drivers

module.exports = driverRouter;
