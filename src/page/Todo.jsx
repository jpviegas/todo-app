import { useRef, useState } from "react";
import NewTodo from "../components/todo/NewTodo";
import "./todo.css";

function Todo() {
  const [newTodo, setNewTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const todoRef = useRef(null);

  const createNewTodo = () => {
    if (newTodo !== "") {
      setTodoList([...todoList, newTodo]);
    }
    setNewTodo("");
    todoRef.current.focus();
  };
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <main
      style={{
        backgroundColor: `${darkMode ? "black" : "transparent"}`,
      }}
    >
      <img
        src={`src/assets/images/bg-desktop-${darkMode ? "light" : "dark"}.jpg`}
        alt="header background"
        className="header-img"
      />
      <section>
        <div className="todo-title">
          <h1>TODO</h1>
          <button type="button" alt="moon icon" onClick={toggleDarkMode}>
            <img
              src={`src/assets/images/icon-${darkMode ? "moon" : "sun"}.svg`}
              alt={`${darkMode ? "moon" : "sun"}`}
            />
          </button>
        </div>
        <div className="todo-input">
          <input
            type="text"
            name="todo"
            id="todo"
            placeholder="create a new todo..."
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyUp={(e) => (e.key === "Enter" ? createNewTodo() : null)}
            ref={todoRef}
          />
          <button type="button" onClick={() => createNewTodo(newTodo)}>
            create
          </button>
        </div>
        <div className="todo-list">
          {todoList.map((task, idx) => (
            <NewTodo todo={task} key={idx} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Todo;
