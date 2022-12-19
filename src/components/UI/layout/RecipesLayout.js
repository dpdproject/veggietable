import React from "react";
import { useAsyncValue } from "react-router";

import RecipesList from "../../UI/organisms/RecipesList";
import RecipesForm from "../../UI/organisms/RecipesForm";

const RecipesLayout = (props) => {
  const { data } = useAsyncValue();
  console.log(data);
  const recipes = data.recipes;

  return (
    <section className="recipes">
      <div className="recipes--container">
        <RecipesForm handleRefresh={props.handleRefresh} />
        <RecipesList data={recipes} />
      </div>
    </section>
  );
};

export default RecipesLayout;
