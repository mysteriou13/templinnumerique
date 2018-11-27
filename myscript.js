
//fonction qui retounre le nombre de niveau

function  nbniveau(niveau){

return niveau.value++;

}

//fonction pour génére la sequence de touche aléoire //

function random(niv){

//tableau de couleur de font a apliqué sur les buttons

var couleur =['blue','red','green','orange','yellow','purple','pink'];

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

var partie = document.getElementById("partie");
partie.innerHTML = null;

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

if(niv == 2){

setTimeout(function(){affichage(a[0]);}, 1);

setTimeout(function(){clean(a[0]);}, 1000); 

setTimeout(function(){affichage(a[1]);}, 2000);

setTimeout(function(){clean(a[1]);}, 2500); 

setTimeout(function(){affichage(a[2]);}, 2500);

setTimeout(function(){clean(a[2]);}, 3000); 


}


if(niv == 3){

setTimeout(function(){affichage(a[0]);}, 1);

setTimeout(function(){clean(a[0]);}, 1000); 

setTimeout(function(){affichage(a[1]);}, 2000);

setTimeout(function(){clean(a[1]);}, 2500); 

setTimeout(function(){affichage(a[2]);}, 2500);

setTimeout(function(){clean(a[2]);}, 3000); 

setTimeout(function(){affichage(a[3]);}, 3500);

setTimeout(function(){clean(a[3]);}, 4000); 


}


if(niv == 3){

setTimeout(function(){affichage(a[0]);}, 1);

setTimeout(function(){clean(a[0]);}, 1000); 

setTimeout(function(){affichage(a[1]);}, 2000);

setTimeout(function(){clean(a[1]);}, 2500); 

setTimeout(function(){affichage(a[2]);}, 2500);

setTimeout(function(){clean(a[2]);}, 3000); 

setTimeout(function(){affichage(a[3]);}, 3500);

setTimeout(function(){clean(a[3]);}, 4000); 

setTimeout(function(){affichage(a[4]);}, 4500);

setTimeout(function(){clean(a[4]);}, 5000); 


}

if(niv == 5){

setTimeout(function(){affichage(a[0]);}, 1);

setTimeout(function(){clean(a[0]);}, 1000); 

setTimeout(function(){affichage(a[1]);}, 2000);

setTimeout(function(){clean(a[1]);}, 2500); 

setTimeout(function(){affichage(a[2]);}, 2500);

setTimeout(function(){clean(a[2]);}, 3000); 

setTimeout(function(){affichage(a[3]);}, 3500);

setTimeout(function(){clean(a[3]);}, 4000); 

setTimeout(function(){affichage(a[4]);}, 4000);

setTimeout(function(){clean(a[4]);}, 4500); 

setTimeout(function(){affichage(a[5]);}, 5000);

setTimeout(function(){clean(a[5]);}, 5500); 


}


if(niv == 6){

setTimeout(function(){affichage(a[0]);}, 1);

setTimeout(function(){clean(a[0]);}, 1000); 

setTimeout(function(){affichage(a[1]);}, 2000);

setTimeout(function(){clean(a[1]);}, 2500); 

setTimeout(function(){affichage(a[2]);}, 2500);

setTimeout(function(){clean(a[2]);}, 3000); 

setTimeout(function(){affichage(a[3]);}, 3500);

setTimeout(function(){clean(a[3]);}, 4000); 

setTimeout(function(){affichage(a[4]);}, 4000);

setTimeout(function(){clean(a[4]);}, 4500); 

setTimeout(function(){affichage(a[5]);}, 4500);

setTimeout(function(){clean(a[5]);}, 5000); 

setTimeout(function(){affichage(a[6]);}, 5500);

setTimeout(function(){clean(a[6]);}, 6000); 

}

if(niv == 7){

setTimeout(function(){affichage(a[0]);}, 1);

setTimeout(function(){clean(a[0]);}, 1000); 

setTimeout(function(){affichage(a[1]);}, 2000);

setTimeout(function(){clean(a[1]);}, 2500); 

setTimeout(function(){affichage(a[2]);}, 2500);

setTimeout(function(){clean(a[2]);}, 3000); 

setTimeout(function(){affichage(a[3]);}, 3500);

setTimeout(function(){clean(a[3]);}, 4000); 

setTimeout(function(){affichage(a[4]);}, 4000);

setTimeout(function(){clean(a[4]);}, 4500); 

setTimeout(function(){affichage(a[5]);}, 4500);

setTimeout(function(){clean(a[5]);}, 5000); 

setTimeout(function(){affichage(a[6]);}, 5500);

setTimeout(function(){clean(a[6]);}, 6000); 

setTimeout(function(){affichage(a[7]);}, 7000);

setTimeout(function(){clean(a[7]);}, 7500); 


}

if(niv == 8){

setTimeout(function(){affichage(a[0]);}, 1);

setTimeout(function(){clean(a[0]);}, 1000); 

setTimeout(function(){affichage(a[1]);}, 2000);

setTimeout(function(){clean(a[1]);}, 2500); 

setTimeout(function(){affichage(a[2]);}, 2500);

setTimeout(function(){clean(a[2]);}, 3000); 

setTimeout(function(){affichage(a[3]);}, 3500);

setTimeout(function(){clean(a[3]);}, 4000); 

setTimeout(function(){affichage(a[4]);}, 4000);

setTimeout(function(){clean(a[4]);}, 4500); 

setTimeout(function(){affichage(a[5]);}, 4500);

setTimeout(function(){clean(a[5]);}, 5000); 

setTimeout(function(){affichage(a[6]);}, 5500);

setTimeout(function(){clean(a[6]);}, 6000); 

setTimeout(function(){affichage(a[7]);}, 7000);

setTimeout(function(){clean(a[7]);}, 7500); 

setTimeout(function(){affichage(a[8]);}, 8000);

setTimeout(function(){clean(a[8]);}, 8500); 


}

if(niv == 9){

setTimeout(function(){affichage(a[0]);}, 1);

setTimeout(function(){clean(a[0]);}, 1000); 

setTimeout(function(){affichage(a[1]);}, 2000);

setTimeout(function(){clean(a[1]);}, 2500); 

setTimeout(function(){affichage(a[2]);}, 2500);

setTimeout(function(){clean(a[2]);}, 3000); 

setTimeout(function(){affichage(a[3]);}, 3500);

setTimeout(function(){clean(a[3]);}, 4000); 

setTimeout(function(){affichage(a[4]);}, 4000);

setTimeout(function(){clean(a[4]);}, 4500); 

setTimeout(function(){affichage(a[5]);}, 4500);

setTimeout(function(){clean(a[5]);}, 5000); 

setTimeout(function(){affichage(a[6]);}, 5500);

setTimeout(function(){clean(a[6]);}, 6000); 

setTimeout(function(){affichage(a[7]);}, 7000);

setTimeout(function(){clean(a[7]);}, 7500); 

setTimeout(function(){affichage(a[8]);}, 8000);

setTimeout(function(){clean(a[8]);}, 8500); 

setTimeout(function(){affichage(a[9]);}, 9000);

setTimeout(function(){clean(a[9]);}, 9500); 


}

if(niv == 10){

setTimeout(function(){affichage(a[0]);}, 1);

setTimeout(function(){clean(a[0]);}, 1000); 

setTimeout(function(){affichage(a[1]);}, 2000);

setTimeout(function(){clean(a[1]);}, 2500); 

setTimeout(function(){affichage(a[2]);}, 2500);

setTimeout(function(){clean(a[2]);}, 3000); 

setTimeout(function(){affichage(a[3]);}, 3500);

setTimeout(function(){clean(a[3]);}, 4000); 

setTimeout(function(){affichage(a[4]);}, 4000);

setTimeout(function(){clean(a[4]);}, 4500); 

setTimeout(function(){affichage(a[5]);}, 4500);

setTimeout(function(){clean(a[5]);}, 5000); 

setTimeout(function(){affichage(a[6]);}, 5500);

setTimeout(function(){clean(a[6]);}, 6000); 

setTimeout(function(){affichage(a[7]);}, 7000);

setTimeout(function(){clean(a[7]);}, 7500); 

setTimeout(function(){affichage(a[8]);}, 8000);

setTimeout(function(){clean(a[8]);}, 8500); 

setTimeout(function(){affichage(a[9]);}, 9000);

setTimeout(function(){clean(a[9]);}, 9500); 

setTimeout(function(){affichage(a[10]);}, 10000);

setTimeout(function(){clean(a[10]);}, 1000); 


}


}

//effacement des couleur de fond des button
function clean(n){
document.getElementById(n).style.backgroundColor = null;

}

//fonction qui se lance quand click sur les button
function clickuser(tab,id){

var nbclick = document.getElementById("nombreclick");
var buttonniv = document.getElementById("bniveau");
var level = document.getElementById("nblevel");
var partie = document.getElementById("partie");

//verifi que les button sont click dans le bon ordre
if(tab[nbclick.value] == id){

 nbclick.value++;

}else{
document.location ="./index.html";

}


if(nbclick.value ==  level.value){
level.value = level.value++;
buttonniv.innerHTML = null;
buttonniv.innerHTML = "niveau"+level.value;
partie.innerHTML = "winner";
nbclick.value = 0;

}

}
