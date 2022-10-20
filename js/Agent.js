/*
    Création de la classe Agent 
*/

class Agent
{
    /*
        Agent prend un constructeur avec des abscisses ordonnées , le tableau et une méthode bouger
    */ 
    constructor(x,y,tableau)
    {
        this.x = x
        this.y = y
        this.tableau = tableau
        this.bouger(0,0)
    }

    /*
        Fonction bouger
    */
    bouger(x,y)
    {
        /*
        this.tableau.matrice[this.x][this.y] = 0
        if(this.tableau.matrice[this.x+x][this.y+y] == 0)*/
        this.tableau.matrice[this.x][this.y] = 1
        if(this.tableau.matrice[this.x+x][this.y+y] == 1 || this.tableau.matrice[this.x+x][this.y+y] == 3)
        {
              this.x += x
              this.y += y
        }
            this.tableau.matrice[this.x][this.y] = 2
            this.tableau.ModifTerrain(this.tableau.matrice)
            console.log(this.x + "," + this.y)
            return
    }
}