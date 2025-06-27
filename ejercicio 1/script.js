const btn = document.getElementById("calcular");
const select = document.getElementById("operacion");
const num2Input = document.getElementById("num2");

function validarBoton() {
  const operacion = select.value;
  const num2 = parseFloat(num2Input.value);

  if (operacion === "dividir" && num2 === 0) {
    btn.disabled = true;
  } else {
    btn.disabled = false;
  }
}

select.addEventListener("change", validarBoton);
num2Input.addEventListener("input", validarBoton);

btn.addEventListener("click", () => {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(num2Input.value);
  const operacion = select.value;
  let resultado;

  switch (operacion) {
    case "sumar":
      resultado = num1 + num2;
      break;
    case "restar":
      resultado = num1 - num2;
      break;
    case "multiplicar":
      resultado = num1 * num2;
      break;
    case "dividir":
      resultado = num1 / num2;
      break;
  }

  document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
});
