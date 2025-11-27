// JavaScript Document
console.log("hi");

const OpenMenuButton = document.querySelector("header > button");
const SluitMenuButton = document.querySelector("header nav button");
const deNav = document.querySelector("header > nav");

OpenMenuButton.onclick = OpenMenu;
SluitMenuButton.onclick = SluitMenu;

function OpenMenu(){
  deNav.classList.add("is-open");
}

function SluitMenu(){
  deNav.classList.remove("is-open");
}

