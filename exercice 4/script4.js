var nameInput = document.getElementById("nom");
var firstNameInput = document.getElementById("prenom");
var cityInput = document.getElementById("ville");

var btnElement = document.getElementsByTagName("button")[0];

btnElement.addEventListener("click", function(){
    nameInput.value = "";
    firstNameInput.value = "";
    cityInput.value = "";
});