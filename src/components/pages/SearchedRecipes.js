import React, { Suspense } from "react";
import { Await, useLoaderData, useParams } from "react-router-dom";
import AnimatedPage from "../AnimatedPage";

import Loading from "../UI/molecules/Loading";
import SearchedRecipesLayout from "../UI/layout/SearchedRecipesLayout";
import Error from "./Error";

const SearchedRecipes = () => {
  const searchData = useLoaderData();

  const { query } = useParams();

  return (
    <AnimatedPage>
      <Suspense fallback={<Loading />}>
        <Await resolve={searchData} errorElement={<Error />}>
          <SearchedRecipesLayout query={query} data={searchData.data} />
        </Await>
      </Suspense>
    </AnimatedPage>
  );
};

export default SearchedRecipes;
