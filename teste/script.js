const varial = document.getElementsByClassName('box');

for(i = 0; i < varial.length; i++){
    varial[i].addEventListener('click' , function(){
        this.classList.toggle('ativo')
    })
}