document.querySelector("button").addEventListener("click", (e) => {
  document.querySelector("p").innerHTML = "Hello!Nice To Meet You";
});

document.querySelector("button").onclick = function (e) {
  document.querySelector("p").innerHTML = "Hello!Nice To Meet You";
};
