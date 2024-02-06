function myFunction() {
  var x = document.getElementById("menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    x.style.animation = "droplow 1.3s";
    x.style.borderBottom = "4px solid gray";
  }
}
