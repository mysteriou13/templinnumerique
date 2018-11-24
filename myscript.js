
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
debut++;
nbrandom = Math.floor(Math.random() * 7);


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


if(niv == 0){
setTimeout(function(){affichage(a,a[0]);}, 1);


setTimeout(function(){clean(a[0]);}, 1000); 
}

if(niv == 1){

setTimeout(function(){affichage(a,a[0]);}, 1);

setTimeout(function(){clean(a[0]);}, 1000); 

setTimeout(function(){affichage(a,a[1]);}, 2000);

setTimeout(function(){clean(a[1]);}, 2500); 

}

}


function clean(n){
var c = 0;
var debut = 0;
var fin = 6;	

document.getElementById(n).style.backgroundColor = null;

}

function clickuser(nb,tab,id,niv,nbniv){

var nbclick = document.getElementById("nombreclick");
var nblevel= document.getElementById("nblevel");


if(tab[nbclick.value] == id){

 nbclick.value++;

}


if(nbclick.value == nblevel.value){
alert("winner");
nbclick.value = 0;

}

}
