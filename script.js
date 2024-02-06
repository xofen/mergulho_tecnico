function myFunction() {
  var x = document.getElementById("menu");
  var y = document.getElementById("burger");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.innerHTML = '<i class="fa-solid fa-bars"></i>';
  } else {
    x.style.display = "block";
    x.style.animation = "droplow 1.3s";
    x.style.borderBottom = "4px solid gray";
    y.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  }
}
