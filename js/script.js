//Define function
function addToCart(){
	//Define Local storage items
	localStorage.setItem("string", "Cart: ");
	localStorage.setItem("number", "1");
	var num = +localStorage.getItem('number');
	num++;

	//Write final to screen
	document.getElementById("cart-number").innerHTML = localStorage.getItem("string", "number");

	//localStorage.setItem = ("stringTwo", '<img id="product-4" src="images/sticker.png" class="img img-responsive">');
	//document.getElementById("merch-1-cart").innerHTML = localStorage.getItem("stringTwo");

}
