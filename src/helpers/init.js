import '../styles/index.css';
import { createContentElement, getContentElement } from "../components/content/contentElement";
import { createTaskMainContent } from "../components/main/main";
import { createSidebar } from "../components/sidebar/sidebar";

export function initializeIndexPage() {
    createContentElement();
    const content = getContentElement();

    content.appendChild(createSidebar());
    content.appendChild(createTaskMainContent());
}