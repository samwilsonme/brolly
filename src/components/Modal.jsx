import React from "react";
import "./Modal.css"
import close from '../assets/icons/search.svg'

function Modal({ modal, style, children }) {
  return (
    <div className={style}>
      {children}
      <div className="modal-close" onClick={() => modal(false)} >
        <img src={close} alt="Search" />
        <p>Close</p>
      </div>
    </div>
  );
}

export default Modal