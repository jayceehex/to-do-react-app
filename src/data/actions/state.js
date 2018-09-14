export const completeTask = (response) => {
    return {
        type: 'completeTask',
        response: response
    }
}

export const removeTask = (id) => {
    return {
        type: 'removeTask',
        id: id
    }
}

export const addTask = (task) => {
    return {
        type: 'addTask',
        task: task
    }
}

export const editTask = (data) => {
    return {
        type: 'editTask',
        data: data
    }
}

export const setTasks = (tasks) => {
    return {
        type: 'setTasks',
        tasks: tasks
    }
}