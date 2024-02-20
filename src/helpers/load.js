import { getMainContentListContainer, getMainContentListTasksContainer, getMainContentTaskContainer, getMainContentTodayTasksContainer } from "../components/main/main";
import { createListPanel } from "../components/panels/list/listPanel";
import { createListTaskPanel } from "../components/panels/listTask/listTaskPanel";
import { createTaskPanel } from "../components/panels/task/taskPanel";
import { individualTasks, lists } from "../data/data";
import { getTodayIndividualTasks, getTodayListTasks } from "./filter";

export function loadIndividualTasks() {
    const mainContentTaskContainer = getMainContentTaskContainer();
    mainContentTaskContainer.textContent = '';

    //Reload all individual tasks
    individualTasks.forEach(task => {
        mainContentTaskContainer.appendChild(createTaskPanel(task));
    });
}

export function loadLists() {
    const mainContentListContainer = getMainContentListContainer();
    mainContentListContainer.textContent = '';

    lists.forEach(list => {
        mainContentListContainer.appendChild(createListPanel(list));
    });
}

export function loadListTasks(list) {
    const mainContentListTaskContainer = getMainContentListTasksContainer();
    mainContentListTaskContainer.textContent = '';

    list.tasks.forEach(listTask => {
        mainContentListTaskContainer.appendChild(createListTaskPanel(listTask));
    });
}

export function loadTodayTasks() {
    const mainContentTodayTaskContainer = getMainContentTodayTasksContainer();
    mainContentTodayTaskContainer.textContent = '';

    const individualTasksToday = getTodayIndividualTasks();
    const listTasksToday = getTodayListTasks();

    //Reload all today's tasks
    individualTasksToday.forEach(task => {
        mainContentTodayTaskContainer.appendChild(createTaskPanel(task));
    });

    listTasksToday.forEach(task => {
        mainContentTodayTaskContainer.appendChild(createListTaskPanel(task));
    });
}