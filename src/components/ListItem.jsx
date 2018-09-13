import React, {Component} from 'react';
import Details from './Details';

class ListItem extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render () {
        let {id, title, notes, dueDate, completed, onClick, onDelete} = this.props;
        return (
            <li key={ id }>
                <button onClick={ onClick }>button</button>
                <span>{title}</span>
                <Details 
                    id={ id }
                    notes={ notes }
                    dueDate={ dueDate }
                    onDelete={ onDelete }
                />
            </li>
        )
    }
}

export default ListItem;