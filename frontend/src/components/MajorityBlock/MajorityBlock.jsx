import "./MajorityBlock.css";
import React from "react";



function MajorityBlock() {
  
  return (
    

    <div className="MajorityBlock__container">
      <p className="MajorityBlock__para">Are you 18 years or older ?</p>

      <div className="MajorityBlock__buttons">
        
        <a  type="button" className="MajorityBlock__button-yes" >
          Yes
        </a>
        <a href="https://www.disneyplus.com/fr-fr" type="button" className="MajorityBlock__button-no">
          No
        </a>
      </div>
    
    </div>
  );
}
export default MajorityBlock;
