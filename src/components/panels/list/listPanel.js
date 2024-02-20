import './listPanel.css';
import { createListDeleteDialog } from '../../dialogs/list/delete/listDeleteDialog';
import { createListDetailsDialog } from '../../dialogs/list/details/listDetailsDialog';
import { createEditListDialog } from '../../dialogs/list/edit/editListDialog';
import { getContentElement } from '../../content/contentElement';
import { createListTasksMainContent } from '../../main/main';
import { createListTaskPanel } from '../listTask/listTaskPanel';

export function createListPanel(list) {
    const panel = document.createElement('div');

    const listTitleContainer = document.createElement('div');
    const utilityContainer = document.createElement('div');

    const listTitle = document.createElement('h3');

    const detailsButton = document.createElement('button');
    const editButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    //Assigning id selectors to panel elements
    panel.id = 'lp-panel-container';
    listTitleContainer.id = 'lp-list-title-container';
    utilityContainer.id = 'lp-utility-container';

    //Assigning class selectors to panel elements
    editButton.classList.add('lp-mid');
    detailsButton.classList.add('lp-top');
    deleteButton.classList.add('lp-bottom');

    //Appending list attributes to the panel;
    listTitle.textContent = list.title;

    //Connecting the panel to the list
    panel.dataset.id = list.id;

    listTitleContainer.addEventListener('click', () => {
        const content = getContentElement();
        content.removeChild(content.children[1]);

        const listTasksMainContent = createListTasksMainContent();
        listTasksMainContent.dataset.id = list.id;

        list.tasks.forEach(listTask => {
            listTasksMainContent.children[1].appendChild(createListTaskPanel(listTask));
        });

        content.appendChild(listTasksMainContent);
    });

    //Attaching event listeners to the utility buttons
    detailsButton.addEventListener('click', () => {
        const listDetailsDialog = createListDetailsDialog(list);
        document.body.appendChild(listDetailsDialog);
        
        listDetailsDialog.showModal();
    });

    editButton.addEventListener('click', () => {
        const listEditDialog = createEditListDialog(list);
        document.body.appendChild(listEditDialog);

        listEditDialog.showModal();
    });

    deleteButton.addEventListener('click', () => {
        const listDeleteDialog = createListDeleteDialog(list);
        document.body.appendChild(listDeleteDialog);

        listDeleteDialog.showModal();
    });

    //Creating the structure of the panel
    panel.appendChild(listTitleContainer);
    panel.appendChild(utilityContainer);

    listTitleContainer.appendChild(listTitle);

    utilityContainer.appendChild(detailsButton);
    utilityContainer.appendChild(editButton);
    utilityContainer.appendChild(deleteButton);

    return panel;
}

