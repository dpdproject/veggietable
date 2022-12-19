import React from "react";

import Button from "../atoms/Button";
import Title from "../atoms/Title";
import Search from "../molecules/Search/Search";

const RecipesForm = (props) => {
  return (
    <>
      <div className="recipes--container--title">
        <Title title="Recipes" />
        <div className="search--form">
          <Search />
          <Button handleClick={props.handleRefresh} icon={"fi fi-rr-refresh"} />
        </div>
      </div>
    </>
  );
};

export default RecipesForm;
