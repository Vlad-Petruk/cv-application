import "./ReusableContent.css";

function Button({ text, handleClick }) {
  return (
    <button type="button" className="btn" onClick={handleClick}>
      {text}
    </button>
  );
}

export default Button;
