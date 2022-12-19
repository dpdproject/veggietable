import React, { useContext } from "react";
import "./css/similarcard.css";

import defaultImage from "../../../images/default_image.jpg";
import { FavContext } from "../../../context/FavContext";

import Button from "../atoms/Button";
import InfoIcon from "../atoms/InfoIcon";
import MyLink from "../atoms/MyLink";

const SimilarCard = (props) => {
  const { myFav } = useContext(FavContext);

  // FIX PRICE INFORMATIONS
  const price = (props.pricePerServing / 100).toFixed(2);

  return (
    <section className="similarCard">
      <div className="recipeCard--image">
        <img src={props.image || defaultImage} alt={props.title} />
        <div className="recipeCard--image--fav">
          <Button
            handleClick={() => myFav(props)}
            icon={"fi fi-sr-heart"}
          />
        </div>
      </div>
      <div className="recipeCard--info">
        <InfoIcon icon={"fi fi-rr-clock"} info={props.readyInMinutes} />
        <InfoIcon icon={"fi fi-rr-user"} info={props.servings} />
        <InfoIcon icon={"fi fi-rr-usd-circle"} info={price} />
      </div>
      <MyLink
        linkTo={`/recipes/${props.id}`}
        title={props.title}
        class={"recipeCard--title"}
      />
    </section>
  );
};

export default SimilarCard;
