


// Obtener los divs por ID
    const c1 = document.getElementById("c1");
    const c2 = document.getElementById("c2");
    const c3 = document.getElementById("c3");
    const c4 = document.getElementById("c4");

    // Función para pintar de negro
    const pintarNegro = function() {
      this.style.backgroundColor = "black";
    };

    // Agregar eventos
    c1.addEventListener("click", pintarNegro);
    c2.addEventListener("click", pintarNegro);
    c3.addEventListener("click", pintarNegro);
    c4.addEventListener("click", pintarNegro);


    