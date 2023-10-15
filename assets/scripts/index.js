let hamburger= document.querySelector(".hamburger");
let mobMenu = document.querySelector(".mobile_menu");
let navLink= document.querySelectorAll(".mobile_menu ul a") 

hamburger.addEventListener("click", ()=>{
    mobMenu.classList.toggle("active")
    hamburger.classList.toggle("active")
})

navLink.forEach((item)=>{
    item.addEventListener("click", ()=>{
        hamburger.classList.remove("active")
        mobMenu.classList.remove("active")
    })
})