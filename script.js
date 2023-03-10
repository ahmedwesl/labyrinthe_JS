// Sélectionnez l'élément parent qui contiendra la grille
let parent = document.getElementById('grid-container');

// Créez une boucle pour créer 100 cases (10x10)
for (let i = 0; i < 100; i++) {
// Créez un élément div pour chaque case
    let cell = document.createElement('div');
    cell.classList.add('cell'); // Ajoutez une classe pour styliser la case
    cell.setAttribute('id', 'cell-' + (i + 1)); // Ajoutez un ID unique à chaque div
// Ajoutez un numéro à chaque div
    cell.innerText = i + 1;

// Ajoutez la case au parent
    parent.appendChild(cell);

// Si i est un multiple de 10, ajoutez une classe pour revenir à la ligne
    if ((i + 1) % 10 === 0) {
        cell.classList.add("new-line");
    }
}