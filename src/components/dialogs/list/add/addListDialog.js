import { getStorageLists, getStorageListsIndex, updateStorageLists, updateStorageListsIndex } from '../../../../data/data';
import { createList } from '../../../../factories/list';
import './addListDialog.css';
import { getContentElement } from '../../../content/contentElement';
import { loadLists } from '../../../../helpers/load';

export function createAddListDialog() {
    //Creating all dialog elements
    const dialog = document.createElement('dialog');
    const form = document.createElement('form');

    const closeDialogButtonContainer = document.createElement('div');
    const closeDialogButton = document.createElement('button');

    const dialogHeaderContainer = document.createElement('div');
    const logoContainer = document.createElement('div');
    const dialogHeader = document.createElement('h2');

    const fieldsContainer = document.createElement('div');

    const titleField = document.createElement('div');
    const titleLabel = document.createElement('label');
    const titleInput = document.createElement('input');

    const formButtons = document.createElement('div');
    const addListButton = document.createElement('button');
    const resetFormButton = document.createElement('button');

    //Assigning text values to dialog elements
    closeDialogButton.textContent = 'X';
    dialogHeader.textContent = 'Add a List';

    titleLabel.textContent = 'Title';

    addListButton.textContent = 'Add';
    resetFormButton.textContent = 'Reset';

    //Form element properties
    form.method = 'dialog';

    titleLabel.for = 'task-title';
    titleLabel.name = 'title';
    titleInput.name = 'title';
    titleInput.type = 'text';

    closeDialogButton.type = 'button';
    addListButton.type = 'button';
    resetFormButton.type = 'reset';

    //Assignment of id selectors to dialog elements 
    dialog.id = 'add-list-dialog';
    closeDialogButtonContainer.id = 'ald-close-button-container';
    closeDialogButton.id = 'ald-close-button';
    dialogHeaderContainer.id = 'ald-dialog-header-container';
    logoContainer.id = 'ald-logo-container';
    titleInput.id = 'ald-title-input';

    addListButton.id = 'ald-add-list-button';

    //Assignment of class selectors to dialog elements
    titleField.classList.add('ald-list-add-field');
    titleLabel.classList.add('ald-list-add-label-margin');
    formButtons.classList.add('ald-list-add-form-buttons');

    //Creating the structure of the dialog
    dialog.appendChild(form);

    form.appendChild(closeDialogButtonContainer);
    form.appendChild(dialogHeaderContainer);
    form.appendChild(fieldsContainer);

    closeDialogButtonContainer.appendChild(closeDialogButton);
    dialogHeaderContainer.appendChild(logoContainer);
    dialogHeaderContainer.appendChild(dialogHeader);

    fieldsContainer.appendChild(titleField);
    fieldsContainer.appendChild(formButtons);

    titleField.appendChild(titleLabel);
    titleField.appendChild(titleInput);

    formButtons.appendChild(addListButton);
    formButtons.appendChild(resetFormButton);

    //Adding event listeners to buttons
    addListButton.addEventListener('click', () => {
        const listTitle = titleInput.value;
        const listTasks = [];

        const storageLists = getStorageLists();
        let storageListsIndex = getStorageListsIndex();

        //Creating a list
        const list = createList(storageListsIndex, listTitle, listTasks, 0);
        storageLists.push(list);

        updateStorageLists(storageLists);

        storageListsIndex++;
        updateStorageListsIndex(storageListsIndex);
        
        if(getContentElement().children[1].id == 'list-main-content') {
            loadLists();
        }

        clearAddListForm(titleInput);
        dialog.close();
        document.body.removeChild(dialog);
    });

    closeDialogButton.addEventListener('click', () => {
        dialog.close();
        document.body.removeChild(dialog);
    });

    return dialog;
}

export function getAddListDialog() {
    return document.querySelector('#add-list-dialog')
}

function clearAddListForm(titleInput) {
    titleInput.value = '';
}
