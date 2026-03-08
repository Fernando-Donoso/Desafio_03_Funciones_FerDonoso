const sumarTresNumeros = function(a, b, c) {
  return a + b + c;
};

const btn = document.getElementById("btnSumar");

btn.addEventListener("click", function () {
  const n1 = Number(document.getElementById("num1").value);
  const n2 = Number(document.getElementById("num2").value);
  const n3 = Number(document.getElementById("num3").value);

  const suma = sumarTresNumeros(n1, n2, n3);

  document.getElementById("resultado").textContent = suma;
});