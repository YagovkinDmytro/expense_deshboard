import { useId } from "react";

const SelectElement = ({ value, onSelect }) => {
  const selectId = useId();

  return (
    <div>
      <label htmlFor={selectId}>Choose language</label>
      <select
        id={selectId}
        value={value}
        onChange={(evt) => onSelect(evt.target.value)}
      >
        <option value="en">English</option>
        <option value="uk">Ukrainian</option>
        <option value="pl">Polish</option>
      </select>
    </div>
  );
};
export default SelectElement;

// Якщо селект є частиною неконтрольованої форми,
// то спочатку ми задаємо йому атрибут name,
// а потім отримуємо значення селекта під час сабміту форми через її властивість evt.target.elements.selectName.value,
// де selectName - це значення атрибута name.
