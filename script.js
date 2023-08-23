//Selecting html elements
let emailElement = document.querySelector('#email');
let messageElement = document.querySelector('#message');
let submitButton = document.querySelector('#submitButton');
submitButton.addEventListener('click',function(e){
	e.preventDefault();
	
	let emailValue = emailElement.value;
	let messageValue = messageElement.value;
	
	console.log('Email: ',emailValue);
	console.log('Message: ',messageValue);
	
	if(emailValue.includes('@')){
		alert('Thank you for your message!');
	}
	else{
		alert('Email address entered does not seem valid. Please try again.')
	}
})

