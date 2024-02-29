import './listTaskPanel.css';
import { createListTaskDetailsDialog } from '../../dialogs/listTask/details/listTaskDetailsDialog';
import { createEditListTaskDialog } from '../../dialogs/listTask/edit/editListTaskDialog';
import { createListTaskDeleteDialog } from '../../dialogs/listTask/delete/listTaskDeleteDialog';
import { getStorageLists, updateStorageLists } from '../../../data/data';

export function createListTaskPanel(listTask) {
    const panel = document.createElement('div');

    const priorityStripe = document.createElement('div');
    const taskTitleContainer = document.createElement('div');
    const taskDueDateContainer = document.createElement('div');
    const taskCheckboxContainer = document.createElement('div');
    const utilityContainer = document.createElement('div');

    const taskTitle = document.createElement('h3');
    const taskDueDate = document.createElement('span');
    const checkboxContainer = document.createElement('div');
    const checkbox = document.createElement('input');

    const detailsButton = document.createElement('button');
    const editButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    //Assigning properties of elements
    checkbox.type = 'checkbox';

    //Assigning id selectors to panel elements
    panel.id = 'ltp-panel-container';
    priorityStripe.id = 'ltp-priority-stripe';
    taskTitleContainer.id = 'ltp-task-title-container';
    taskDueDateContainer.id = 'ltp-task-due-date-container';
    taskCheckboxContainer.id = 'ltp-task-checkbox-container';
    utilityContainer.id = 'ltp-utility-container';

    //Assigning class selectors to panel elements
    editButton.classList.add('ltp-mid');
    detailsButton.classList.add('ltp-top');
    deleteButton.classList.add('ltp-bottom');

    //Appending task attributes to the panel;
    taskTitle.textContent = listTask.title;
    taskDueDate.textContent = listTask.dueDate;

    if(listTask.priority == 'High') {
        priorityStripe.style.backgroundColor = 'var(--high-priority-color)';
    }
    if(listTask.priority == 'Medium') {
        priorityStripe.style.backgroundColor = 'var(--medium-priority-color)';
    }
    if(listTask.priority == 'Low') {
        priorityStripe.style.backgroundColor = 'var(--low-priority-color)';
    }

    //Saving the state of the checkbox
    if(listTask.status == true) {
        checkbox.checked = true;
    }
    if(listTask.status == false) {
        checkbox.checked = false;
    }

    checkboxContainer.addEventListener('click', () => {
        const storageLists = getStorageLists();

        if(checkbox.checked) {
            listTask.status = true;
            storageLists[listTask.listId].tasks[listTask.id].status = true;
        }
        if(!checkbox.checked) {
            listTask.status = false;
            storageLists[listTask.listId].tasks[listTask.id].status = false;
        }

        updateStorageLists(storageLists);
    })

    //Connecting the panel to the task
    panel.dataset.id = listTask.id;

    //Attaching event listeners to the utility buttons
    detailsButton.addEventListener('click', () => {
        const listTaskDetailsDialog = createListTaskDetailsDialog(listTask);
        document.body.appendChild(listTaskDetailsDialog);
        
        listTaskDetailsDialog.showModal();
    });

    editButton.addEventListener('click', () => {
        const editListTaskDialog = createEditListTaskDialog(listTask);
        document.body.appendChild(editListTaskDialog);

        editListTaskDialog.showModal();
    });

    deleteButton.addEventListener('click', () => {
        const deleteListTaskDialog = createListTaskDeleteDialog(listTask);
        document.body.appendChild(deleteListTaskDialog);

        deleteListTaskDialog.showModal();
    });

    //Creating the structure of the panel
    panel.appendChild(priorityStripe);
    panel.appendChild(taskTitleContainer);
    panel.appendChild(taskDueDateContainer);
    panel.appendChild(taskCheckboxContainer);
    panel.appendChild(utilityContainer);

    taskTitleContainer.appendChild(taskTitle);
    taskDueDateContainer.appendChild(taskDueDate);
    taskCheckboxContainer.appendChild(checkboxContainer);
    checkboxContainer.appendChild(checkbox);

    utilityContainer.appendChild(detailsButton);
    utilityContainer.appendChild(editButton);
    utilityContainer.appendChild(deleteButton);

    return panel;
}
