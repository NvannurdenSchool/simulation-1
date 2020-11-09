import React from 'react';
import Product from "../Product/Product";


const inventory = {
	product_names: this.props.product_names,
	image_urls: this.props.image_url,
	prices: this.props.prices
}

export default class Dashboard extends Component {
  render() {
	return <p>{inventory}</p>
  }
};