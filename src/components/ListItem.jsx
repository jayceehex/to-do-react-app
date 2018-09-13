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
                    // id={ id }
                    // title={ title }
                    // notes={ notes }
                    // dueDate={ dueDate }
                    // completed={ completed }
                    // onDelete={ onDelete }
                    taskData={ this.props }
                />
            </li>
        )
    }
}

export default ListItem;