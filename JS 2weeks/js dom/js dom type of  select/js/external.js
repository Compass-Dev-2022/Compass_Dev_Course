let selectElement = document.querySelectorAll("div ~ p");
console.log(selectElement);
for (let i = 0; i < selectElement.length; i++) {
  selectElement[i].style.backgroundColor = "red";
}

// selectElement[1].style.color = "purple";
// selectElement.style["background-color"] = "blue";
document.getElementById(); //one
document.getElementsByClassName(); //[]
document.getElementsByTagName(); //[]
document.querySelector(); //first select
document.querySelectorAll(); //[]
