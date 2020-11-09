CREATE TABLE product (
  id SERIAL PRIMARY KEY NOT NULL,
  image_url text NOT NULL,
	product_name text NOT NULL,
  price integer NOT NULL,
);