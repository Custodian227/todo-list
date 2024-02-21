import { individualTasks, lists } from "../data/data";
import { checkDueDateInWeek, checkDueDateIsToday } from "./date";

export function getTodayIndividualTasks() {
    return individualTasks.filter((task) => checkDueDateIsToday(task.dueDate));
}

export function getTodayListTasks() {
    const listTasks = [];     

    lists.forEach(list => {
        list.tasks.forEach(listTask => {
            listTasks.push(listTask);
        });
    });

    return listTasks.filter((listTask) => checkDueDateIsToday(listTask.dueDate));
}

export function getThisWeekIndividualTasks() {
    const filteredIndividualTasks = individualTasks.filter((task) => checkDueDateInWeek(task.dueDate));
    
    return filteredIndividualTasks.sort((firstTask, secondTask) => {
        let firstTasKDueDate = new Date(firstTask.dueDate);
        let secondTaskDueDate = new Date(secondTask.dueDate);

        return firstTasKDueDate - secondTaskDueDate;
    });
}

export function getThisWeekListTasksTasks() {
    const listTasks = [];   
         
    lists.forEach(list => {
        list.tasks.forEach(listTask => {
            listTasks.push(listTask);
        });
    });

    const filteredListTasks = listTasks.filter((listTask) => checkDueDateInWeek(listTask.dueDate));

    return filteredListTasks.sort((firstListTask, secondListTask) => {
        let firstListTasKDueDate = new Date(firstListTask.dueDate);
        let secondListTaskDueDate = new Date(secondListTask.dueDate);

        return firstListTasKDueDate - secondListTaskDueDate;
    });
}

