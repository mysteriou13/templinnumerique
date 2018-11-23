
//fonction pour génére la sequence de touche aléoire //
function random(niv){

var couleur =['blue','red','green','orange','yellow','purple','pink'];

//nombre du niveau pour le diffulté	
var niveau = niv;

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

if(nb != null){

var buttonid  = document.getElementById(nb);

buttonid.style.backgroundColor = couleur[buttonid.id];

}

}

function niveau(niv,a){
var n = -1;

while(n != niv){
n++;
 

setTimeout(function(){affichage(a,a[n++]);}, 1000);

setTimeout(function(){clean(a);}, 1); 



}


}

function clean(tab){
var c = 0;
var debut = 0;
var fin = 6;	

alert(tab[0]);

document.getElementById(tab[0]).style.backgroundColor = null;

}

function clickuser(nbclick,click,id,niv,nbniv){

var nbniveau = document.getElementById("nbniveau");

nbniveau.innerHTML = nbniv; 






 }
