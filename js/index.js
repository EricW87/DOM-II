// Your code goes here
const busImg = document.querySelector('.intro img');
busImg.addEventListener('mouseover', function(event) {
	event.target.style.transform = "scale(2.0)";
	event.preventDefault();
});

busImg.addEventListener('mouseleave', function(event) {
	event.target.style.transform = "scale(1.0)";
});

const mapImg = document.querySelector('.img-content img');
mapImg.addEventListener('click', function(event) {
	event.stopPropogation();
	event.target.style.transform = 'rotate(90deg)';
});
const imgContent = document.querySelector('.img-content');
imgContent.addEventListener('click', (event) => event.target.style.background = 'blue');

const viennaImg = document.querySelector('.inverse-content .img-content img');
viennaImg.addEventListener('dblclick', (event) => event.target.style.display = 'none');

const bottomImg = document.querySelector('.content-destination img');
bottomImg.addEventListener('drag', (event) => event.target.style.borderRadius = '40px');

const buttons = document.querySelectorAll('.btn');
buttons.forEach( (element) => element.addEventListener('mouseup', (event) => event.target.style.background = 'red'));


const pElements = document.querySelectorAll('p');
pElements.forEach((element) => element.addEventListener('copy', (event) => event.target.style.fontSize = '50px'));

pElements.forEach((element) => element.addEventListener('mousedown', (event) => event.target.textContent = ';) '));

const navItems = document.querySelector('.nav');
navItems.addEventListener('load', function(event) {
	event.target.style.position = 'fixed';
	event.target.style.zIndex = 99;
});

const footer = document.querySelector('footer');
footer.addEventListener('auxclick', (event) => event.target.style.height = '500px');
