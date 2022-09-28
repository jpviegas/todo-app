import { useRef } from "react";
import iconCheck from "../../assets/images/icon-check.svg";
import iconCross from "../../assets/images/icon-cross.svg";
import "./newTodo.css";

function NewTodo({ todo, id, statusHandler, deleteTodo }) {
  const done = useRef(null);

  const handleDone = (idx) => {
    statusHandler(idx);
    done.current.classList.toggle("done");
  };

  return (
    <article ref={done}>
      <button type="button" onClick={() => handleDone(id)}>
        <img src={iconCheck} alt="check icon" />
      </button>
      <p>{todo}</p>
      <button type="button">
        <img src={iconCross} alt="cross icon" onClick={() => deleteTodo(id)} />
      </button>
    </article>
  );
}

export default NewTodo;
