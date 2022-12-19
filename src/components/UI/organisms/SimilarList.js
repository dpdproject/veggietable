import React from "react";
import SimilarCard from "../../UI/molecules/SimilarCard";

const SimilarList = (data) => {
  const similarRecipes = data.data.similarRecipes;
  console.log(data)
  

  const similar = similarRecipes.map((item) => {
    return <SimilarCard key={item.id} {...item} data={similarRecipes}/>;
  });

  return similar;
};

export default SimilarList;
