import '../../styles/listPanel.css';
import { createListDetailsDialog } from '../dialogs/listDetailsDialog';

export function createListPanel(list) {
    const panel = document.createElement('div');

    const listTitleContainer = document.createElement('div');
    const utilityContainer = document.createElement('div');

    const listTitle = document.createElement('h3');

    const detailsButton = document.createElement('button');
    const editButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    //Assigning id selectors to panel elements
    panel.id = 'panel-container';
    listTitleContainer.id = 'list-title-container';
    utilityContainer.id = 'utility-container';

    //Assigning class selectors to panel elements
    editButton.classList.add('mid');
    detailsButton.classList.add('top');
    deleteButton.classList.add('bottom');

    //Appending list attributes to the panel;
    listTitle.textContent = list.title;

    //Connecting the panel to the list
    panel.dataset.id = list.id;

    //Attaching event listeners to the utility buttons
    detailsButton.addEventListener('click', () => {
        const listDetailsDialog = createListDetailsDialog(list);
        document.body.appendChild(listDetailsDialog);
        
        listDetailsDialog.showModal();
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
