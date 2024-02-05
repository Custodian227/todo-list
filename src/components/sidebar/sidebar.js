import { createHeader } from "../header/header";
import { createNavigation } from "../navigation/navigation";

export function createSidebar() {
    const sidebar = document.createElement('div');
    sidebar.id = 'sidebar';

    sidebar.appendChild(createHeader());
    sidebar.appendChild(createNavigation());

    return sidebar;
}


