import './editListDialog.css';
import { lists } from "../../../../data/data";
import { getNavListContainer } from '../../../navigation/navigation';
import { loadLists } from '../../../../helpers/load';

export function createEditListDialog(list) {
    //Creating all dialog elements
    const listDialog = document.createElement('dialog');
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
    const editTaskButton = document.createElement('button');
    const resetFormButton = document.createElement('button');

    //Assigning text values to dialog elements
    closeDialogButton.textContent = 'X';
    closeDialogButton.type = 'button';
    dialogHeader.textContent = 'Edit a List';

    titleLabel.textContent = 'Title';

    editTaskButton.textContent = 'Edit';
    resetFormButton.textContent = 'Reset';

    //Form element properties
    form.method = 'dialog';

    titleLabel.for = 'list-title';
    titleLabel.name = 'title';
    titleInput.name = 'title';
    titleInput.type = 'text';

    editTaskButton.type = 'button';
    resetFormButton.type = 'reset';
    closeDialogButton.type = 'button'

    //Assignment of id selectors to dialog elements 
    listDialog.id = 'edit-list-dialog';
    closeDialogButtonContainer.id = 'eld-close-button-container';
    closeDialogButton.id = 'eld-close-button';
    dialogHeaderContainer.id = 'eld-dialog-header-container';
    logoContainer.id = 'eld-logo-container';
    titleInput.id = 'eld-title-input';

    //Assignment of class selectors to dialog elements
    titleField.classList.add('eld-edit-list-field');
    titleLabel.classList.add('eld-edit-list-label-margin');
    formButtons.classList.add('eld-edit-list-form-buttons');

    //Creating the structure of the dialog
    listDialog.appendChild(form);

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

    formButtons.appendChild(editTaskButton);
    formButtons.appendChild(resetFormButton);

    titleInput.value = list.title;

    //Adding event listeners to buttons
    editTaskButton.addEventListener('click', () => {
        lists[list.id].title = titleInput.value;

        const navListContainer = getNavListContainer();
        navListContainer.children[list.id].textContent = `# ${titleInput.value}`;
        
        loadLists();

        document.body.removeChild(listDialog);
    });

    closeDialogButton.addEventListener('click', () => {
        listDialog.close();
        document.body.removeChild(listDialog);
    });

    return listDialog;
}