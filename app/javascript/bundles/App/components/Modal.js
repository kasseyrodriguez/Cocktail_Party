import React, { Component } from "react";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        {children}
        <button onClick={handleClose} class="btn btn-lg close-button" >
          Close
        </button>
      </section>
    </div>
  );
};

export default Modal;
