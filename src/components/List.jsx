import React, {Component} from 'react';
import ListItem from './ListItem';

class List extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <ul>
                <ListItem />
            </ul>
        )
    }
}

export default List;