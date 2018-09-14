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
            <li key={ id } className="list-group-item">
                <div className="d-flex justify-content-between">
                    <button className={"btn btn-sm " + (this.props.completed ? "btn-success" : "btn-light")} onClick={ onClick }>complete</button>
                    <span className="">{title}</span>
                    <button className="btn btn-sm btn-dark" onClick={ this.handleDetailToggle }>expand</button>
                </div>
                { this.state.detailsHidden ? null : (<Details taskData={ this.props }/>) }
            </li>
        )
    }
}

export default ListItem;