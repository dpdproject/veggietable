import React, { useContext } from "react";

import { FavContext } from "../../../context/FavContext";
import Title from "../atoms/Title";
import Button from "../atoms/Button";
import InfoList from "../molecules/InfoList";
import SimilarList from "../organisms/SimilarList";

const SingleRecipeLayout = (infoData) => {
  const { myFav, fav } = useContext(FavContext);

  const tempData = infoData.infoData;
  const data = tempData.data;

  // CREATE THE INGREDIENTS LIST
  const ingredients = data?.extendedIngredients?.map((item) => {
    return (
      <li key={item.id}>
        {item.measures.metric.amount} {item.measures.metric.unitShort}{" "}
        {item.name}
      </li>
    );
  });

  return (
    <section className="recipe--container">
      <div className="recipeSection">
        <Title title={data.title} />
        <InfoList
          readyInMinutes={data.readyInMinutes}
          servings={data.servings}
          price={tempData.price}
        />
        <div className="recipeSection--data">
          <div>
            <img src={data.image} alt={data.title} />
            <div className="recipeSection--icons">
              <Button
                handleClick={() => myFav(data)}
                icon={
                  fav.find((item) => item.id === data.id)
                    ? "fi fi-sr-heart"
                    : null
                }
                text={"Add To Favorite"}
              />
            </div>
          </div>
          <div>
            <div className="recipeSection--ingredients">
              <h2>Ingredients</h2>
              <ul>{ingredients}</ul>
            </div>
            <div className="recipeSection--instructions">
              <h2>Preparation</h2>
              <ol>
                <p>{data.instructions}</p>
              </ol>
            </div>
          </div>
        </div>
        <div className="recipeSection--similar">
          <h2>Similar recipes</h2>
          <div className="similar">
            <SimilarList data={tempData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleRecipeLayout;
