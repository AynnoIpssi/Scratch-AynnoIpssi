export function initCategoriesPanel(containerId, onCategorySelected) {
    const panel = document.getElementById(containerId);
    panel.innerHTML = '';

    // Liste de toutes les catégories
    const categories = [
        { id: 'movement', label: 'Mouvement' },
        { id: 'logic', label: 'Logique' },
        { id: 'events', label: 'Événements' },
        { id: 'variables', label: 'Variables' }
    ];

    categories.forEach(cat => {
        const btn = document.createElement('div');
        btn.classList.add('category');
        btn.textContent = cat.label;

        btn.addEventListener('click', () => {
            onCategorySelected(cat.id); // ← envoie l'id au BlocksPanel
        });

        panel.appendChild(btn);
    });
}