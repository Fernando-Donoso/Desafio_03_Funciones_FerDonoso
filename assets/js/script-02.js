

function pintar(color = "green") {
  ele.style.backgroundColor = color;
}

const ele = document.getElementById("elemento");

// Pintar verde por defecto al cargar
pintar();

// Cambiar a amarillo al hacer clic
ele.addEventListener("click", function() {
  pintar("yellow");
});

