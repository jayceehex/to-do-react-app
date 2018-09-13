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
        })
    }

    render () {
        let {id, title, notes, dueDate, completed, onClick, onDelete} = this.props;
        return (
            <li key={ id } className="list-group-item">
                <div className="card-header">
                    <button onClick={ onClick }>complete</button>
                    <span className="card-title">{title}</span>
                    <button onClick={ this.handleDetailToggle }>expand</button>
                </div>
                { this.state.detailsHidden ? null : (<Details taskData={ this.props }/>) }
            </li>
        )
    }
}

export default ListItem;