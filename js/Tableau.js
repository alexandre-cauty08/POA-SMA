MURS = 0
CASES = 1
JOUEUR = 2 
TRESOR = 3

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
        
        var jeu = document.getElementById('game');
		jeu.innerHTML = "";

		let largeur = matrice[0].length;
		console.log("largeur" + largeur);
		
        let vh = Math.round((75/largeur)*100)/100;
		console.log("vh" + vh);
		let colonnes = "";

		for(let i = 0; i<largeur; i++) 
        {
			colonnes += vh+"vh ";
		}

		jeu.style.gridTemplateColumns += colonnes;
		
        for(let ligne of matrice) 
        {
			for(let carreau of ligne) 
            {
				let divcarreau = document.createElement("div");
				jeu.appendChild(divcarreau);
				divcarreau.classList.add("carreau");
				divcarreau.style.height = vh+"vh";

				switch(carreau) 
                {
					case MURS:
						divcarreau.style.backgroundColor = "black";
						break;
					case CASES:
						divcarreau.style.backgroundColor = "white";
						break;
					case JOUEUR:
						divcarreau.style.backgroundColor = "blue";
						divcarreau.classList.add("joueur");
                        break;
					case TRESOR:
						divcarreau.style.backgroundColor = "yellow";
                        divcarreau.classList.add("tresor");
						break;
					default:
						break;
				}
			}
        }
/*
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
*/
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
              /*  }
            }
        }*/
    }
}