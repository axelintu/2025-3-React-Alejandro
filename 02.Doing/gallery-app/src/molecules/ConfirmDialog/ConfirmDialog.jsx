import PropTypes from "prop-types";
import "./ConfirmDialog.css";

function ConfirmDialog({
  title,
  message,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
  isOpen,
  type = 'info'
}) {
  if(!isOpen) return null;
  return (
    <div className="confirm-dialog-overlay">
      <div className={`confirm-dialog confirm-dialog--${type}`}>
        <div className="confirm-dialog__header">
          <h3>
            <span className="confirm-dialog__icon">
              {type === 'danger' && "☠️"}
              {type === 'info' && "ℹ️"}
              {type === 'warning' && "⚠️"}
            </span>
            <span className="confirm-dialog__title">
              {title}
            </span>
          </h3>
        </div>
        <div className="confirm-dialog__body">
          <p className="confirm-dialog__message">{message}</p>
        </div>
        <div className="confirm-dialog__footer">
          <button 
            className={`confirm-dialog type--${type}`}
            onClick={ ()=>onConfirm() }
          >{confirmText}</button>
          <button
            className={`confirm-dialog type--${type}`} 
            onClick={ () => onCancel() }
          >{cancelText}</button>
        </div>
      </div>
    </div>
  );
}
ConfirmDialog.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  confirmText: PropTypes.string.isRequired,
  cancelText: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(['danger','warning','info'])
};

export default ConfirmDialog;