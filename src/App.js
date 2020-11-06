import React, {Component} from 'react';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      product_name: "",
      price: "",
      image_url: ""
    }
  }

 
  
  render () {
    return(
    
      <div>
        <div>Image URL
          <input></input>
      </div>
      <div>Product Name
          <input></input>
        <button>Add to Inventory</button>
        <button>Cancel</button>
      </div>
      <div>Price
        <input></input>
      </div>
      <div></div>
    </div>
  )
}
}
