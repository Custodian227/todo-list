//A content container for displaying tasks
export function createTaskMainContent() {
    const taskMain = document.createElement('div');
    taskMain.id = 'task-main';

    return taskMain;
}

export function getTaskMainContent() {
    return document.querySelector('#task-main');
}

//A content container for displaying lists
export function createListMainContent() {
    const listMain = document.createElement('div');
    listMain.id = 'list-main';

    return listMain;
}

export function getListMainContent() {
    return document.querySelector('#list-main');
}