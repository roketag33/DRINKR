import React from "react";
import PropTypes from "prop-types";
import "./MenuBurger.css";
import Buttons from "../Buttonlist/Buttons";

const Modal = ({ closeModal }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <Buttons />
        <button type="button" onClick={() => closeModal(false)}>
          {" "}
          X{" "}
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  closeModal: PropTypes.objectOf.isRequired,
};
export default Modal;
