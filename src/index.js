const express = require("express");

const { PORT } = require('./config/serverConfig');

const app = express();


app.listen(3000, () => {
    console.log(`Server for drive-sharing is Up ${3000}`);
});
