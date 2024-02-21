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
    const todayTaskMainContent = document.createElement('div');
    const todayTaskParagraph = document.createElement('p');
    const todayIndividualTasksContainer = document.createElement('div');
    const todayListTasksContainer = document.createElement('div');

    const individualTaskParagraphContainer = document.createElement('div');
    const individualTaskParagraph = document.createElement('p');

    const listTasksParagraphContainer = document.createElement('div');
    const listTasksParagraph = document.createElement('p');

    todayTaskMainContent.id = 'today-tasks-main-content';
    todayIndividualTasksContainer.id = 'today-individual-tasks-main-container';
    todayListTasksContainer.id = 'today-list-tasks-main-container';

    todayTaskParagraph.textContent = 'Tasks for today';
    individualTaskParagraph.textContent = 'INDIVIDUAL TASKS';
    listTasksParagraph.textContent = 'LIST TASKS';

    individualTaskParagraphContainer.appendChild(individualTaskParagraph);
    listTasksParagraphContainer.appendChild(listTasksParagraph);

    todayTaskMainContent.appendChild(todayTaskParagraph);
    todayTaskMainContent.appendChild(individualTaskParagraphContainer);
    todayTaskMainContent.appendChild(todayIndividualTasksContainer);
    todayTaskMainContent.appendChild(listTasksParagraphContainer);
    todayTaskMainContent.appendChild(todayListTasksContainer);

    return todayTaskMainContent;
}

export function getMainContentTodayIndividualTasksContainer() {
    return document.querySelector('#today-individual-tasks-main-container');
}

export function getMainContentTodayListTasksContainer() {
    return document.querySelector('#today-list-tasks-main-container');
}

export function createThisWeekTasksMainContent() {
    const thisWeekTaskMainContent = document.createElement('div');
    const thisWeekTaskParagraph = document.createElement('p');
    const thisWeekIndividualTasksContainer = document.createElement('div');
    const thisWeekListTasksContainer = document.createElement('div');

    const individualTaskParagraphContainer = document.createElement('div');
    const individualTaskParagraph = document.createElement('p');

    const listTaskParagraphContainer = document.createElement('div');
    const listTaskParagraph = document.createElement('p');

    thisWeekTaskMainContent.id = 'this-week-tasks-main-content';
    thisWeekIndividualTasksContainer.id = 'this-week-tasks-main-container';
    thisWeekListTasksContainer.id = 'this-week-list-tasks-main-container';

    thisWeekTaskParagraph.textContent = 'Tasks in a week';
    individualTaskParagraph.textContent = 'INDIVIDUAL TASKS';
    listTaskParagraph.textContent = 'LIST TASKS';

    individualTaskParagraphContainer.appendChild(individualTaskParagraph);
    listTaskParagraphContainer.appendChild(listTaskParagraph);

    thisWeekTaskMainContent.appendChild(thisWeekTaskParagraph);
    thisWeekTaskMainContent.appendChild(individualTaskParagraphContainer)
    thisWeekTaskMainContent.appendChild(thisWeekIndividualTasksContainer);
    thisWeekTaskMainContent.appendChild(listTaskParagraphContainer);
    thisWeekTaskMainContent.appendChild(thisWeekListTasksContainer)

    return thisWeekTaskMainContent;
}

export function getMainContentThisWeekIndividualTasksContainer() {
    return document.querySelector('#this-week-tasks-main-container');
}

export function getMainContentThisWeekLIstTasksContainer() {
    return document.querySelector('#this-week-list-tasks-main-container');
}