let hamberger=document.querySelector("#hamberger");
let navbar=document.querySelector(".nav-ul")
let navlink=document.querySelectorAll(".nav-link")
let navBtn=document.querySelectorAll(".login")


hamberger.addEventListener("click", () => {
    hamberger.classList.toggle("fa-xmark");
    navBtn.forEach((link) => {
        link.classList.toggle("display");
    })

    navbar.classList.toggle("open");

})

navlink.forEach((Element) => {Element.addEventListener("click",()=>{
    hamberger.classList.toggle("fa-xmark");
    navbar.classList.toggle("open")
})})