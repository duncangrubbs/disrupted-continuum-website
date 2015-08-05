function checkInput() {
	var inputUsername = document.getElementById('username').value;
	var inputPassword = document.getElementById('password').value;

	secret = "U2FsdGVkX1+KkU5/aGa4zooxG3anrWj0O91TtUvbz3gOTy+BKgkWq4JF1+7au5i9"
	try {
    document.getElementById('secret').innerHTML = GibberishAES.dec(secret, inputUsername + inputPassword);
	}
	catch(err) {
			document.getElementById('secret').innerHTML = ""
	    alert("Please enter a correct username/password.");
	}


}
