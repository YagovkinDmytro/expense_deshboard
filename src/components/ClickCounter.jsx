const ClickCounter = (props) => {
  // console.log(props);
  const value = props.value;
  const onUpdate = props.onUpdate;
  return (
    <>
      {props.children}
      <button onClick={onUpdate}>Current: {value}</button>
    </>
  );
};

export default ClickCounter;
