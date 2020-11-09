module.exports = {

	getInventory: (req, res) => {
		const dbInstance = req.app.get('db');

		dbInstance.read_inventory()
			.then(inventory => res.status(200).send(inventory))
			.catch( err => {
				res.status(500).send({errorMessage: "Error"});
				console.log(err)
			} );
	},

  create: (req, res) => {
    const dbInstance = req.app.get('db');

    dbInstance.create_inventory()
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({errorMessage: "ERROR"});
        console.log(err)
      } );
  },

  update: (req, res) => {
    const dbInstance = req.app.get('db');

    dbInstance.update_inventory()
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({errorMessage: "Error"});
        console.log(err)
      } );
  },

  delete: (req, res) => {
    const dbInstance = req.app.get('db');

    dbInstance.delete_inventory()
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({errorMessage: "Error"});
        console.log(err)
      } );
  }
};