
import React, { Component } from 'react';

class AddItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputText: ''
        }
    }

    handleAddItem = () => {
        this.props.addListItem(this.state.inputText);
        this.setState({ inputText: '' });
    }

    render() {
        return (
            <div>
                <input
                type="text"
                value={this.state.inputText}
                onChange={e => this.setState({ inputText: e.target.value })}
                />
                <button onClick={() => this.handleAddItem()}>Add Item</button>
            </div>
        );
    }
}

export default AddItem;