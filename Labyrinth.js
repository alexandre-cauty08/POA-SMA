
// Matrice 20 par 20 qui représente le terrain 
let matrice = [
[1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1],
[1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0],
[1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1],
[1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1],
[1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
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



//var tableau = new Tableau(matrice)
//var agent = new Agent(3,7,tableau)*/
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
}

document.addEventListener('keydown', (event) => {
  //console.log("clic")
  const touche = event.key;
  clavier(touche)
})