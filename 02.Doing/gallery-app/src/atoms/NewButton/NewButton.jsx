import "./NewButton.css";
function NewButton ({label, disabled, handleClick}) {
  return (
    <button disabled={disabled} onClick={handleClick} >{label}</button>
  )
}

export default NewButton;