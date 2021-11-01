import { useState } from "react";
import "./style.css";

const Form = ({ addTodo }) => {
  const [tarefa, setTarefa] = useState("");
  return (
    <div className="formulario">
      <input
        type="text"
        placeholder="Nova Tarefa"
        value={tarefa}
        onChange={(event) => setTarefa(event.target.value)}
      />
      <button onClick={() => addTodo(tarefa)}>Enviar</button>
    </div>
  );
};

export default Form;
