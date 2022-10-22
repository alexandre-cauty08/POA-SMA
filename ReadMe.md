* Création d'un maze game (labyrinthe)
* Un agent avance vers un trésor 
* L'agent peut se déplacer seul 
* L'agent peut bouger des murs ou d'autres plateformes



Ce qui fonctionne :
* Création d'une matrice 20,20
* Un joueur qui se déplace sur une matrice vers un trésor à l'aide de z,q,s,d
* Implémentation d'un search algorithme A* astra.js en utilisant la touche p, le joueur se rend directement au trésor


Pour le lancer : 
* Lancer la page game sur un naviguateur web 


A* --> Appris en IA Symbolique
Explications d'astra js utilisé
Il y a trois fonctions que nous suivons pour les nœuds que nous examinons :

    g(x) : Le coût total de l’accès à ce noeud (assez simple). Si nous atteignons un nœud pour la première fois ou atteignons un nœud en moins de temps qu’il n’en faut actuellement, alors mettez à jour le g(x) au coût pour atteindre ce nœud.

    h(x) : Le temps estimé pour atteindre la fin du noeud courant. Ceci est également appelé heuristique. Nous devons le mettre à jour en ligne si ce n’est pas déjà fait, car la distance jusqu’à l’arrivée ne changera pas même si le chemin que nous avons pris pour arriver à un nœud change. Remarque : Il existe de nombreuses façons de deviner à quelle distance vous êtes de la fin, j’utilise la distance de Manhattan dans cette implémentation.

    f(x) : Simplement g(x) + h(x). Plus le f(x) est bas, mieux c’est. Pensez-y comme ceci : le meilleur noeud est celui qui prend le moins de temps total pour arriver à et pour arriver à la fin. Donc, un nœud qui n’a pris qu’un pas pour arriver et 5 pour arriver à la fin est plus idéal qu’un nœud qui a pris 10 pour arriver et seulement 1 pour arriver à la fin.