const SIZE=7;

// Sélectionnez l'élément parent qui contiendra la grille
let parent = document.getElementById('grid-container');


for (let j = 0; j < SIZE; j++) {
    // Créer un élément div pour chaque conteneur de ligne
    let row = document.createElement('div');
    row.classList.add('row'); // Ajouter une classe pour styliser la ligne

    // Créer une boucle pour créer 3 cases dans chaque ligne
    for (let i = 0; i < SIZE; i++) {
        // Créer un élément div pour chaque case
        let cell = document.createElement('div');
        cell.classList.add('cell'); // Ajouter une classe pour styliser la case
        cell.setAttribute('id', 'cell-' + ((j * SIZE) + i + 1)); // Ajouter un ID unique à chaque div
        // Ajouter un numéro à chaque div
        cell.innerText = (j * SIZE) + i + 1;

        // Ajouter la case au parent
        row.appendChild(cell);
    }

    // Ajouter la ligne au parent
    parent.appendChild(row);
}


var tableau = data.labyrinthe[0][SIZE]["ex-1"];


tableau.forEach(function(element) {

    var cellId = "cell-" + ((element.posY * SIZE) + element.posX + 1);


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


let maze = data.labyrinthe[0][SIZE]["ex-1"]; // sélectionner le labyrinthe souhaité
let start = 0; // sélectionner le sommet de départ souhaité
let path = DFS_iterative(maze, start); // trouver le chemin de start à la sortie dans le labyrinthe



function DFS_iterative(G, e) {
    let S = []; // créer une pile vide
    let visited = new Set(); // créer un ensemble vide pour stocker les sommets visités
    let visitedNodes = []; // créer un tableau vide pour stocker les sommets visités

    S.push(e); // insérer e dans la pile

    while (S.length > 0) { // tant que la pile n'est pas vide
        let v = S.pop(); // retirer le sommet v de la pile pour le visiter ensuite

        if (!visited.has(v)) { // si v n'a pas été visité
            visited.add(v); // marquer v comme visité
            visitedNodes.push(v); // ajouter v au tableau des sommets visités
            console.log("Sommet visité : ", v+1); // afficher le sommet visité dans la console

            if (G[v].exit) { // si v est la sortie
                console.log("Case d'arrivée : ", v+1); // afficher la case d'arrivée dans la console
                console.log(visitedNodes); // afficher les sommets visités
                return getPath(e, v, G); // renvoyer le chemin de e à v
            }



            // pour chaque voisin w de v dans G
            console.log(G)
            for (let w of getNeighbors(v, G)) {
                console.log(w)
                if (!visited.has(w)) { // si w n'a pas été visité
                    G[w].parent = v; // marquer v comme parent de w
                    S.push(w); // insérer w dans la pile
                }
            }
        }
    }

    return undefined; // si la sortie n'est pas trouvée, renvoyer Undefined
}


// fonction pour renvoyer les voisins d'un sommet v dans G
function getNeighbors(v, G) {

    const { posY, posX, walls } = G[v];
    const neighbors = [];
    const size_x = SIZE;
    const size_y = SIZE;

    if (posY > 0 && !G[v].walls[0]) neighbors.push((posY - 1) * size_x + posX);
    if (posX < size_x -1 && !G[v].walls[1]) neighbors.push(posY * size_x + posX+1);
    if (posY < size_y-1 && !G[v].walls[2]) neighbors.push((posY + 1) * size_x + posX);
    if (posX > 0 && !G[v].walls[3]) neighbors.push(posY * size_x + posX -1);

    return neighbors;
}

// fonction pour renvoyer le chemin de e à v dans G
function getPath(e, v, G) {
    let path = [v];

    while (v !== e) { // remonter le chemin depuis v jusqu'à e
        v = G[v].parent;
        path.unshift(v);
    }

    return path;
}



