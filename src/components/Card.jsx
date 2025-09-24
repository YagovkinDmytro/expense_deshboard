const Card = ({ children, text }) => {
  return (
    <div className="card">
      <h2>{text}</h2>
      {children}
    </div>
  );
};

export default Card;
