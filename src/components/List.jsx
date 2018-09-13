import React, {Component} from 'react';
import ListItem from './ListItem';

class List extends Component {
    render () {
        return (
            <ul>
                {
                    Object.values(this.props.tasks).map((task, index) => (
                            <ListItem
                                id={task.id}
                                title={task.title}
                                notes={task.notes}
                                dueDate={task.due_date}
                                completed={task.completed}
                                key={task.id}
                                onClick={ () => this.props.onClick(task.id) }
                                onDelete={ () => this.props.onDelete(task.id) }
                            />
                    ))
                }
            </ul>
        )
    }
}

export default List;
