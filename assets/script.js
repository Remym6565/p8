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
buttonleft.addEventListener("click", function() {click("left")}); 

const buttonright = document.querySelector(".arrow_right");
buttonright.addEventListener("click", function() {click("right")}); 

const bannerimage = document.querySelector(".banner-img"); 

const idbannertext = document.getElementById("banner");
const bannertext = idbannertext.getElementsByTagName("p")[0];

const classdots = document.querySelector(".dots");

const arraydots = [];


//Ajout des dots dans le slider
for (let i = 0; i < slides.length; i++) {
	const divdot = document.createElement("div");
	divdot.classList.add("dot");

	arraydots.push(divdot);
	classdots.appendChild(divdot)
}

arraydots[0].classList.add("dot_selected");
let position = 0;


//Fonction pour définir les positions de l'image, du texte et de la dot sélectionné
function setbannerposition(position) { 
	const imagepath = "assets/images/slideshow/" + slides[position].image;
	bannerimage.setAttribute("src", imagepath);

	const imagetext = slides[position].tagLine;
	bannertext.innerHTML = imagetext;

	arraydots[position].classList.add("dot_selected");
}


// Changement du slide au clic droit 
function clickright () {
	(position < slides.length-1) ? position++ : position = 0
}


// Changement du slide au clic gauche
function clickleft () {
	(position > 0) ? position-- : position = slides.length-1
}


// Direction
function click (direction) {
	arraydots[position].classList.remove("dot_selected");
	
	if (direction === "right") { clickright(); }
	if (direction === "left") { clickleft(); }

	setbannerposition(position);
}