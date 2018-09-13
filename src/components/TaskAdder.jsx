import React, { Component } from 'react';


class TaskAdder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            titleValue: "",
            dueDateValue: "",
            notesValue: ""
        }
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDueDateChange = this.handleDueDateChange.bind(this);
        this.handleNotesChange = this.handleNotesChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit(e) {
        e.preventDefault();
        let data = {
            title: this.state.titleValue,
            due_date: this.state.dueDateValue,
            notes: this.state.notesValue
        }
        this.props.onSubmit(data);
        this.setState({
            titleValue: "",
            dueDateValue: "",
            notesValue: ""
        })
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <div>
                    <label>Title</label>
                    <input onChange={ this.handleTitleChange } value={ this.state.titleValue } />
                </div>
                <div>
                    <label>Due Date</label>
                    <input onChange={ this.handleDueDateChange }value={ this.state.dueDateValue } />
                </div>
                <div>
                    <label>Notes</label>
                    <input onChange={ this.handleNotesChange } value={ this.state.notesValue } />
                </div>
                <button>Add Task</button>
            </form>
        );
    }
} 

export default TaskAdder;