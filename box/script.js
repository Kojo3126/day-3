for (var i= 0; i < 300; i++ ){ 
document.querySelector(".container").innerHTML+=" <div class= 'box'></div>"

}
  
var arrayOfBoxes = document.querySelectorAll(".box");
for (var i = 0 ; i < arrayOfBoxes.length; i++ ){
	arrayOfBoxes[i].style.background= "lightpink";
	if (i % 2 === 0){
		arrayOfBoxes[i].style.background= "lightblue";
	}if (i % 4 === 0){
		arrayOfBoxes[i].style.background= "lightgreen";
	}if (i % 5 === 0){
		arrayOfBoxes[i].style.background= "lightblue";
	}
}

	


