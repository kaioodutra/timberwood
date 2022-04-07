const btnBurger = document.getElementById("btnBurger")
const navBar = document.getElementById("navbar")
const body = document.getElementById("body")
const navItens = document.getElementById("nav-itens")
const aLinks = navItens.getElementsByTagName("li")
const navbarText = document.getElementById("navbarText")

const toggleMenu = () => {
  if (window.innerWidth <= 768) {
    navBar.classList.toggle("nav_full")
    btnBurger.classList.toggle("active")
    body.classList.toggle("no_scroll")
    navItens.classList.toggle("closeEffect")
    navbarText.classList.remove("show")
  }
}

btnBurger.addEventListener("click", toggleMenu)

for (i = 0; i < aLinks.length; i++) {
  aLinks[i].addEventListener("click", toggleMenu)
}

navItens.onclick = (e) => {
  for (i = 0; i < aLinks.length; i++) {
    let el = aLinks[i].getElementsByTagName("a")
    el[0].classList.remove("active")
  }
  e.target.classList.add("active")
  // }
}
