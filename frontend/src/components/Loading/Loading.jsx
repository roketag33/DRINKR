import React from "react";
import Title from "../titleblock/title/Title";
import LoadingCard from "./LoadingCard";
import LoadingSearchBar from "./LoadingSearchBar";

const Loading = () => {
  const fakeArrayForDavid = ["david", "david", "david", "david", "david"];
  return (
    <div className="allcocktails_section-placeholder">
      <Title />
      <div className="list__allcocktails">
        <LoadingSearchBar />
        {fakeArrayForDavid.map(() => (
          <LoadingCard />
        ))}
      </div>
    </div>
  );
};

export default Loading;
