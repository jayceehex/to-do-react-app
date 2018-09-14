import React, { Component } from 'react';
import TaskEditor from '../components/TaskEditor';
import moment from 'moment';

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorHidden: true,
        }
        this.handleEditToggle = this.handleEditToggle.bind(this);
    }

    handleEditToggle() {
        this.setState({
            editorHidden: !this.state.editorHidden,
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="my-2">
                    <hr />
                    <p>{ this.props.taskData.notes }</p>
                    { this.props.taskData.dueDate ? <p className="text-muted">{ moment(this.props.taskData.dueDate).calendar()}</p> : null }
                    <div className="btn-group">
                        <button className="btn btn-outline-secondary" onClick={ this.handleEditToggle }>Edit</button>
                        <button className="btn btn-outline-danger" onClick={ this.props.taskData.onDelete }>Delete</button>
                    </div>
                </div>
                { this.state.editorHidden ? null : (<TaskEditor taskData={ this.props.taskData } editToggle={ () => this.handleEditToggle() }/>) }
            </React.Fragment>
        ); 
    }
}

export default Details;

