
//fonction pour génére la sequence de touche aléoire //
function random(niv){
//tableau de couleur de font a apliqué sur les buttons
var couleur =['blue','red','green','orange','yellow','purple','pink'];

//nombre du niveau pour le diffulté	

//stockage de la sequence proposé par le jeu	
var tabordi = [];

//stockage des couleur
var tabcouleur = [];

//stockage des nombres génére alétoirement
var nbrandom = null;


var debut = 0;

//boucle qui genere la séquence alétoire	

while(debut <= niv ){
debut++;
//generation d'un nombre alétoire entre 0 et 7
 nbrandom = Math.floor(Math.random() * 7);

//stockage du nombre alétoire dans  le tableau
tabordi.push(nbrandom);

}

//revoie la sequence alétoire
return tabordi;

}


//affichage  de la couleur de font des button
function affichage(nb){

var couleur =['blue','red','green','orange','yellow','purple','pink'];

if(nb != null){

var buttonid  = document.getElementById(nb);

buttonid.style.backgroundColor = couleur[buttonid.id];

}

}

//gestion des niveaux
function niveau(niv,a){


if(niv == 0){
setTimeout(function(){affichage(a[0]);}, 1);


setTimeout(function(){clean(a[0]);}, 1000); 
}

if(niv == 1){

setTimeout(function(){affichage(a[0]);}, 1);

setTimeout(function(){clean(a[0]);}, 1000); 

setTimeout(function(){affichage(a[1]);}, 2000);

setTimeout(function(){clean(a[1]);}, 2500); 

}

}

//effacement des couleur de fond des button
function clean(n){
document.getElementById(n).style.backgroundColor = null;

}

//fonction qui se lance quand click sur les button
function clickuser(tab,id){

var nbclick = document.getElementById("nombreclick");
var nblevel= document.getElementById("nblevel");

//verifi que les button sont click dans le bon ordre
if(tab[nbclick.value] == id){

 nbclick.value++;

}else{

alert("lose");

document.location ="./index.html";

}


if(nbclick.value == nblevel.value){
alert("winner");
nbclick.value = 0;

}

}
