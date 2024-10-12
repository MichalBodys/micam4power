import React from 'react';

const Modal = ({ isOpen, onClose, title, content }) => {
  return isOpen ? (
    <div className="modal-overlay absolute top-0" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        <p>{content}</p>
        <button onClick={onClose} className="close-modal-btn">Close</button>
      </div>
    </div>
  ) : null;
};

export default Modal;