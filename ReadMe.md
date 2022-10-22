Le BUT : 

* Création d'un maze game (labyrinthe)
* Un agent avance vers un trésor 
* L'agent peut se déplacer seul 
* L'agent peut bouger des murs ou d'autres plateformes

Environnement :
* Matrice
* Cases vides (x,y)
* Murs (x,y)

Action :
* Bouger / se déplacer 

Pour le lancer : 
* Lancer la page game sur un naviguateur web 


A* --> Appris en IA Symbolique

Explications d'astra js utilisé

Il y a trois fonctions que nous suivons pour les nœuds que nous examinons :

    g(x) : Le coût total de l’accès à ce noeud (assez simple). Si nous atteignons un nœud pour la première fois ou atteignons un nœud en moins de temps qu’il n’en faut actuellement, alors mettez à jour le g(x) au coût pour atteindre ce nœud.

    h(x) : Le temps estimé pour atteindre la fin du noeud courant. Ceci est également appelé heuristique. Nous devons le mettre à jour en ligne si ce n’est pas déjà fait, car la distance jusqu’à l’arrivée ne changera pas même si le chemin que nous avons pris pour arriver à un nœud change.

    f(x) : Simplement g(x) + h(x). Plus le f(x) est bas, mieux c’est.  le meilleur noeud est celui qui prend le moins de temps total pour arriver à et pour arriver à la fin. Donc, un nœud qui n’a pris qu’un pas pour arriver et 5 pour arriver à la fin est plus idéal qu’un nœud qui a pris 10 pour arriver et seulement 1 pour arriver à la fin.