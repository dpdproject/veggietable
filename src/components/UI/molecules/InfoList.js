import React from "react";

import InfoIcon from "../../UI/atoms/InfoIcon";

const InfoList = (props) => {
  return (
    <div className="recipeCard--info">
      <InfoIcon icon={"fi fi-rr-clock"} info={`${props.readyInMinutes} min.`} />
      <InfoIcon icon={"fi fi-rr-user"} info={props.servings} />
      <InfoIcon icon={"fi fi-rr-usd-circle"} info={props.price} />
    </div>
  );
};

export default InfoList;
