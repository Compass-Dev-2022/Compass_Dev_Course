// function alertFunction() {
//   window.alert("Hello!I'm Alert");
// }

// function confirmBoxFunction() {
//   var value;
//   if (confirm("Press a button!")) {
//     value = "You pressed Ok!";
//   } else {
//     value = "You pressed Cancel!";
//   }
//   document.getElementById("show").innerHTML = value;
// }

function promptBoxFunction() {
  let value;
  let name = prompt("Please Enter Your Name", "John John");
  if (name == null || name == "") {
    value = "Naming canceled the prompt.";
  } else {
    value = `Welcome! ${name}`;
  }
  document.getElementById("showPromptText").innerHTML = value;
}
