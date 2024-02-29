import './taskDeleteDialog.css';
import { getStorageIndividualTasks, updateStorageIndividualTasks } from '../../../../data/data';
import { getContentElement } from '../../../content/contentElement';
import { loadIndividualTasks, loadThisWeekTasks, loadTodayTasks } from '../../../../helpers/load';

export function createTaskDeleteDialog(task) {
    const dialog = document.createElement('dialog');
    const form = document.createElement('form');

    const dialogHeaderContainer = document.createElement('div');
    const logoContainer = document.createElement('div');
    const dialogHeader = document.createElement('h2');

    const deleteQuestion = document.createElement('p');

    const deleteFormButtons = document.createElement('div');
    const yesButton = document.createElement('button');
    const noButton = document.createElement('button');

    //Assignemnt of id selectors to dialog elements
    dialog.id = 'task-delete-dialog';
    dialogHeaderContainer.id = 'trd-dialog-header-container';
    logoContainer.id = 'trd-logo-container';

    //Assignmet of class selectors to dialog elements
    deleteQuestion.classList.add('trd-delete-field');
    deleteFormButtons.classList.add('trd-delete-form-buttons');

    //Form element properties
    yesButton.type = 'button';
    noButton.type = 'button';

    //Assigning text values to dialog elements
    dialogHeader.textContent = 'Delete';
    deleteQuestion.textContent = 'Are you sure you want to delete this item?';
    yesButton.textContent = 'Yes';
    noButton.textContent = 'No';

    //Attaching an event listener to the close dialog button
    yesButton.addEventListener('click', () => {
        const storageIndividualTasks = getStorageIndividualTasks(); 
        delete storageIndividualTasks[task.id];

        //Update the changes made to the individual task array
        updateStorageIndividualTasks(storageIndividualTasks);

        const contentElement = getContentElement();

        if(contentElement.children[1].id == 'task-main-content') {
            loadIndividualTasks();
        }
        if(contentElement.children[1].id == 'today-tasks-main-content') {
            loadTodayTasks();
        }
        if(contentElement.children[1].id == 'this-week-tasks-main-content') {
            loadThisWeekTasks();
        }

        document.body.removeChild(dialog);
    });

    noButton.addEventListener('click', () => {
        dialog.close();
        document.body.removeChild(dialog);
    });

    //Creating the structure of the dialog
    dialog.appendChild(form);
    form.appendChild(dialogHeaderContainer);

    dialogHeaderContainer.appendChild(logoContainer);
    dialogHeaderContainer.appendChild(dialogHeader);

    form.appendChild(deleteQuestion);
    form.appendChild(deleteFormButtons);

    deleteFormButtons.appendChild(yesButton);
    deleteFormButtons.appendChild(noButton);

    return dialog;
}