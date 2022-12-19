import React, { useContext } from "react";
import { FavContext } from "../../../../context/FavContext";

import RecipeCard from "../../molecules/RecipeCard";

const FavoritesList = () => {
  const { fav } = useContext(FavContext);

  return (
    <div className="myrecipes recipes--container">
      {fav.map((item) => {
        return <RecipeCard key={item.id} dataFav={item} {...item} />;
      })}
    </div>
  );
};

export default FavoritesList;
