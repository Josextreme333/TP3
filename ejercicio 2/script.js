const palabras = ["manzana", "banana", "pera", "durazno", "frutilla", "mango"];
const btn = document.getElementById("filtrar");

btn.addEventListener("click", () => {
  const texto = document.getElementById("filtro").value.trim().toLowerCase();
  const mensaje = document.getElementById("mensaje");
  const lista = document.getElementById("resultado");
  lista.innerHTML = "";
  mensaje.textContent = "";

  if (texto === "") {
    mensaje.textContent = "Por favor, ingresa un texto para filtrar";
    return;
  }

  const filtradas = palabras.filter(p => p.toLowerCase().includes(texto));
  filtradas.forEach(palabra => {
    const li = document.createElement("li");
    li.textContent = palabra;
    lista.appendChild(li);
  });

  if (filtradas.length === 0) mensaje.textContent = "No se encontraron coincidencias";
});
