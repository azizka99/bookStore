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

// !popup

let userBtn = document.querySelector(".user_account");
let popUp = document.querySelector(".popup");
let form = document.querySelector(".popup form");

userBtn.addEventListener("click", function(event) {
  popUp.style.display = "block";
  event.stopPropagation();
});

form.addEventListener("click", function(event) {
  event.stopPropagation();
});

document.addEventListener("click", function() {
  popUp.style.display = "none";
});













//  const apiKey = "https://www.googleapis.com/books/v1/volumes?q=qaraqan";



//  const btnSliderLeft = document.querySelector(".slider-btn-left");
//  const btnSliderRight = document.querySelector(".slider-btn-rigth");


// const swiper = new Swiper(".swiper", {
//     direction: "horizontal",


//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },

//     speed: 800,
// });

// myForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   SLIDER.innerHTML = "";
//   if (inputSearch.value !== "") {
//       fetch(
//           `https://www.googleapis.com/books/v1/volumes?q=${inputSearch.value}&key=${apiKey}`
//       )
//           .then((response) => response.json())
//           .then((data) => {
//               inputSearch.value = "";
//               const dataItems = data.items;
//               manageSlider(dataItems);
//           });
//   } else {
//       alert("Fill in the blanks");
//   }
// });


































