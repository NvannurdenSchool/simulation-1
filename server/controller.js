module.exports = {
  create: (req, res) => {
    const dbInstance = req.app.get('db');
    const {product_name, price, image_url } = req.body;

    dbInstance.create_product([product_name, price, image_url])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "ERROR"});
        console.log(err)
      });
	}
}