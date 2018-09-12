import { connect } from 'react-redux';
import List from '../components/List';

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps)(List);