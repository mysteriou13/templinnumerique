
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


if(niv ==0){
setTimeout(function(){ affichage(a,a[0]) }, 1);

setTimeout(function(){ clean(a[0]) }, 1000);

setTimeout(function(){ affichage(a,a[1]) }, 1000);

setTimeout(function(){ clean(a[1]) }, 1000);

}

 document.getElementById("niv").style.display = "block";
 document.getElementById("niv").value = "valider";

}

function clean(nb){

if(nb != null){
var button =  document.getElementById(nb);

button.style.backgroundColor = null;
}

}

function clickuser(nbclick,click,id,niv){
var n = niv+1;
var lentab = click.length;
var div = document.getElementById("nbclick");
var divtext = div.innerHTML;

if(id == click[divtext]){

div.innerHTML= null;

div.innerHTML = nbclick+1;

if(nbclick+1 == lentab){
alert("winner");

}

}

 }
