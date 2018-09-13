import React, { Component } from 'react';

class Details extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <p>{ this.props.notes }</p>
                <p>{ this.props.dueDate }</p>
                <button>Edit</button>
                <button onClick={ this.props.onDelete }>Delete</button>
            </React.Fragment>
        ); 
    }
}

export default Details;

