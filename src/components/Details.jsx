import React, { Component } from 'react';
import TaskEditor from '../components/TaskEditor';

class Details extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <p>{ this.props.taskData.notes }</p>
                    <p>{ this.props.taskData.dueDate }</p>
                    <button>Edit</button>
                    <button onClick={ this.props.taskData.onDelete }>Delete</button>
                </div>
                <TaskEditor taskData={ this.props.taskData } />
            </React.Fragment>
        ); 
    }
}

export default Details;

