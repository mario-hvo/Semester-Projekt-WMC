function check() {
  const eingabe = document.getElementById("pw").value.trim();
  const error = document.getElementById("error");

  // ← Hier dein Passwort rein (ändere es!)
  if (eingabe === "bulme") {
    window.location.href = "home.html";
  } else {
    error.textContent = "Falsches Passwort";
    document.getElementById("pw").value = "";
    document.getElementById("pw").focus();
  }
}

document.getElementById("pw").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    check();
  }
});