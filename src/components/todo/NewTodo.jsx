import { useRef } from "react";
import "./newTodo.css";

function NewTodo({ todo }) {
  const done = useRef(null);
  const handleDone = () => {
    done.current.classList.toggle("done");
  };

  return (
    <article ref={done}>
      <button type="button" onClick={handleDone}>
        <img src="src/assets/images/icon-check.svg" alt="check icon" />
      </button>
      <p>{todo}</p>
      <button type="button">
        <img src="src/assets/images/icon-cross.svg" alt="cross icon" />
      </button>
    </article>
  );
}

export default NewTodo;
