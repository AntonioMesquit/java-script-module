const bug = document.querySelector(".burguer");
const nv = document.querySelector(".nav-menu");

bug.addEventListener('click' , () => {
    bug.classList.toggle("active")
    nv.classList.toggle("active")
})
