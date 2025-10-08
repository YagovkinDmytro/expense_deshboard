import { useRef, useEffect } from "react";

const CustomButton = (props) => {
  const handleClick = () => {
    console.log("CustomButton:", props.ref);
  };

  return (
    <button ref={props.ref} onClick={handleClick}>
      {props.children}
    </button>
  );
};

const CustomButtonRef = () => {
  const btnRef = useRef();

  useEffect(() => btnRef.current.focus(), []);

  return <CustomButton ref={btnRef}>Button with forwarded ref</CustomButton>;
};

export default CustomButtonRef;
