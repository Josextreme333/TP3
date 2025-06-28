const { useState } = React;

function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [color, setColor] = useState("");

  const calcularIMC = (e) => {
    e.preventDefault(); 

    const p = parseFloat(peso);
    const a = parseFloat(altura);

    if (!p || !a || a === 0) {
      setMensaje("Por favor, ingresá valores válidos.");
      setColor("gray");
      return;
    }

    const imc = p / (a * a);
    let msg = "";
    let col = "";

    if (imc < 18.5) {
      msg = "Nivel bajo";
      col = "yellow";
    } else if (imc < 25) {
      msg = "Nivel normal";
      col = "green";
    } else if (imc < 30) {
      msg = "Sobrepeso";
      col = "orange";
    } else {
      msg = "Obesidad";
      col = "red";
    }

    setMensaje(`Tu IMC es ${imc.toFixed(2)}: ${msg}`);
    setColor(col);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>Ejercicio 6 - Calculadora IMC</h1>
      <form onSubmit={calcularIMC}>
        <input
          type="number"
          placeholder="Peso (kg)"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
        <input
          type="number"
          placeholder="Altura (m)"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          style={{ marginLeft: "10px" }}
        />
        <br /><br />
        <button type="submit">Calcular IMC</button>
      </form>
      {mensaje && (
        <p style={{ color: color, fontWeight: "bold", marginTop: "1rem" }}>
          {mensaje}
        </p>
      )}
    </div>
  );
}
