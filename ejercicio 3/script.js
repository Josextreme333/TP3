fetch("https://jsonplaceholder.typicode.com/todos")
  .then(res => res.json())
  .then(data => {
    const lista = document.getElementById("tareas");
    data.filter(t => t.completed).forEach(t => {
      const li = document.createElement("li");
      li.textContent = t.title;
      lista.appendChild(li);
    });
  });
