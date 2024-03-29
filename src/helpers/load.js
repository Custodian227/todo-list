import { getMainContentListContainer, getMainContentListTasksContainer, getMainContentTaskContainer, getMainContentThisWeekIndividualTasksContainer, getMainContentThisWeekLIstTasksContainer, getMainContentTodayIndividualTasksContainer, getMainContentTodayListTasksContainer } from "../components/main/main";
import { createListPanel } from "../components/panels/list/listPanel";
import { createListTaskPanel } from "../components/panels/listTask/listTaskPanel";
import { createTaskPanel } from "../components/panels/task/taskPanel";
import { getStorageIndividualTasks, getStorageLists, } from "../data/data";
import { getThisWeekIndividualTasks, getThisWeekListTasksTasks, getTodayIndividualTasks, getTodayListTasks } from "./filter";

export function loadIndividualTasks() {
    const mainContentTaskContainer = getMainContentTaskContainer();
    mainContentTaskContainer.textContent = '';

    const storageIndividualTasks = getStorageIndividualTasks();

    //Reload all individual tasks
    storageIndividualTasks.forEach(task => {
        if(task !== null){
            mainContentTaskContainer.appendChild(createTaskPanel(task));
        }
    });
}

export function loadLists() {
    const mainContentListContainer = getMainContentListContainer();
    mainContentListContainer.textContent = '';

    const storageLists = getStorageLists();

    storageLists.forEach(list => {
        if(list !== null) {
            mainContentListContainer.appendChild(createListPanel(list));
        }
    });
}

export function loadListTasks(list) {
    const mainContentListTaskContainer = getMainContentListTasksContainer();
    mainContentListTaskContainer.textContent = '';

    list.tasks.forEach(listTask => {
        if(listTask !== null) {
            mainContentListTaskContainer.appendChild(createListTaskPanel(listTask));
        }
    });
}

export function loadTodayTasks() {
    const mainContentTodayIndividualTaskContainer = getMainContentTodayIndividualTasksContainer();
    const mainContentTodayListTasksContainer = getMainContentTodayListTasksContainer();

    mainContentTodayIndividualTaskContainer.textContent = '';
    mainContentTodayListTasksContainer.textContent = '';

    const individualTasksToday = getTodayIndividualTasks();
    const listTasksToday = getTodayListTasks();

    //Reload all today's tasks
    individualTasksToday.forEach(task => {
        mainContentTodayIndividualTaskContainer.appendChild(createTaskPanel(task));
    });

    listTasksToday.forEach(listTask => {
        mainContentTodayListTasksContainer.appendChild(createListTaskPanel(listTask));
    });
}

export function loadThisWeekTasks() {
    const mainContentThisWeekIndividualTaskContainer = getMainContentThisWeekIndividualTasksContainer();
    const mainContentThisWeekListTasksContainer = getMainContentThisWeekLIstTasksContainer();

    mainContentThisWeekIndividualTaskContainer.textContent = '';
    mainContentThisWeekListTasksContainer.textContent = '';

    const individualTasksThisWeek = getThisWeekIndividualTasks();
    const listTasksThisWeek = getThisWeekListTasksTasks();

    //Reload all today's tasks
    individualTasksThisWeek.forEach(task => {
        mainContentThisWeekIndividualTaskContainer.appendChild(createTaskPanel(task));
    });

    listTasksThisWeek.forEach(listTask => {
        mainContentThisWeekListTasksContainer.appendChild(createListTaskPanel(listTask));
    });
}