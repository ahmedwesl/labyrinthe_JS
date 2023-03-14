let size=5;

// Sélectionnez l'élément parent qui contiendra la grille
let parent = document.getElementById('grid-container');


for (let j = 0; j < size; j++) {
    // Créer un élément div pour chaque conteneur de ligne
    let row = document.createElement('div');
    row.classList.add('row'); // Ajouter une classe pour styliser la ligne

    // Créer une boucle pour créer 3 cases dans chaque ligne
    for (let i = 0; i < size; i++) {
        // Créer un élément div pour chaque case
        let cell = document.createElement('div');
        cell.classList.add('cell'); // Ajouter une classe pour styliser la case
        cell.setAttribute('id', 'cell-' + ((j * size) + i + 1)); // Ajouter un ID unique à chaque div
        // Ajouter un numéro à chaque div
        cell.innerText = (j * size) + i + 1;

        // Ajouter la case au parent
        row.appendChild(cell);
    }

    // Ajouter la ligne au parent
    parent.appendChild(row);
}


var tableau = data.labyrinthe[0][size]["ex-1"];


tableau.forEach(function(element) {

    var cellId = "cell-" + ((element.posY * size) + element.posX + 1);


    var cellDiv = document.querySelector("#" + cellId);


    if (element.walls[0]) {
        cellDiv.style.borderTop = "3px solid purple";
    }
    if (element.walls[1]) {
        cellDiv.style.borderRight = "3px solid purple";
    }
    if (element.walls[2]) {
        cellDiv.style.borderBottom = "3px solid purple";
    }
    if (element.walls[3]) {
        cellDiv.style.borderLeft = "3px solid purple";
    }
     if (element.entrance == true ) {
         cellDiv.style.backgroundColor = " red";
    }

    if (element.exit == true ) {
        cellDiv.style.backgroundColor = " green";
    }
});
