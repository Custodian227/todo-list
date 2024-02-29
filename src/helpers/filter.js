import { getStorageIndividualTasks, getStorageLists } from "../data/data";
import { checkDueDateInWeek, checkDueDateIsToday } from "./date";

export function getTodayIndividualTasks() {
    const storageIndividualTasks = getStorageIndividualTasks();
    return storageIndividualTasks.filter((task) => task !== null && checkDueDateIsToday(task.dueDate));
}

export function getTodayListTasks() {
    const storageLists = getStorageLists();
    const listTasks = []; 

    storageLists.forEach(list => {
        list.tasks.forEach(listTask => {
            listTasks.push(listTask);
        });
    });

    return listTasks.filter((listTask) => listTask !== null && checkDueDateIsToday(listTask.dueDate));
}

export function getThisWeekIndividualTasks() {
    const storageIndividualTasks = getStorageIndividualTasks();
    const filteredIndividualTasks = storageIndividualTasks.filter((task) => task !== null && checkDueDateInWeek(task.dueDate));
    
    return filteredIndividualTasks.sort((firstTask, secondTask) => {
        let firstTasKDueDate = new Date(firstTask.dueDate);
        let secondTaskDueDate = new Date(secondTask.dueDate);

        return firstTasKDueDate - secondTaskDueDate;
    });
}

export function getThisWeekListTasksTasks() {
    const storageLists = getStorageLists();
    const listTasks = [];   
         
    storageLists.forEach(list => {
        list.tasks.forEach(listTask => {
            listTasks.push(listTask);
        });
    });

    const filteredListTasks = listTasks.filter((listTask) => listTask !== null && checkDueDateInWeek(listTask.dueDate));

    return filteredListTasks.sort((firstListTask, secondListTask) => {
        let firstListTasKDueDate = new Date(firstListTask.dueDate);
        let secondListTaskDueDate = new Date(secondListTask.dueDate);

        return firstListTasKDueDate - secondListTaskDueDate;
    });
}

