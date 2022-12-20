import React, { lazy, Suspense } from "react";
import { Await, useLoaderData, useParams } from "react-router-dom";
import AnimatedPage from "../AnimatedPage";

import Loading from "../UI/molecules/Loading";
import Error from "./Error";

const SearchedRecipesLayout = lazy(() =>
  import("../UI/layout/SearchedRecipesLayout")
);

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
