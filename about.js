console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has been submitted.');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let duck = document.getElementById('img');

function giveCompliment() {
	alert('you are cool!')
}

duck.addEventListener('mouseover',giveCompliment)