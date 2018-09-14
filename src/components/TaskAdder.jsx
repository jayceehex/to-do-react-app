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
                <div className="form-group">
                    <label htmlFor="title" className="form-text">Title</label>
                    <input required id="title" type="text" className="form-control" onChange={ this.handleTitleChange } value={ this.state.titleValue } />
                </div>
                <div className="form-group">
                    <label htmlFor="duedate">Due Date</label>
                    <input id="duedate" type="" className="form-control" onChange={ this.handleDueDateChange } value={ this.state.dueDateValue } />
                </div>
                <div className="form-group">
                    <label htmlFor="notes">Notes</label>
                    <input id="notes" type="text" className="form-control" onChange={ this.handleNotesChange } value={ this.state.notesValue } />
                </div>
                <div className="form-group">
                    <button disabled={ this.state.titleValue ? false : true } type="submit" className="btn btn-dark btn-block">Add Task</button>
                </div>
            </form>
        );
    }
} 

export default TaskAdder;