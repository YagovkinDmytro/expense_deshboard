import Card from "@/components/Card";
import CheckboxElement from "@/components/CheckboxElement";
import ControlledElements from "@/components/ControlledElements";
import ControlledLoginForm from "@/components/ControlledLoginForm";
import DisassemblyStage from "@/components/DisassemblyStage";
import EventHandling from "@/components/EventHandling";
import FeedbackForm from "@/components/FeedbackForm/FeedbackForm";
import RadioButtons from "@/components/RadioButtons";
import SaveLocalStorage from "@/components/SaveLocalStorage";
import SelectElement from "@/components/SelectElement";
import SeveralUseEffects from "@/components/SeveralUseEffects";
import UncontrolledLoginForm from "@/components/UncontrolledLoginForm";
import { useState } from "react";

const Components = () => {
  const [lang, setLang] = useState("uk");

  // Колбек-функція для обробки сабміту форми
  const handleLogin = (userData) => {
    // Виконуємо необхідні операції з даними
    console.log(userData);
  };

  return (
    <>
      <Card text="Event Handling">
        <EventHandling />
      </Card>
      <Card text="Disassembly Stage">
        <DisassemblyStage />
      </Card>
      <Card text="Several useEffects">
        {" "}
        <SeveralUseEffects />
      </Card>
      <Card text="Save Local-Storage">
        <SaveLocalStorage />
      </Card>
      <Card text="Uncontrolled LoginForm">
        <div>
          <h3>Please login to your account!</h3>
          {/* Передаємо колбек як пропс форми */}
          <UncontrolledLoginForm onLogin={handleLogin} />
        </div>
      </Card>
      <Card text="Select Element">
        <p>Selected language: {lang}</p>
        <SelectElement value={lang} onSelect={setLang} />
      </Card>
      <Card text="Radio Buttons">
        <RadioButtons />
      </Card>
      <Card text="Controlled Elements">
        <ControlledElements />
      </Card>
      <Card text="Checkbox Element">
        <CheckboxElement />
      </Card>
      <Card text="Controlled LoginForm">
        <ControlledLoginForm />
      </Card>
      <Card text="Feedback form">
        <FeedbackForm />
      </Card>
    </>
  );
};

export default Components;
