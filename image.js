let openPic = document.querySelectorAll(".card__image");
let closePic = document.querySelector(".image__close");

let popUp = document.querySelectorAll(".image");

openPic.forEach(function (element, i){
element.addEventListener("click", function() {
    popUp[0].classList.toggle("image__visible");
    console.log("se quiso abrir");

    let img = popUp[0].querySelector(".image__pop-up");
    img.src = element.src;
}
)}); 

closePic.addEventListener("click", function() {
    popUp[0].classList.toggle("image__visible");
    console.log("se quiso cerrar la ventana");
});