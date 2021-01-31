let burgerMenu = document.getElementById("icon-bar");
let burgerMenu1 = document.getElementById("icon-bar1");
let burgerMenu2 = document.getElementById("icon-bar2");
let navBar = document.getElementById("nav-bar");

burgerMenu.addEventListener("click", displayNav);
burgerMenu1.addEventListener("click", displayNav);
burgerMenu2.addEventListener("click", displayNav);

function displayNav() {
  if (navBar.style.display == "flex") {
    navBar.style.display = "none";
  } else {
    navBar.style.display = "flex";
  }
}
