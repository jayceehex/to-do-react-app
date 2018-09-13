import React, {Component} from 'react';
import ListItem from './ListItem';

class List extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(id) {
        this.props.onClick(id);
    }

    render () {
        return (
            <ul>
                {
                    Object.values(this.props.tasks).map((task, index) => (
                        <React.Fragment>
                            <ListItem
                                id={task.id}
                                title={task.title}
                                completed={task.completed}
                                key={index}
                                onClick={ () => this.handleClick(task.id) }
                            />
                            {/* <Details 
                                notes={task.notes}
                                dueDate={task.due_date}
                                key={index}
                            /> */}
                        </React.Fragment>  
                    ))
                }
            </ul>
        )
    }
}

export default List;
