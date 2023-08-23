const func = document.getElementsByClassName('box')

for(i = 0; i < func.length; i++){
    func[i].addEventListener('click' , function(){
        const ativado = this.classList.contains('ativo');
        for(let j = 0; j < func.length; j++){
            func[j].classList.remove('ativo');
        }
        if(!ativado){
            this.classList.add('ativo')
        }
    });
}