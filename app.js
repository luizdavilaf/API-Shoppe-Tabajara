const express = require('express');
config = require("./config/config")
const sync = require('./src/models/sync')
const cors = require('cors');
const app = express();
db = require('./db/dbconnection');
sequelize = require("./db/sequelize-connection");
const path = require('path');


app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());
app.use(cors());

const noAuthRoutes = require('./src/routes/noauth/index');
app.use('/noauth', noAuthRoutes);

const authRoutes = require('./src/routes/auth/index');
app.use('/auth', authRoutes);


app.listen(3000, () => {
    console.log("SERVER STARTED AT 3000");
});