import "./MajorityBlock.css";
import React, { useState } from "react";

const MajorityBlock = () => {
  const [show, setShow] = useState(true);

  return (
    <div className={show ? "MajorityBlock__container" : "hide"}>
      <p className="MajorityBlock__para">Are you 18 years or older ?</p>

      <div className="MajorityBlock__buttons">
        <button
          type="button"
          onClick={() => setShow(false)}
          className="MajorityBlock__button-yes"
        >
          YES
        </button>
        <a
          href="https://www.disneyplus.com/fr-fr"
          type="button"
          className="MajorityBlock__button-no"
        >
          N0
        </a>
      </div>
    </div>
  );
};
export default MajorityBlock;
