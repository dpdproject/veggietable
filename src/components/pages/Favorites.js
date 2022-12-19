import React, { useContext } from "react";
import "./css/favorite.css";

import { FavContext } from "../../context/FavContext";
import AnimatedPage from "../AnimatedPage";
import Title from "../UI/atoms/Title";
import FavoritesList from "../UI/organisms/FavoritesList/FavoritesList";

const Favorites = () => {
  const { fav } = useContext(FavContext);

  return (
    <AnimatedPage>
      <section>
        <h1 className="title">Your favorites</h1>
        {fav.length === 0 ? (
          <Title title={"There are no favorites yet"} class={"message"} />
        ) : (
          <FavoritesList />
        )}
      </section>
    </AnimatedPage>
  );
};

export default Favorites;
