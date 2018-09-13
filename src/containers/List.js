import { connect } from 'react-redux';
import List from '../components/List';
import { completeTask, deleteTask, editTask } from '../data/actions/state';

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (id) => dispatch(completeTask(id)),
        onDelete: (id) => dispatch(deleteTask(id)),
        onEdit: (data) => dispatch(editTask(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);