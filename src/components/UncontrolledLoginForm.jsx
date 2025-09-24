import { useId } from "react";
// Не слід використовувати useId для генерації ключів у списку,
// він призначений лише для створення ідентифікаторів полів форми.

// - Uncontrolled form
export const UncontrolledLoginForm = ({ onLogin }) => {
  const loginId = useId();
  const passwordId = useId();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const { login, password } = form.elements;
    // console.log(evt);
    // // Посилання на DOM-елементи
    // console.log(login, password);
    // // Значення полів
    // console.log(login.value, password.value);

    onLogin({
      login: login.value,
      password: password.value,
    });

    // Скидаємо значення полів після відправки
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={loginId}>Login</label>
      <input type="text" name="login" id={loginId} placeholder="Login" />

      <label htmlFor={passwordId}>Password</label>
      <input
        type="password"
        name="password"
        id={passwordId}
        placeholder="Password"
      />

      <button type="submit">Log in</button>
    </form>
  );
};

export default UncontrolledLoginForm;

// - Властивість elements зберігає об'єкт із властивостями,
// імена яких збігаються зі значеннями атрибутів name елементів форми.

// - Значенням кожної властивості буде посилання на DOM-елемент поля.

// - Щоб отримати доступ до значень полів, звертаємося до властивості value.

// - Щоб скинути значення полів форми в початкові,
// використовується вбудований DOM-метод reset елемента form.

//Ви можете поставити логічне питання: для чого створювати унікальні ідентифікатори?
// Давайте подумаємо, що буде, якщо на одній сторінці буде більше однієї копії компонента форми?

// По-перше, значення атрибута id повинно бути унікальним в HTML документі, інакше воно буде невалідним.
// По-друге, фокус елементів форми буде працювати неправильно через повторювані ідентифікатори.
// Браузер не буде знати, на який елемент встановлювати фокус при кліку на label.
// Саме для цього і існує хук useId, який повертає унікальний рядок ідентифікатора,
// пов'язаний з конкретним викликом useId у даному компоненті.
