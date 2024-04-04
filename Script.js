alert('hello world');

let submitButton = document.querySelector('#submit-button');

function emailValidate(email) {
	return email.includes('@');
}
function clickListener(event) {
	event.preventDefault();
	let emailInput = document.querySelector('#email');
	let messageInput = document.querySelector('#message');

	let emailText = emailInput.value;
	let messsageText = message.value;
	
	if(emailValidate(emailText) !==true) {


	console.log('The email address must contain @');
		return false;
	}
	console.log('Thanks for your message');
}
submitButton.addEventListener('click', clickListener);