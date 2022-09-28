import { useRef, useState } from "react";
import bgDesktopDark from "../assets/images/bg-desktop-dark.jpg";
import bgDesktopLight from "../assets/images/bg-desktop-light.jpg";
import iconMoon from "../assets/images/icon-moon.svg";
import iconSun from "../assets/images/icon-sun.svg";
import NewTodo from "../components/todo/NewTodo";
import "./todo.css";

function Todo() {
  const [newTodo, setNewTodo] = useState("");
  const [id, setId] = useState(0);
  const [todoList, setTodoList] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const todoRef = useRef(null);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const createNewTodo = () => {
    if (newTodo !== "") {
      const newTask = { task: newTodo, status: "In Progress", id };
      setTodoList([...todoList, newTask]);
      setId(id + 1);
    }
    setNewTodo("");
    todoRef.current.focus();
  };

  const statusHandler = (idx) => {
    console.log(idx);
  };

  const deleteTodo = (idx) => {
    const result = todoList.filter((todo) => todo.id !== idx);
    setTodoList(result);
  };

  return (
    <main
      className="todo-container"
      style={{
        backgroundColor: `${darkMode ? "rgb(0 0 0 / 70%)" : "transparent"}`,
      }}
    >
      <img
        src={`${darkMode ? bgDesktopLight : bgDesktopDark}`}
        alt="header background"
        className="header-img"
      />
      <section>
        <div className="todo-title">
          <h1>TODO</h1>
          <button type="button" alt="moon icon" onClick={toggleDarkMode}>
            <img
              src={`${darkMode ? iconMoon : iconSun}`}
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
            <NewTodo
              key={idx}
              todo={task.task}
              id={task.id}
              statusHandler={statusHandler}
              deleteTodo={deleteTodo}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Todo;
