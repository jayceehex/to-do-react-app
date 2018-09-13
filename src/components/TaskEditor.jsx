import React, { Component } from 'react';

class TaskEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleValue: this.props.taskData.title,
            notesValue: this.props.taskData.notes,
            dueDateValue: this.props.taskData.dueDate,
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
    }

    render() {
        return (
            <form onSubmit={ (e) => this.handleSubmit(e) }>
                <div>
                    <label>Title</label>
                    <input onChange={ (e) => this.handleTitleChange(e) } value={ this.state.titleValue } />
                </div>
                <div>
                    <label>Due Date</label>
                    <input onChange={ (e) => this.handleDueDateChange(e) }value={ this.state.dueDateValue } />
                </div>
                <div>
                    <label>Notes</label>
                    <input onChange={ (e) => this.handleNotesChange(e) } value={ this.state.notesValue } />
                </div>
                <div>
                    <label>Completed</label>
                    <input onChange={ (e) => this.handleCompletedChange(e) } value={ this.state.completedValue } />
                </div>
                <button>Edit Task</button>
            </form>
        )
    }
}

export default TaskEditor;