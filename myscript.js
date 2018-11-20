
//fonction pour génére la sequence de touche aléoire //
function random(){

var couleur =['blue','red','green','orange','yellow','purple','pink'];

//nombre du niveau pour le diffulté	
var niveau = 3;

//stockage de la sequence proposé par le jeu	
var tabordi = [];

//stockage des couleur
var tabcouleur = [];

//recuperation de l'id du buttion cliké


var debut = 0;


//boucle qui genere la séquence alaétoire	
while(debut <= niveau ){

nbrandom = Math.floor(Math.random() * 5);

debut++;

tabordi.push(nbrandom);

}

debut  = 0;

while(debut <= niveau){

debut++;

tabcouleur.push(couleur[tabordi[debut]]);

}



}


