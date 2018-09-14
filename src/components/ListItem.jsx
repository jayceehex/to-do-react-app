import React, {Component} from 'react';
import Details from './Details';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detailsHidden: true,
        }
        this.handleDetailToggle = this.handleDetailToggle.bind(this);
    }

    handleDetailToggle() {
        this.setState({
            detailsHidden: !this.state.detailsHidden,
            completed: !this.state.completed
        })
    }

    render () {
        let {id, title, notes, dueDate, completed, onClick, onDelete} = this.props;
        return (
            <li key={ id } className={"list-group-item" + (this.props.completed ? " disabled" : "")}>
                <div className="py-1">
                    <button className={"mx-1 btn btn-sm " + (this.props.completed ? "disabled" : "btn-outline-success")} onClick={ onClick }>complete</button>
                    <span className="mx-1">{title}</span>
                    <button className={"mx-1 float-right btn btn-sm " + (this.props.completed ? "btn-secondary disabled" : "btn-dark")} onClick={ this.handleDetailToggle }>expand</button>
                </div>
                { this.state.detailsHidden ? null : (<Details taskData={ this.props }/>) }
            </li>
        )
    }
}

export default ListItem;