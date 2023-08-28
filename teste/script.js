const click = document.querySelectorAll(".x");


for (let i = 0; i < click.length; i++) {
    click[i].addEventListener('click' , function() {
        const active = this.classList.contains("active")
   
    for(let j = 0; j < click.length; j++){
        click[j].classList.remove("active")
    }
    if(!active){
        this.classList.add("active")
    } 
})
}   