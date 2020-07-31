var defresh;
if (location.protocol == "http:") {
  defresh(
    "https:" + window.location.href.substring(window.location.protocol.length),
    "replace"
  );
}
