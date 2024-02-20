import { createAddListDialog, getAddListDialog } from "../dialogs/list/add/addListDialog";
import { createAddListTaskDialog, getAddListTaskDialog } from "../dialogs/listTask/add/addListTaskDialog";
import { createAddTaskDialog, getAddTaskDialog } from "../dialogs/task/add/addTaskDialog";

//A content container for displaying tasks
export function createTaskMainContent() {
    const taskMainContent = document.createElement('div');
    const addTaskButton = document.createElement('button');
    const tasksContainer = document.createElement('div');

    taskMainContent.id = 'task-main-content';
    tasksContainer.id = 'task-main-tasks-container';

    addTaskButton.textContent = '+ Add individual task';

    addTaskButton.addEventListener('click', () => {
        document.body.appendChild(createAddTaskDialog());
        getAddTaskDialog().showModal();
    });

    taskMainContent.appendChild(addTaskButton);
    taskMainContent.appendChild(tasksContainer);

    return taskMainContent;
}

export function getMainContentTaskContainer() {
    return document.querySelector('#task-main-tasks-container');
}

//A content container for displaying lists
export function createListMainContent() {
    const listMainContent = document.createElement('div');
    const addListButton = document.createElement('button');
    const listsContainer = document.createElement('div');

    listMainContent.id = 'list-main-content';
    listsContainer.id = 'list-main-lists-container';

    addListButton.textContent = '+ Add list';

    addListButton.addEventListener('click', () => {
        document.body.appendChild(createAddListDialog());
        getAddListDialog().showModal();
    });

    listMainContent.appendChild(addListButton);
    listMainContent.appendChild(listsContainer);

    return listMainContent;
}

export function getMainContentListContainer() {
    return document.querySelector('#list-main-lists-container');
}

//A content container for displaying tasks
export function createListTasksMainContent() {
    const listTasksMainContent = document.createElement('div');
    const addListTaskButton = document.createElement('button');
    const listTasksContainer = document.createElement('div');

    listTasksMainContent.id = 'list-tasks-main-content';
    listTasksContainer.id = 'list-tasks-main-task-container';
    addListTaskButton.textContent = '+ Add task to list';

    addListTaskButton.addEventListener('click', () => {
        document.body.appendChild(createAddListTaskDialog());
        getAddListTaskDialog().showModal();
    });

    listTasksMainContent.appendChild(addListTaskButton);
    listTasksMainContent.appendChild(listTasksContainer);

    return listTasksMainContent;
}

export function getMainContentListTasksContainer() {
    return document.querySelector('#list-tasks-main-task-container');
}

export function createTodayTasksMainContent() {
    const taskMainContent = document.createElement('div');
    const taskTodayParagraph = document.createElement('p');
    const tasksContainer = document.createElement('div');

    taskMainContent.id = 'today-tasks-main-content';
    tasksContainer.id = 'today-tasks-main-container';

    taskTodayParagraph.textContent = 'Tasks for today';

    taskMainContent.appendChild(taskTodayParagraph);
    taskMainContent.appendChild(tasksContainer);

    return taskMainContent;
}

export function getMainContentTodayTasksContainer() {
    return document.querySelector('#today-tasks-main-container');
}