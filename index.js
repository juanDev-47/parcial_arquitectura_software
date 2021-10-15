const express = require('express');
const db = require('./config/db');

db();

const app = express();


app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

const routes = require('./routes/hospital.routes.js');


const router = express.Router();
app.use('/', router);

routes(router);
const port = 5000;

app.listen(port, () => console.log(`servidor corriendo en puerto ${port}`));
