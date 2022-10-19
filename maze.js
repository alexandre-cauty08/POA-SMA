
// Matrice 20 par 20 qui représente le terrain 
let matrice = [
    [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0],
    [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1],
    [0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0],
    [0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0],
    [0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
    [0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ]

// Positionnement du joueur de départ
let joueur = [3,7];
bouger(0,0)
ModifTerrain(matrice, 20,20)

/* Cette fonction change/modifie le terrain 

Elle prend en paramètre un terrain (matrice)
Longeur et largeur de la matrice

*/

function ModifTerrain(matrice,x,y) 
{
  // Variable balise HTML  
  var canvas = document.getElementById('game');
  // Condition context
  if (canvas.getContext) 
  {
    
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 501, 501);

    // Boucle pour remplissage de la matrice
    for (var i = 0; i < x; i++) 
    {
      for (var j = 0; j < y; j++) 
      {
        // Condition si = 0 alors blanc pour représenter le terrain libre
        if(matrice[i][j] == 0)
        {
          ctx.fillStyle = "white";
          ctx.fillRect(25*j+1, 25*i+1, 24, 24);
        }
        // Condition si = 1 alors noir pour représenter le terrain block
        if(matrice[i][j] == 1)
        {
            ctx.fillStyle = "black";
            ctx.fillRect(25*j+1, 25*i+1, 24, 24);
        }
        // Condition si = 1 alors bleu pour représenter 
          if(matrice[i][j] == 2){
            ctx.fillStyle = "blue";
            ctx.fillRect(25*j+1, 25*i+1, 24, 24);
          }
      }
    }
  }
}


/* 
    Cette fonction permet au joueur de bouger   
*/
function bouger(x,y)
{
  matrice[joueur[0]][joueur[1]] = 0
  if(matrice[joueur[0]+x][joueur[1]+y] == 0)
  {
    joueur[0] += x
    joueur[1] += y
  }
  matrice[joueur[0]][joueur[1]] = 2
  ModifTerrain(matrice, 20,20)
  console.log(joueur[0] + "," + joueur[0])
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
    bouger(-1,0)
  }

  if (touche === 's' || touche === 'ArrowDown') 
  {
    bouger(1,0)
  }

  if (touche === 'q' || touche === 'ArrowLeft') 
  {
    bouger(0,-1)
  }

  if (touche === 'd' || touche === 'ArrowRight') 
  {
    bouger(0, 1)
  }
}

document.addEventListener('keydown', (event) => {
  console.log("clic")
  const touche = event.key;
  clavier(touche)
})