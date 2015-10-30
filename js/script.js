function addToCart(){
	num = 0;

	localStorage.setItem("string", "Cart: 0");
	localStorage.setItem("number", "");

	num = localStorage.getItem("number");
	number = parseInt(num);
	number++;

	document.getElementById("cart-number").innerHTML = localStorage.getItem("string" + "number");

	//localStorage.setItem = ("stringTwo", '<img id="product-4" src="images/sticker.png" class="img img-responsive">');
	//document.getElementById("merch-1-cart").innerHTML = localStorage.getItem("stringTwo");

}
