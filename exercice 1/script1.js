var image1Element = document.getElementById("image1");


document.getElementById("image1").addEventListener("mouseover", function(){
    image1Element.src = "images/image1_2.jpg"
})

document.getElementById("image1").addEventListener("mouseout", function(){
    image1Element.src = "images/image1.jpg"
})