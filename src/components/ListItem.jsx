import React, {Component} from 'react';

class ListItem extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render () {
        let {id, title, notes, dueDate, completed, onClick} = this.props;
        return (
            <li>
                <button onClick={ onClick }>button</button>
                <span>{title}</span>
            </li>
        )
    }
}

export default ListItem;