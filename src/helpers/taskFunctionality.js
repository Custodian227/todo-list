import { createTaskPanel } from "../components/task/taskPanel";
import { currentTaskIndex } from "../data/data";
import { createTask } from "../factories/task";

export function createToDoTask() {
    const taskPanel = createTaskPanel();
    taskPanel.dataset.id = currentTaskIndex;
    
    currentTaskIndex ++;
}