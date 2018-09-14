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

const completeTask = (state, response) => {
    let newState = {
        ...state,
        tasks: {
            ...state.tasks,
            [response.id]: {
                ...state.tasks[response.id],
                completed: response.completed
            }
        }};

    return newState;
}

const removeTaskFromList = (state, id) => {
    
    let newState = {...state};
    const tasks = {...newState.tasks};
    delete tasks[id];
    return {
        ...newState,
        tasks
    };
}

const addTask = (state, task) => {
    let newState = {...state};
    newState = {
        ...newState,
        tasks: {
            ...newState.tasks,
            [task.id]: {
                ...task,
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
        case 'completeTask': return completeTask(state, action.response);
        case 'removeTask': return removeTaskFromList(state, action.id);
        case 'addTask': return addTask(state, action.task);
        case 'editTask': return editTask(state, action.data);
        default: return state;
    }
}

export default reducer;