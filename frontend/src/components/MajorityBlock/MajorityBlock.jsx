import "./MajorityBlock.css";
import PropTypes from "prop-types";

const MajorityBlock = ({ show, setShow }) => {
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
          NO
        </a>
      </div>
    </div>
  );
};
MajorityBlock.propTypes = {
  setShow: PropTypes.objectOf.isRequired,
  show: PropTypes.string.isRequired,
};
export default MajorityBlock;
