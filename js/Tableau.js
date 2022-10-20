/*
    Création de la classe Tableau
*/
class Tableau {

/*
    Constructeur qui prend en paramètre la matrice
*/
	constructor(matrice) 
    {
	  this.x = 20
	  this.y = 20
	  this.matrice = matrice
 	  this.ModifTerrain(this.matrice, this.x, this.y)
	}
/*
    Fonction qui met a jour le tableau
*/
    ModifTerrain() 
    {
    // Variable balise HTML  
    var canvas = document.getElementById('game');
        // Condition context
        if (canvas.getContext) 
        {
            
            var ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, 501, 501);
            
            // Boucle pour remplissage de la matrice
            for (var i = 0; i < this.x; i++) 
            {
                for (var j = 0; j < this.y; j++) 
                {
                    switch (this.matrice[i][j])
                    {
                        case 0:
                            ctx.fillStyle = "black";
                        break;
                        case 1:
                            ctx.fillStyle = "white"; 
                        break;
                        case 2:
                            ctx.fillStyle = "blue";      
                        break;
                        case 3:
                            ctx.fillStyle = "yellow";      
                        break;
            }
                    ctx.fillRect(25*j+1, 25*i+1, 24, 24);
                    /*
                    // Condition si = 0 alors blanc pour représenter le terrain libre
                    // c'était 0 avant
                    if(matrice[i][j] == 1)
                    {
                    ctx.fillStyle = "white";
                    ctx.fillRect(25*j+1, 25*i+1, 24, 24);
                    }
                    // Condition si = 1 alors noir pour représenter le terrain block
                    // c'était 1 avant
                    if(matrice[i][j] == 0)
                    {
                        ctx.fillStyle = "black";
                        ctx.fillRect(25*j+1, 25*i+1, 24, 24);
                    }
                    // Condition si = 1 alors bleu pour représenter 
                    if(matrice[i][j] == 2)
                    {
                        ctx.fillStyle = "blue";
                        ctx.fillRect(25*j+1, 25*i+1, 24, 24);
                    }
                    if(matrice[i][j] == 3)
                    {
                        ctx.fillStyle = "yellow";
                        ctx.fillRect(25*j+1, 25*i+1, 24, 24);
                    }*/
                }
            }
        }
    }
}