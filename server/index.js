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
		.then(dbInstance => {
			app.set("db", dbInstance);
		})
		.catch(err => console.log(err));
	
	app.use(express.json());
	
	app.listen(SERVER_PORT, () => {
		console.log(`Server listening on port ${SERVER_PORT}.`);
	});

app.get('/api/inventory', ctrl.getInventory)
app.post('/api/inventory', ctrl.create)
app.put('/api/inventory/:id', ctrl.update)
app.delete('/api/inventory/:id', ctrl.delete)