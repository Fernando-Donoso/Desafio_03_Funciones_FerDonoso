
    // Variable global para guardar el color
    let colorGlobal = "";

    // Detectar teclas presionadas
    document.addEventListener("keydown", function(event) {
      const tecla = event.key.toLowerCase();

      // Cambiar color global según la tecla
      if (tecla === "a") {
        colorGlobal = "pink";       // rosado
      } else if (tecla === "s") {
        colorGlobal = "orange";     // naranjo
      } else if (tecla === "d") {
        colorGlobal = "lightblue";  // celeste
      }

      // Aplicar color al div "key"
      if (["a", "s", "d"].includes(tecla)) {
        document.getElementById("key").style.backgroundColor = colorGlobal;
      }

      // Crear nuevos divs con q, w, e
      if (tecla === "q") {
        crearDiv("purple");   // morado
      } else if (tecla === "w") {
        crearDiv("gray");     // gris
      } else if (tecla === "e") {
        crearDiv("brown");    // café
      }
    });

    // Función para crear nuevos divs
    function crearDiv(color) {
      const nuevo = document.createElement("div");
      nuevo.style.width = "200px";
      nuevo.style.height = "200px";
      nuevo.style.backgroundColor = color;
      nuevo.style.border = "2px solid black";
      nuevo.style.marginTop = "10px";
      document.getElementById("contenedor-nuevos").appendChild(nuevo);
    }
