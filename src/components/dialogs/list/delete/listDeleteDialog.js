import './listDeleteDialog.css';
import { getStorageLists, updateStorageLists, } from '../../../../data/data';
import { loadLists } from '../../../../helpers/load';

export function createListDeleteDialog(list) {
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
    dialog.id = 'list-delete-dialog';
    dialogHeaderContainer.id = 'lrd-dialog-header-container';
    logoContainer.id = 'lrd-logo-container';

    //Assignmet of class selectors to dialog elements
    deleteQuestion.classList.add('lrd-delete-field');
    deleteFormButtons.classList.add('lrd-delete-form-buttons');

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
        const storageLists = getStorageLists();
        delete storageLists[list.id];

        updateStorageLists(storageLists);

        loadLists();

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