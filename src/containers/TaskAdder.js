import { connect } from 'react-redux';
import TaskAdder from '../components/TaskAdder';
import { postTask } from '../data/actions/api';

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: (data) => dispatch(postTask(data)),
    }
}

export default connect(null, mapDispatchToProps)(TaskAdder);