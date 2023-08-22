const test = document.getElementsByClassName('box1');
for ( i = 0; i < test.length; i++){
    test[i].addEventListener('click' , function(){
        this.classList.toggle('active')
    })
}