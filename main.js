function redirect() {
    window.location.href = `http://db.cuetools.net/?tocid=${document.getElementById("website").value}`;
  }

  document.addEventListener("keydown", e => {
    if (e.key === "Enter") redirect();
  });
