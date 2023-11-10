const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


//Variables
const buttonleft = document.querySelector(".arrow_left");
buttonleft.addEventListener("click", function() {click("left")}); // variable évènement au clic gauche

const buttonright = document.querySelector(".arrow_right");
buttonright.addEventListener("click", function() {click("right")}); // variable évènement au clic droit

const bannerimage = document.querySelector(".banner-img"); //variable pour trouver la classe css lié à l'image bannière

const idbannertext = document.getElementById("banner"); //variable pour trouver l'id banner
const bannertext = idbannertext.getElementsByTagName("p")[0]; //variable pour trouver le texte associé à l'image

const classdots = document.querySelector(".dots"); //variable pour trouver la classe css .dots

const arraydots = [];  //tableau dans lequel les dots vont etre incrementés



//Ajout des dots dans le slider
for (let i = 0; i < slides.length; i++) { //boucle (position de départ; condition de sortie; opération mise à jour)
	const divdot = document.createElement("div"); //création d'une div pour chaque boucle
	divdot.classList.add("dot"); //ajout de la classe css .dot  dans la div créée

	arraydots.push(divdot); //ajout de la div dans le tableau des dots
	classdots.appendChild(divdot) //ajout de l'emplacement de la nouvelle div. 
}

arraydots[0].classList.add("dot_selected"); //ajout de la dot selectionné à la position 0 dans le tableau
let position = 0; //variable position de départ



//Fonction pour définir les positions de l'image, du texte et de la dot sélectionné
function setbannerposition(position) { 
	const imagepath = "assets/images/slideshow/" + slides[position].image;
	bannerimage.setAttribute("src", imagepath); //change l'attribut "src" de l'image en fonction de la position dans le tableau

	const imagetext = slides[position].tagLine;
	bannertext.innerHTML = imagetext; //change le texte associé à l'image en fonction de la position dans le tableau (pourquoi innerHTML ? pour garder les propriétés de <p>)

	arraydots[position].classList.add("dot_selected"); //ajout de la classe dot selectionné 
}

// Changement du slide au clic droit 
function clickright () {
	// if(position < slides.length-1)
	// {
	// 	position++;
	// }
	// else
	// {
	// 	position = 0;
	// }
	(position < slides.length-1) ? position++ : position = 0
}

// Changement du slide au clic gauche
function clickleft () {
	if(position > 0)
	{
		position--;
	}
	else
	{
		position = slides.length-1;
	}
}

// Direction
function click (direction) {
	arraydots[position].classList.remove("dot_selected"); //suppression de la dot selectionné à la position actuelle lorsque le slide change 
	
	if (direction === "right")
	{
		clickright();
	}
	if (direction ==="left")
	{
		clickleft();
	}

	setbannerposition(position);
}