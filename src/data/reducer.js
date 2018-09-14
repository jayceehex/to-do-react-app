import { setTasks } from "./actions/state";

const setTaskList = (state, tasks) => {
    let formattedTasks = tasks.reduce((obj, task) => {
        return obj = {
            ...obj,
            tasks: {
                ...obj.tasks,
                [task.id]: task
            }
        };
    }, { tasks: {}});
    return formattedTasks;
}

const completeTask = (state, id) => {
    let newState = { ...state };
    newState.tasks[id].completed = !newState.tasks[id].completed;
    return newState;
}

const deleteTask = (state, id) => {
    
    let newState = {...state};
    const tasks = {...newState.tasks};
    delete tasks[id];
    return {
        ...newState,
        tasks
    };
}

let fakeId = 50;

const addTask = (state, data) => {
    fakeId += 1;
    let newState = {...state};
    newState = {
        ...newState,
        tasks: {
            ...newState.tasks,
            [fakeId]: {
                ...data,
                id: fakeId,
                completed: false,
            }
        }
    }
    return newState;
}

const editTask = (state, data) => {
    let newState = {...state};
    newState = {
        ...newState,
        tasks: {
            ...newState.tasks,
            [data.id]: data
        }
    }
    return newState;
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'setTasks': return setTaskList(state, action.tasks);
        case 'completeTask': return completeTask(state, action.id);
        case 'deleteTask': return deleteTask(state, action.id);
        case 'addTask': return addTask(state, action.data);
        case 'editTask': return editTask(state, action.data);
        default: return state;
    }
}

export default reducer;