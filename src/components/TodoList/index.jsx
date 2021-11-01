import "./style.css";

const TodoList = ({ todos, handleTodo }) => {
  return (
    <ul className="item">
      {todos.map((item, index) => (
        <li key={index}>
          <p>{item}</p>
          <button onClick={() => handleTodo(item)}>Tarefa Concluida</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
