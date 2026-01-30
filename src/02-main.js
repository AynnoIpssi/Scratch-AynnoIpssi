import { initCategoriesPanel } from './ui/panels/CategoriesPanel.js';
import { initBlocksPanel, showBlocksForCategory } from './ui/panels/BlocksPanel.js';

initCategoriesPanel('categories', (categoryId) => {
    showBlocksForCategory(categoryId);
});

initBlocksPanel('blocks');

// Optionnel : afficher les blocks d'une catégorie par défaut au démarrage
showBlocksForCategory('movement');
