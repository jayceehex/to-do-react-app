import { connect } from 'react-redux';
import TaskAdder from '../components/TaskAdder';
import { addTask } from '../data/actions/state';

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: (data) => dispatch(addTask(data)),
    }
}

export default connect(null, mapDispatchToProps)(TaskAdder);