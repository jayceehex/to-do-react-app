import React, { Component } from 'react';

class TaskEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleValue: this.props.taskData.title,
            notesValue: this.props.taskData.notes ? this.props.taskData.notes : "",
            dueDateValue: this.props.taskData.dueDate ? this.props.taskData.dueDate : "",
            completedValue: this.props.taskData.completed,
        }
    }

    handleTitleChange(e) {
        this.setState({
            titleValue: e.target.value
        })
    }

    handleDueDateChange(e) {
        this.setState({
            dueDateValue: e.target.value
        })
    }

    handleNotesChange(e) {
        this.setState({
            notesValue: e.target.value
        })
    }

    handleCompletedChange(e) {
        this.setState({
            completedValue: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();

        let data = {
            id: this.props.taskData.id,
            title: this.state.titleValue,
            notes: this.state.notesValue,
            due_date: this.state.dueDateValue,
            completed: this.state.completedValue
        }
        
        this.props.taskData.onEdit(data);

        this.setState({
            titleValue: "",
            dueDateValue: "",
            notesValue: ""
        });
    }

    render() {
        return (
            <form onSubmit={ (e) => this.handleSubmit(e) }>
                <div className="form-group">
                    <label htmlFor="title" className="form-text">Title</label>
                    <input required id="title" type="text" className="form-control" onChange={ (e) => this.handleTitleChange(e) } value={ this.state.titleValue } />
                </div>
                <div className="form-group">
                    <label htmlFor="duedate" className="form-text">Due Date</label>
                    <input id="duedate" type="date" className="form-control" onChange={ (e) => this.handleDueDateChange(e) } value={ this.state.dueDateValue } />
                </div>
                <div className="form-group">
                    <label htmlFor="notes" className="form-text">Notes</label>
                    <input id="notes" type="text" className="form-control" onChange={ (e) => this.handleNotesChange(e) } value={ this.state.notesValue } />
                </div>
                <button type="submit" className="btn btn-success btn-block">Save Task</button>
            </form>
        )
    }
}

export default TaskEditor;