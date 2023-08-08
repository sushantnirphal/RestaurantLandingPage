const barIcon = document.querySelector(".bar-icon");
const navMenu = document.querySelector(".nav-menu");

barIcon.addEventListener("click",() =>{
    barIcon.classList.toggle("ative");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n=> n.
    addEventListener("click",()=>{
    barIcon.classList.remove("active");
    navMenu.classList.remove("active");
}))