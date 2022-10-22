
// Matrice 20 par 20 qui représente le terrain 
let matrice = [
[1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1],
[1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0],
[1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1],
[1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1],
[1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,0,3,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
]

// Positionnement du joueur de départ
//var board = new Tableau(matrice)


var tableau = new Tableau(matrice)
var agent = new Agent(0, 0, tableau)

/*
  Fonction play qui permet au joueur d'aller directement au point d'arrivée 
  Utilisation : An implementation of the A* Search Algorithm in JavaScript
*/

async function play()
{
  var graph = new Graph(matrice);
  var debut = graph.grid[agent.x][agent.y];
  var fin = graph.grid[flagPosition.tresorX][flagPosition.tresorY];

  const timeur = ms => new Promise(res => setTimeout(res, ms))

  var result = astar.search(graph, debut, fin);
  console.log(result)
  for(let i = 0; i < result.length; i++)
  {
    console.log(result[i].x - agent.x, result[i].y - agent.y)
    agent.bouger(result[i].x - agent.x, result[i].y - agent.y)
    await timeur(69);

  }
}
/*
  Fonction qui rend un nombre aléatoire 
*/
function aleatoire(min,max) 
{
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

/*
  Génération d'une map aléatoire
*/
function GenerationMapAleatoire(matrice, agent)
{
  
  let tresor = 0;
  let tresorX;
  let tresorY;
/*
  Deux boucles pour générer une map aléatoire
*/
  for (var i = 19; i >= 0; i--) 
  {
    for (var j = 19; j >= 0; j--) 
    {
      /*
        On cherche aléatoirement un nombre compris entre 0 et 3  --> mur 
        On cherche aléatoirement un nombre compris entre 0 et 100  --> trésor 
      */
      let mur_aleatoire = aleatoire(0,3)
      let tresor_aleatoire = aleatoire(0,100)

      /*
        Si le nombre = 0 donc mur
        Si le nombre = 1 donc cases
      */
      if (mur_aleatoire == 0) 
      {
        matrice[i][j] = 0
      }
      else
      {
        matrice[i][j] = 1;
      }
      if (tresor_aleatoire == 2 && tresor == 0) 
      {
        tresor = 1;
        matrice[i][j] = 3;
        tresorX = i
        tresorY = j

      }
    }
  }
  if(tresor == 0)
  {
    matrice[19][19] = 3;
    tresorX = 19
    tresorY = 19
  }
  matrice[agent.x][agent.y] = 2;

  tableau.ModifTerrain();
  return {tresorX, tresorY}
}


let flagPosition = GenerationMapAleatoire(matrice, agent)

function nouvelle_map()
{
  flagPosition = GenerationMapAleatoire(matrice, agent)
}

/*
    Utilisation du clavier pour faire bouger le perso
*/
function clavier(touche)
{
  /* 
    condition pour que le joueur puisse avancer 
    Par exemple s'il touche z, -1 pour x et 0 pour y qui ne bouge pas
  
  */
  if (touche === 'z' || touche === 'ArrowUp') 
  {
    agent.bouger(-1,0)
  }

  if (touche === 's' || touche === 'ArrowDown') 
  {
    agent.bouger(1,0)
  }

  if (touche === 'q' || touche === 'ArrowLeft') 
  {
    agent.bouger(0,-1)
  }

  if (touche === 'd' || touche === 'ArrowRight') 
  {
    agent.bouger(0, 1)
  }
  if( touche === 'p')
  {
    play()
  }
  if(touche === 'n')
  {
    nouvelle_map()
  }
}

document.addEventListener('keydown', (event) => {
  const touche = event.key;
  clavier(touche)
})