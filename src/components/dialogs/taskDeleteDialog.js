import '../../styles/taskDeleteDialog.css';
import { todoLists, todoTaskPanels, todoTasks } from '../../data/data';
import { getMainContent } from '../main/main';

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
    dialog.id = 'details-dialog';
    dialogHeaderContainer.id = 'dialog-header-container';
    logoContainer.id = 'logo-container';

    //Assignmet of class selectors to dialog elements
    deleteQuestion.classList.add('delete-field');
    deleteFormButtons.classList.add('delete-form-buttons');

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
        const mainContent = getMainContent();
        const mainContentPanels= Array.from(mainContent.children);

        mainContentPanels.forEach(panel => {
            if(+panel.dataset.id === task.id) {
                mainContent.removeChild(panel);
            }
        });

        delete todoTasks[task.id];
        delete todoTaskPanels[task.id];

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