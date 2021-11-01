import "./App.css";
import { useState } from "react";

import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    console.log("oi");
    setTodos([...todos, newTodo]);
  };
  console.log(todos);

  const handleTodo = (listItem) => {
    setTodos(todos.filter((item) => item !== listItem));
  };

  return (
    <div className="App">
      <Form addTodo={addTodo} />
      <TodoList todos={todos} handleTodo={handleTodo} />
    </div>
  );
}

export default App;
