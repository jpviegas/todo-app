import { useRef } from "react";
import iconCheck from "../../assets/images/icon-check.svg";
import iconCross from "../../assets/images/icon-cross.svg";
import "./newTodo.css";

function NewTodo({ todo }) {
  const done = useRef(null);
  const handleDone = () => {
    done.current.classList.toggle("done");
  };

  return (
    <article ref={done}>
      <button type="button" onClick={handleDone}>
        <img src={iconCheck} alt="check icon" />
      </button>
      <p>{todo}</p>
      <button type="button">
        <img src={iconCross} alt="cross icon" />
      </button>
    </article>
  );
}

export default NewTodo;
