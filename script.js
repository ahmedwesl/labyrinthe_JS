const SIZE=5;

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
        cellDiv.style.borderTop = "2px solid purple";
    }
    if (element.walls[1]) {
        cellDiv.style.borderRight = "2px solid purple";
    }
    if (element.walls[2]) {
        cellDiv.style.borderBottom = "2px solid purple";
    }
    if (element.walls[3]) {
        cellDiv.style.borderLeft = "2px solid purple";
    }
     if (element.entrance == true ) {
         var img = document.createElement("img");
         img.src = "harry.webp";
         img.style.width = "100%";
         img.style.height = "100%";
         cellDiv.appendChild(img);
    }

    if (element.exit == true) {
        var img = document.createElement("img");
        img.src = "coupe.jpg";
        img.style.width = "100%";
        img.style.height = "100%";        cellDiv.appendChild(img);
    }
});

//
// let maze = data.labyrinthe[0][SIZE]["ex-1"]; // sélectionner le labyrinthe souhaité
// let start = 0; // sélectionner le sommet de départ souhaité
// let path = DFS_iterative(maze, start); // trouver le chemin de start à la sortie dans le labyrinthe
//
// function DFS_iterative(labyrinthe, entree) {
//     let Stack = []; // créer une pile vide
//     let visited = new Set(); // créer un ensemble vide pour stocker les sommets visités
//     let visitedNodes = []; // créer un tableau vide pour stocker les sommets visités
//     let pathToExit = []; // créer un tableau vide pour stocker le chemin direct à la sortie
//
//     Stack.push(entree); // insérer entree dans la pile
//
//     while (Stack.length > 0) { // tant que la pile n'est pas vide
//         let positionactuelle = Stack.pop(); // retirer le sommet positionActuelle de la pile pour le visiter ensuite
//
//         if (!visited.has(positionactuelle)) { // si v n'a pas été visité
//
//             visited.add(positionactuelle); // marquer v comme visité
//             visitedNodes.push(positionactuelle); // ajouter positionActuelle au tableau des sommets visités
//             console.log("Sommet visité : ", positionactuelle+1); // afficher le sommet visité dans la console
//
//             if (labyrinthe[positionactuelle].exit) { // si positionActuelle est la sortie
//                 console.log("Case d'arrivée : ", positionactuelle+1); // afficher la case d'arrivée dans la console
//                 console.log("ici", visitedNodes); // afficher les sommets visités
//                 let currentPath = getPath(entree, positionactuelle, labyrinthe); // obtenir le chemin de entree à positionActuelle
//                 if (pathToExit.length === 0 || currentPath.length < pathToExit.length) { // mettre à jour pathToExit si le nouveau chemin est plus court
//                     pathToExit = currentPath;
//                 }
//             }
//
//             // pour chaque voisin w de v dans G
//             console.log(labyrinthe)
//             for (let w of getNeighbors(positionactuelle, labyrinthe)) {
//                 console.log(w)
//                 if (!visited.has(w)) { // si w n'a pas été visité
//                     labyrinthe[w].parent = positionactuelle; // marquer v comme parent de w
//                     Stack.push(w); // insérer w dans la pile
//                 }
//             }
//         }
//     }
//
//     console.log("Chemin direct à la sortie : ", pathToExit); // afficher le chemin direct s'il existe
// //
//     return pathToExit.length > 0 ? pathToExit : undefined; // renvoyer le chemin de entree à la sortie s'il existe, sinon undefined
// }
//



let maze1 = data.labyrinthe[0][SIZE]["ex-1"]; // sélectionner le labyrinthe souhaité
let start1 = 0; // sélectionner le sommet de départ souhaité
let path = BFS(maze1, start1); // trouver le chemin de start à la sortie dans le labyrinthe

function BFS(labyrinthe, entree) {
    let Q = []; // créer une queue vide
    let visited = new Set(); // créer un ensemble vide pour stocker les sommets visités
    let visitedNodes = []; // créer un tableau vide pour stocker les sommets visités
    let pathToExit = []; // créer un tableau vide pour stocker le chemin direct à la sortie

    Q.push(entree); // insérer entree dans la queue

    while (Q.length > 0) { // tant que la queue n'est pas vide
        let positionActuelle = Q.shift(); // retirer le sommet positionActuelle de la queue pour le visiter ensuite

        if (!visited.has(positionActuelle)) { // si positionActuelle n'a pas été visité

            visited.add(positionActuelle); // marquer positionActuelle comme visité
            visitedNodes.push(positionActuelle); // ajouter positionActuelle au tableau des sommets visités
            console.log("Sommet visité : ", positionActuelle+1); // afficher le sommet visité dans la console

            if (labyrinthe[positionActuelle].exit) { // si positionActuelle est la sortie
                console.log("Case d'arrivée : ", positionActuelle+1); // afficher la case d'arrivée dans la console
                // console.log("ici", visitedNodes); // afficher les sommets visités
                let currentPath = getPath(entree, positionActuelle, labyrinthe); // obtenir le chemin de entree à positionActuelle
                if (pathToExit.length === 0 || currentPath.length < pathToExit.length) { // mettre à jour pathToExit si le nouveau chemin est plus court
                    pathToExit = currentPath;
                }
                return pathToExit; // retourner le chemin direct de entree à la sortie
            }

            // pour chaque voisin w de positionActuelle dans labyrinthe
            for (let w of getNeighbors(positionActuelle, labyrinthe)) {
                if (!visited.has(w)) { // si w n'a pas été visité
                    labyrinthe[w].parent = positionActuelle; // marquer positionActuelle comme parent de w
                    Q.push(w); // ajouter w à la queue
                }
            }
        }
    }

    console.log("Chemin direct à la sortie : ", pathToExit); // afficher le chemin direct s'il existe
    return pathToExit.length > 0 ? pathToExit : undefined; // renvoyer le chemin de entree à la sortie s'il existe, sinon undefined
}


// fonction pour renvoyer les voisins d'un sommet position actuelle dans labyrinthe
function getNeighbors(positionactuelle, labyrinthe) {

    const { posY, posX, walls } = labyrinthe[positionactuelle];
    const neighbors = [];
    const size_x = SIZE;
    const size_y = SIZE;

    if (posY > 0 && !labyrinthe[positionactuelle].walls[0]) neighbors.push((posY - 1) * size_x + posX);
    if (posX < size_x -1 && !labyrinthe[positionactuelle].walls[1]) neighbors.push(posY * size_x + posX+1);
    if (posY < size_y-1 && !labyrinthe[positionactuelle].walls[2]) neighbors.push((posY + 1) * size_x + posX);
    if (posX > 0 && !labyrinthe[positionactuelle].walls[3]) neighbors.push(posY * size_x + posX -1);

    return neighbors;
}

// fonction pour renvoyer le chemin de entrée à positionActuelle dans labyrinthe
function getPath(entree, positionactuelle, labyrinthe) {
    let path = [positionactuelle+1];

    while (positionactuelle !== entree) { // remonter le chemin depuis position actuelle jusqu'à entrée
        positionactuelle = labyrinthe[positionactuelle].parent;
        path.unshift(positionactuelle+1);
    }

    return path;
}



