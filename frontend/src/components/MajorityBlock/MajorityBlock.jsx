import "./MajorityBlock.css";
import React from "react";

const MajorityBlock = () => {
  return (
    <div className="MajorityBlock__container">
      <p className="MajorityBlock__para">Are you 18 years or older ?</p>

      <div className="MajorityBlock__buttons">
        <button type="button" className="MajorityBlock__button-yes">
          {" "}
          Yes{" "}
        </button>
        <button type="button" className="MajorityBlock__button-no">
          {" "}
          No{" "}
        </button>
      </div>
    </div>
  );
};

export default MajorityBlock;
