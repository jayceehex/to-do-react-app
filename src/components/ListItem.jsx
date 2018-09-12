import React, {Component} from 'react';

class ListItem extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <li>
                <button>button</button>
                <span>title</span>
            </li>
        )
    }
}

export default ListItem;