import { currentListIndex, incrementCurrentListIndex, todoListPanels, todoLists } from '../../data/data';
import { createList } from '../../factories/list';
import '../../styles/listAddDialog.css';
import { getContentElement } from '../content/contentElement';
import { createListPanel } from '../list/listPanel';
import { getListMainContent, getMainContent } from '../main/main';
import { getNavListContainer } from '../navigation/navigation';

export function createAddListDialog() {
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

    addListButton.type = 'button';
    resetFormButton.type = 'reset';

    //Assignment of id selectors to dialog elements 
    listDialog.id = 'add-list-dialog';
    closeDialogButtonContainer.id = 'close-button-container';
    closeDialogButton.id = 'close-button';
    dialogHeaderContainer.id = 'dialog-header-container';
    logoContainer.id = 'logo-container';
    titleInput.id = 'title-input';

    addListButton.id = 'add-list-button';

    //Assignment of class selectors to dialog elements
    titleField.classList.add('list-add-field');
    titleLabel.classList.add('list-add-label-margin');
    formButtons.classList.add('list-add-form-buttons');

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

    formButtons.appendChild(addListButton);
    formButtons.appendChild(resetFormButton);

    //Adding event listeners to buttons
    addListButton.addEventListener('click', () => {
        const listTitle = titleInput.value;
        const listTasks = [];

        const list = createList(currentListIndex, listTitle, listTasks);
        incrementCurrentListIndex();

        todoLists.push(list);

        const listPanel = createListPanel(list);
        todoListPanels.push(listPanel);

        const listContainerList = document.createElement('span');
        listContainerList.textContent = `# ${titleInput.value}`;

        getNavListContainer().appendChild(listContainerList);

        if(getContentElement().children[1].id == 'list-main') {
            getListMainContent().appendChild(listPanel);
        }

        clearAddListForm(titleInput);

        listDialog.close();
    });

    closeDialogButton.addEventListener('click', () => {
        listDialog.close();
    });

    return listDialog;
}

export function getAddListDialog() {
    return document.querySelector('#add-list-dialog')
}

function clearAddListForm(titleInput) {
    titleInput.value = '';
}
