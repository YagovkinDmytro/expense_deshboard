import css from "./Task.module.css";

const Task = ({ data: { id, text }, onDelete }) => {
  return (
    <div className={css.container}>
      <p className={css.text}>{text}</p>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Task;
