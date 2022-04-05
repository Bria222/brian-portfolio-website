//get humbuger
const humbuger = document.querySelector(".humbuger");
//get navigation menu
const navMenu = document.querySelector(".nav-menu");

humbuger.addEventListener("click", ()=>{
    humbuger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener
    ("click", () =>{
        humbuger.classList.remove("active");
        navMenu.classList.remove("active");
    }))