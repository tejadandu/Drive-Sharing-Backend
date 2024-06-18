const express = require("express");
const bodyParser = require('body-parser');

const { PORT } = require('./config/server_config');
const db = require('./config/db_config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/v1/get', (request, response) => {
    return response.json({message: "Alive"});
});

app.listen(PORT, async () => {
    console.log(`Server for drive-sharing is Up ${PORT}`);
    // await db.sync({ alter: true });
    console.log('DB Connected');
});



