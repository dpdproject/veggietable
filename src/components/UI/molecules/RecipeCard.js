import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./css/recipecard.css";

import Button from "../atoms/Button";

import defaultImage from "../../../images/default_image.jpg";
import { FavContext } from "../../../context/FavContext";
import InfoList from "./InfoList";

const RecipeCard = (props) => {
  const price = (props.pricePerServing / 100).toFixed(2);

  // FAVORITE FEATURE
  const { myFav } = useContext(FavContext);

  return (
    <section className="recipeCard">
      <div className="recipeCard--image">
        <img src={props.image || defaultImage} alt={props.title} />
        <div className="recipeCard--image--fav">
          <Button
            handleClick={() => myFav(props.dataFav)}
            icon={"fi fi-sr-heart"}
            classBtn={"favBtn"}
          />
        </div>
      </div>
      <InfoList
        readyInMinutes={props.readyInMinutes}
        servings={props.servings}
        price={price}
      />
      <Link to={`/recipes/${props.id}`} className="recipeCard--title">
        <h3>{props.title}</h3>
      </Link>
    </section>
  );
};

export default RecipeCard;
