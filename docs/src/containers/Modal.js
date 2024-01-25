import React, { useState } from 'react';

function Modal({ children, modalImgSrc, alt }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div onClick={openModal}>
        {children} {/* Thumbnail */}
      </div>
      {isOpen && (
        <div className="modal-content" onClick={closeModal}>
          <span className="close">&times;</span>
          <div className="modal-img-container">
          <img className="modal-img" src={modalImgSrc} alt={alt} />
          </div>        
        </div>
      )}
    </>
  );
}

export default Modal;
