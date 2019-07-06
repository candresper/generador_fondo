var boton = document.getElementById("boton");
var pedir = document.getElementById("pedir");
var ul = document.getElementById("ul1");
var mensa = document.getElementById("mensaje");

boton.addEventListener("click", function(){
	if (pedir.value.length > 0){
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(pedir.value));
		ul.appendChild(li);
		pedir.value = "";
		mensa.appendChild(document.createTextNode("Grabado bien!!!!"));
	}
})

pedir.addEventListener("keypress", function(tecla){
	if (pedir.value.length > 0 && tecla.keyCode == 13){
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(pedir.value));
		ul.appendChild(li);
		pedir.value = "";
	} 
})