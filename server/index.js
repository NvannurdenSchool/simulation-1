const express = require('express');
require("dotenv").config();
const massive = require("massive");
const ctrl = require("./controller");
const app = express();
const {SERVER_PORT, CONNECTION_STRING} = process.env;

massive({
	connectionString: CONNECTION_STRING,
	ssl: {rejectUnauthorized: false}
})
		.then(db => {
			app.set("db", db);
		})
		.catch(err => console.log(err));

app.use(express.json());

app.listen(SERVER_PORT, () => {
	console.log(`server listening on ${SERVER_PORT} `)
})