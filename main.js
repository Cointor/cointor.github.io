var textos = ["Tecnico en Electronica. ⚡", "Amante de los gatos. 😺", "Autodidacta.", "Amante de la tecnología. 👨‍💻"];
var indice = 0;
function cambiarTexto() {
  setTimeout(function() {
    document.getElementById("textoCambiante").innerText = textos[indice];
    setTimeout(function() {
        document.getElementById("textoCambiante").style.opacity = 1;
    }, 100);
  }, 500);
  indice = (indice + 1) % textos.length;
}
cambiarTexto();
setInterval(cambiarTexto, 2000);


