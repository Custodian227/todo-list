import { createContentElement, getContentElement } from "../components/content/contentElement";
import { createMainContent } from "../components/main/main";
import { createSidebar } from "../components/sidebar/sidebar";

export function initializeIndexPage() {
    createContentElement();
    const content = getContentElement();

    content.appendChild(createSidebar());
    content.appendChild(createMainContent())
}