import { useState } from "react";

function createInitialTodos() {
  const initialTodos = [];
  for (let i = 0; i < 5; i++) {
    initialTodos.push({
      id: i,
      text: "Item " + (i + 1),
    });
  }
  return initialTodos;
}

export default function TodoList() {
  const [todos, setTodos] = useState(createInitialTodos);

  function updateToDo() {
    setTodos([
      ...todos,
      {
        id: todos.length,
        text: "new to do list",
      },
    ]);
  }

  return (
    <>
      <button
        className="rounded-lg bg-sky-400 p-2 text-white"
        onClick={updateToDo}
      >
        Add
      </button>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </>
  );
}
