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

const reducer = (state, action) => {
    switch (action.type) {
        case 'completeTask': return completeTask(state, action.id);
        case 'deleteTask': return deleteTask(state, action.id);
        case 'addTask': return addTask(state, action.data);
        default: return state;
    }
}

export default reducer;