import React, {Component} from 'react';

class ListItem extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render () {
        let {id, title, notes, dueDate, completed} = this.props;
        return (
            <li>
                <button>button</button>
                <span>{title}</span>
            </li>
        )
    }
}

export default ListItem;