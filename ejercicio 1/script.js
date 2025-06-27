const btn = document.getElementById("calcular");
const select = document.getElementById("operacion");

select.addEventListener("change", () => {
  btn.disabled = select.value === "dividir";
});

btn.addEventListener("click", () => {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operacion = select.value;
  let resultado;

  switch (operacion) {
    case "sumar": resultado = num1 + num2; break;
    case "restar": resultado = num1 - num2; break;
    case "multiplicar": resultado = num1 * num2; break;
  }

  document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
});
