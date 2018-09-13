const completeTask = (state, id) => {
    let newState = { ...state };
    newState.tasks[id].completed = !newState.tasks[id].completed;
    return newState;
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'completeTask': return completeTask(state, action.id);
        default: return state;
    }
}

export default reducer;