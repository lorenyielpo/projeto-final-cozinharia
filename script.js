let showMenu = document.querySelector("#menu1");
let submenu = document.querySelector(".submenu");


showMenu.addEventListener('mouseover', function(event){
    submenu.classList.add("active")
})

showMenu.addEventListener('mouseleave', function(event){
    submenu.classList.remove("active")
})


let showLegenda = document.querySelectorAll("figure")
let legenda = document.querySelectorAll("span")

for (let i = 0; i <= showLegenda.length + 1; i++){
    showLegenda[i].addEventListener('mouseover', function() {
      legenda[i].classList.add("active")
    })
    showLegenda[i].addEventListener('mouseleave', function() {
      legenda[i].classList.remove("active")
    })
}


let corMenu = document.querySelectorAll("#menu1")
let corSubmenu = document.querySelectorAll(".submenu")

for (let i = 0; i <= corMenu.length + 1; i++){
    corMenu[i].addEventListener('mouseover', function() {
        corSubmenu[i].classList.add("submenucor")
    })
    corMenu[i].addEventListener('mouseleave', function() {
        corSubmenu[i].classList.remove("submenucor")
    })
}
