import { useState } from "react";

function CheckboxElement() {
  const [hasAccepted, setHasAccepted] = useState(false);

  const handleChange = (evt) => {
    setHasAccepted(evt.target.checked);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="terms"
          checked={hasAccepted}
          onChange={handleChange}
        />
        I accept terms and conditions
      </label>
      <button type="button" disabled={!hasAccepted}>
        Proceed
      </button>
    </div>
  );
}

export default CheckboxElement;

// При роботі з групою чекбоксів їх значення зберігаються в властивості value,
// як і в разі з радіо - кнопками,
// а обрані значення зберігаються в стані як масив чи об'єкт.
