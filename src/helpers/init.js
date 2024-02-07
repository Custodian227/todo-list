import '../styles/index.css';
import { createContentElement, getContentElement } from "../components/content/contentElement";
import { createMainContent } from "../components/main/main";
import { createSidebar } from "../components/sidebar/sidebar";

import { createTaskDialog } from "../components/dialogs/taskDialog";

export function initializeIndexPage() {
    document.body.appendChild(createTaskDialog());

    createContentElement();
    const content = getContentElement();

    content.appendChild(createSidebar());
    content.appendChild(createMainContent());
}