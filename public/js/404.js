var path = window.location.pathname;
var end = "";
if (path.length >= 15) {
  end = "...";
}
document.getElementById("path").innerHTML =
  path
    .split("?")[0]
    .split("#")[0]
    .substr(0, 15) + end;
