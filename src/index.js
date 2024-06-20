const express = require("express");
const bodyParser = require('body-parser');

const { PORT } = require('./config/server_config');
const db = require('./config/db_config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(PORT, async () => {
    console.log(`Server for drive-sharing is Up ${PORT}`);
    await db.sync();
    console.log('DB Connected');

});



