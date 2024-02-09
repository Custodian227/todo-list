import '../styles/index.css';
import { createContentElement, getContentElement } from "../components/content/contentElement";
import { createMainContent } from "../components/main/main";
import { createSidebar } from "../components/sidebar/sidebar";

import { createAddTaskDialog } from "../components/dialogs/taskAddDialog";

export function initializeIndexPage() {
    document.body.appendChild(createAddTaskDialog());

    createContentElement();
    const content = getContentElement();

    content.appendChild(createSidebar());
    content.appendChild(createMainContent());
}