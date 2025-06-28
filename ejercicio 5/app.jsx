const { useState, useEffect } = React;

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [op, setOp] = useState("sumar");
  const [resultado, setResultado] = useState(null);

  const esDivisionPorCero = op === "dividir" && parseFloat(num2) === 0;

  useEffect(() => {
    if (esDivisionPorCero) {
      setResultado(null);
    }
  }, [num2, op]);

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que se recargue la página

    const a = parseFloat(num1);
    const b = parseFloat(num2);
    let res = "";

    switch (op) {
      case "sumar":
        res = a + b;
        break;
      case "restar":
        res = a - b;
        break;
      case "multiplicar":
        res = a * b;
        break;
      case "dividir":
        res = a / b;
        break;
    }

    setResultado(res);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>Ejercicio 5 - Calculadora</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Número 1"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Número 2"
          style={{ marginLeft: "10px" }}
        />
        <br /><br />
        <select value={op} onChange={(e) => setOp(e.target.value)}>
          <option value="sumar">Suma</option>
          <option value="restar">Resta</option>
          <option value="multiplicar">Multiplicacion</option>
          <option value="dividir">Division</option>
        </select>
        <br /><br />
        <button type="submit" disabled={esDivisionPorCero}>
          Calcular
        </button>
      </form>
      {esDivisionPorCero && (
        <p style={{ color: "red" }}>No se puede dividir por cero</p>
      )}
      {resultado !== null && !esDivisionPorCero && (
        <p>Resultado: {resultado}</p>
      )}
    </div>
  );
}
