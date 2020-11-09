import axios from 'axios';
import React, {Component} from 'react';
import {HashRouter} from "react-router-dom";
import routes from './routes';
import "./App.css";
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      product_name: " ",
      price: "",
      image_url: "",
      product_names: [],
      image_urls: [],
      prices: []
    }
    this.handleAddProductName = this.handleAddProductName.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleAddImageUrl = this.handleAddImageUrl.bind(this);
    this.handleAddPrice = this.handleAddPrice.bind(this);
    this.handleAddToInventory = this.handleAddToInventory.bind(this);
  }

    componentDidMount(){
      axios.get("/api/inventory")
      .then((res) => {
        this.setState({
          inventoryList: res.data
        })
      })
      .catch(err => console.log(err))
    }
    
     create_product(addProduct, id){
      axios.post(`/api/inventory/`)
      .then(res => this.setState({
        inventoryList: res.data
      }))
    }

    updateList(updateItem, id){
      axios.put(`/api/inventory/${id}/${updateItem}`)
      .then(res =>
        this.setState({
          inventoryList: res.data
        }))
    }

    deleteInventory(deleteInventory, id){
      axios.delete(`/api/inventory/:id`)
    }



  handleProductInputChange(value) {
    // console.log(value)
    this.setState({product_name: value})
  }
  handleImgInputChange(value) {
    // console.log(value)
    this.setState({image_url: value})
  }
  handlePriceInputChange(value) {
    // console.log(value)
    this.setState({price: value})
  }

  handleAddToInventory() {
    this.handleAddProductName()
    this.handleAddImageUrl()
    this.handleAddPrice()
    
  }

  handleAddProductName() {
    this.setState({
      product_names: [...this.state.product_names, this.state.product_name],
      product_name: ' '
    });
  }
  handleAddImageUrl() {
    this.setState({
      image_urls: [...this.state.image_urls, this.state.image_url],
      image_url: ""
    });
  }
  handleAddPrice() {
    this.setState({
      prices: [...this.state.prices, this.state.price],
      price: ""
    });
  }
  handleReset(){
    this.setState({
      product_name: '',
      price: '',
      image_url: ''
    })
  }
 
  
  render (){
    return(
    <HashRouter>
      
      <header className="nav-bar"
      >Shelfie<button className="btn" onClick={this.handleAddToInventory}>Add to Inventory</button>
      <button className="btn" onClick={ e => this.handleReset()} type="reset" value="Reset" >Cancel</button></header>
  <div>
      <div className="green-box">
        <div className="img_url">
          <div>Image URL</div>
           <input placeholder="Add Image URL" value={this.state.image_url} onChange={e => this.handleImgInputChange(e.target.value)}/>
        <div placeholder="Add Product Name">Product Name</div>
            <input className="product_name" placeholder="Add Product Name" value={this.state.product_name} onChange={e => this.handleProductInputChange(e.target.value)}/>
            <div className="price" >Price</div>
              <input placeholder="Add Product Price" value={this.state.price} onChange={e => this.handlePriceInputChange(e.target.value)}/>   
            </div>
          </div>
    <div className="outputs">
        <div className="product_names-output">{this.state.product_names}</div>
        <div className="imageUrl-output">{this.state.image_urls} </div>
        <div className="prices-output">{this.state.prices} </div>
    </div>
  </div>
    
    </HashRouter>
  )
}
}
