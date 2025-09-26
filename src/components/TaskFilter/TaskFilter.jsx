import css from "./TaskFilter.module.css";

const TaskFilter = ({ value, onFilter }) => {
  return (
    <div className={css.container}>
      <p className={css.label}>Search for task</p>
      <input
        className={css.field}
        type="text"
        name="filter"
        value={value}
        onChange={(evt) => onFilter(evt.target.value)}
        placeholder="Type here..."
      ></input>
    </div>
  );
};

export default TaskFilter;
