const barras = document.querySelector(".barras");
const body = document.querySelector("body")
barras.addEventListener('click' , function(){
    barras.classList.toggle("active")
    body.classList.toggle("active")
})