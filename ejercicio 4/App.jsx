const { useState } = React;

function App() {
  const [activo, setActivo] = useState("izquierdo");

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>Ejercicio 4</h1>
      <button
        onClick={() => setActivo("derecho")}
        disabled={activo !== "izquierdo"}
      >
        Izquierdo
      </button>
      <button
        onClick={() => setActivo("izquierdo")}
        disabled={activo !== "derecho"}
        style={{ marginLeft: "10px" }}
      >
        Derecho
      </button>
    </div>
  );
}
