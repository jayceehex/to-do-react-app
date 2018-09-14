import { connect } from 'react-redux';
import List from '../components/List';
import { getTasks, deleteTask, patchTask, putTask } from '../data/actions/api';

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: () => dispatch(getTasks()),
        onClick: (id, isCompleted) => dispatch(patchTask(id, isCompleted)),
        onDelete: (id) => dispatch(deleteTask(id)),
        onEdit: (data) => dispatch(putTask(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);