import { individualTasks, lists } from "../data/data";
import { checkDueDateIsToday } from "./date";

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

