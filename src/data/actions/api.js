import axios from '../../axios';
import { setTasks, removeTask, addTask, completeTask, editTask } from './state';

export const getTasks = () => dispatch => {
    axios.get("/tasks").then(({ data }) => {
        const tasks = data.data;
        dispatch(setTasks(tasks));
    })
}

export const deleteTask = (id) => dispatch => {
    axios.delete("/tasks/" + id).then(() => {
        dispatch(removeTask(id));
    })
}

export const postTask = (newTask) => dispatch => {
    newTask.due_date ? null : (delete newTask.due_date);
    newTask.notes ? null : (delete newTask.notes);
    axios.post('/tasks/', newTask).then(({ data }) => {
        const task = data.data;
        dispatch(addTask(task));
    })
}

export const patchTask = (id, isCompleted) => dispatch => {
    isCompleted = !isCompleted;
    axios.patch('/tasks/' + id, {completed: isCompleted}).then(({data}) => {
        const response = data.data;
        dispatch(completeTask(response));
    })
}

export const putTask = (data) => dispatch => {
    data.due_date ? null : (data.due_date = null);
    data.notes ? null : (data.notes = "");
    console.log(data);
    axios.put('/tasks/' + data.id, data).then(({data}) => {
        const editedTask = data.data;
        dispatch(editTask(editedTask));
    })
}