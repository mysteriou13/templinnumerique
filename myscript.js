
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

var backcolor = null;

var b1 = -1;

var b2 = 6;

var nbrandom = Math.floor(Math.random() * 6);



//boucle qui genere la séquence alaétoire	
while(debut <= niveau ){

 nbrandom = Math.floor(Math.random() * 6);

debut++;

tabordi.push(nbrandom);

}

debut  = -1;

return tabordi;

}


