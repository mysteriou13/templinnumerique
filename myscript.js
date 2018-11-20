
//fonction pour génére la sequence de touche aléoire //
function random(){

var couleur =['blue','red','green','orange','yellow','purple','pink'];

//nombre du niveau pour le diffulté	
var niveau = 2;

//stockage de la sequence proposé par le jeu	
var tabordi = [];

//stockage des couleur
var tabcouleur = [];

//recuperation de l'id du buttion 
var buttonid  = null;

var debut = 0;


//boucle qui genere la séquence alaétoire	
while(debut <= niveau ){

nbrandom = Math.floor(Math.random() * 7);

debut++;

tabordi.push(nbrandom);

}



return tabordi;

}

function affichage(tab,nb){

var couleur =['blue','red','green','orange','yellow','purple','pink'];


var buttonid  = document.getElementById(nb);

buttonid.style.backgroundColor = couleur[buttonid.id];

}

function clean(nb){

var button =  document.getElementById(nb);

button.style.backgroundColor = null;

}

