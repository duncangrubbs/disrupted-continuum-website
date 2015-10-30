//Define function
function addToCart(){
	num = 0;

	//Define Local storage items
	localStorage.setItem("string", "Cart: 0");
	localStorage.setItem("number", "");

	//Attempt to convert a local string to an int
	num = localStorage.getItem("number");
	number = parseInt(num);
	number++;

	//Write final to screen
	document.getElementById("cart-number").innerHTML = localStorage.getItem("string" + "number");

	//localStorage.setItem = ("stringTwo", '<img id="product-4" src="images/sticker.png" class="img img-responsive">');
	//document.getElementById("merch-1-cart").innerHTML = localStorage.getItem("stringTwo");

}
