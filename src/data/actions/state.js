export const completeTask = (id) => {
    return {
        type: 'completeTask',
        id: id
    }
}

export const deleteTask = (id) => {
    return {
        type: 'deleteTask',
        id: id
    }
}

export const addTask = (data) => {
    return {
        type: 'addTask',
        data: data
    }
}