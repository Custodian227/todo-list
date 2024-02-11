import '../../styles/listEditDialog.css';
import { todoListPanels, todoLists } from "../../data/data";
import { getNavListContainer } from '../navigation/navigation';

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

    //Assignment of id selectors to dialog elements 
    listDialog.id = 'edit-list-dialog';
    closeDialogButtonContainer.id = 'close-button-container';
    closeDialogButton.id = 'close-button';
    dialogHeaderContainer.id = 'dialog-header-container';
    logoContainer.id = 'logo-container';
    titleInput.id = 'title-input';

    //Assignment of class selectors to dialog elements
    titleField.classList.add('edit-list-field');
    titleLabel.classList.add('edit-list-label-margin');
    formButtons.classList.add('edit-list-form-buttons');

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
        todoLists[list.id].title = titleInput.value;

        const listPanel = todoListPanels[list.id];

        //The position of the task title name inside the task panel
        listPanel.children[0].children[0].textContent = list.title;
 
        //The position of the list inside the navigation list container 
        getNavListContainer().children[list.id].textContent = `# ${titleInput.value}`;;

        document.body.removeChild(listDialog);
    });

    closeDialogButton.addEventListener('click', () => {
        listDialog.close();
        document.body.removeChild(listDialog);
    });

    return listDialog;
}