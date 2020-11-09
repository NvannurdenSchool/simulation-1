import React from 'react';
import axios from 'axios';
import dashboard from "../Dashboard/Dashboard"
import form from "../Form/Form"

export default class Header extends Component {
  render() {
    return <p>{this.props.task}</p>;
  }
}