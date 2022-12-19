import React from "react";

import RecipeCard from "../molecules/RecipeCard";

const RecipesList = (props) => {
  return (
    <div className="myrecipes">
      {props.data?.map((item) => {
        return <RecipeCard key={item.id} dataFav={item} {...item} />;
      })}
    </div>
  );
};

export default RecipesList;
