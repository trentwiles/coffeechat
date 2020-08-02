var path = window.location.pathname,
  end = "",
  defresh;
if (path.length >= 15) {
  end = "...";
}
document.getElementById("path").innerHTML =
  path
    .split("?")[0]
    .split("#")[0]
    .substr(0, 15) + end;
function back() {
  if (window.history.length > 1) {
    this.location.back();
  } else {
    defresh("/", "push");
  }
}
