const changeBgColor = document.getElementById("change-color");
const menu = document.getElementsByClassName("menu")[0];

changeBgColor.addEventListener("click", () => {
  menu.style.background = "red";
  setTimeout(() => (menu.style.background = ""), 2000);
});
