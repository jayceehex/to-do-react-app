import { connect } from 'react-redux';
import List from '../components/List';
import { completeTask } from '../data/actions/state';

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (id) => dispatch(completeTask(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);