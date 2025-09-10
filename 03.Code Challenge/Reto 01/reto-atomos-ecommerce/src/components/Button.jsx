import "./Button.css";

function Button({ children, onClick, disabled, variant }) {
  return (
    <button
      className={`btn btn-${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
export default Button; 