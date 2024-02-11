import '../styles/index.css';
import { createContentElement, getContentElement } from "../components/content/contentElement";
import { createTaskMainContent } from "../components/main/main";
import { createSidebar } from "../components/sidebar/sidebar";

import { createAddTaskDialog } from "../components/dialogs/taskAddDialog";
import { createAddListDialog } from '../components/dialogs/listAddDialog';


export function initializeIndexPage() {
    document.body.appendChild(createAddTaskDialog());
    document.body.appendChild(createAddListDialog());

    createContentElement();
    const content = getContentElement();

    content.appendChild(createSidebar());
    content.appendChild(createTaskMainContent());

}