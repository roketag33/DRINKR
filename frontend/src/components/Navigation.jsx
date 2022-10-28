import React, { Navlink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <Navlink to="/">
          <li> Homepage</li>
        </Navlink>
      </ul>
    </div>
  );
};

export default Navigation;
