function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}

function hideButton() {
  var x = document.getElementById("youWhat");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
