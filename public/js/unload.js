function defreshUnload(f) {
  if (f !== window.location.href) {
    if (
      f.replace(
        window.location.protocol + "//" + window.location.hostname,
        ""
      ) !== "/" &&
      f.replace(
        window.location.protocol + "//" + window.location.hostname,
        ""
      ) !== "/users/@me"
    ) {
      alert(
        "Loading " +
          f.replace(
            window.location.protocol + "//" + window.location.hostname,
            ""
          ) +
          "..."
      );
    } else {
      alert("Going Home...");
    }
  } else {
    alert("Loading...");
  }
}
