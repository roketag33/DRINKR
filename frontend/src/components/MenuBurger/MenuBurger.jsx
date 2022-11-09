import "./MenuBurger.css";
import React, { useState } from "react";
import Modal from "./modal";

const MenuBurger = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="Menu-Burger">
      <button
        type="button"
        className="Burger-style"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        <span />
        <span />
        <span />
      </button>

      {openModal && <Modal closeModal={setOpenModal} />}
    </div>
  );
};

export default MenuBurger;
