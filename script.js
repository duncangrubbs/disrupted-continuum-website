//creating a function to check the admin login
function checkInput() {
	//setting user's input equal to variables
	var inputUsername = document.getElementById('inputUsername').value;
	var inputPassword = document.getElementById('inputPassword').value;

	//checking if the username and password are correct
	if (inputUsername == "duncangrubbs" & inputPassword == "duncan11") {
		console.log("test");
		window.open("admin.html");
	}
	else {
		alert("Please enter a correct username/password.");
		return false;
	}
	
}