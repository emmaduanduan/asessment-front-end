console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has been submitted successfully.');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
let picutre = document.querySelector("img")
function compliment(){
	alert("Hi, Alec. Hope you have having a great time grading my test.")
}
picutre.addEventListener("mouseover", compliment)