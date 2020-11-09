import React, {Component} from 'react';


export default class Product extends Component {
  render() {
    return <p>{this.props.task}</p>;
  }
}