
//fonction pour génére la sequence de touche aléoire //
function random(i){

var couleur =['blue','red','green','orange','yellow','purple','pink'];

//nombre du niveau pour le diffulté	
var niveau = 3;

//stockage de la sequence proposé par le jeu	
var tabordi = [];

//recuperation de l'id du buttion cliké
var id = i;	

var debut = 0;

var backcolor = null;

var b1 = -1;

var b2 = 6;

//boucle qui genere la séquence alaétoire	
while(debut <= niveau ){

var nbrandom = Math.floor(Math.random() * 7) + 0);

debut++;	

id = document.getElementById(i);

tabodi.push(nbrandom);

while(b1 <= b2){

b1++;

if(nbrandow == id){
	
id.style.backgroundColor=couleur[i];	

}else{

id.style.backgroundColor = "";
}	

}

}

 return taordi;

}

