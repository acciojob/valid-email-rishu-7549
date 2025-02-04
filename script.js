function validEmail(str) {
  //your JS code here.
	if(str.length < 1) return false;
	let email = /^[a-zA-Z0-9]+(?:[.-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:[.-]?[a-zA-Z0-9]+)*\.[a-zA-Z]{2,3}$/;
	return email.test(str);
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));


