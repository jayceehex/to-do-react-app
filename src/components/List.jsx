import React, {Component} from 'react';
import ListItem from './ListItem';

class List extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render () {
        return (
            <ul>
                {
                    this.props.tasks.map((task, index) => (
                        <ListItem
                            id={task.id}
                            title={task.title}
                            notes={task.notes}
                            dueDate={task.due_date}
                            completed={task.completed}
                            key={index}
                        />
                    ))
                }
            </ul>
        )
    }
}

export default List;