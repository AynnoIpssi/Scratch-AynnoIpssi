import { blocksCatalog } from '../../data/blocksCatalog.js';
import { createBlockElement } from '../components/BlockView.js';

let container;

export function initBlocksPanel(containerId) {
    container = document.getElementById(containerId);
}

export function showBlocksForCategory(categoryId) {
    container.innerHTML = ''; // vider les blocks existants

    // Filtrer les blocks selon la catégorie
    const filteredBlocks = blocksCatalog.filter(b => b.category === categoryId);

    filteredBlocks.forEach(b => {
        const blockEl = createBlockElement(b);
        container.appendChild(blockEl);
    });
}