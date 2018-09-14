import axios from '../../axios';
import { setTasks } from './state';

export const getTasks = () => dispatch => {
    axios.get("/tasks").then(({ data }) => {
        const tasks = data.data;
        dispatch(setTasks(tasks));
    })
}