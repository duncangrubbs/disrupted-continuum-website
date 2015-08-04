function checkInput() {
	var inputUsername = document.getElementById('inputUsername').value;
	var inputPassword = document.getElementById('inputPassword').value;

	if (inputUsername == "duncangrubbs" & inputPassword == "duncan11") {
		console.log("test");
		window.open("admin.html");
	}
	else {
		alert("Please enter a correct username/password.");
		return false;
	}
	
}