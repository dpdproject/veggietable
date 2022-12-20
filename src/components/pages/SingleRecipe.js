import React, { lazy, Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import "./css/singleRecipe.css";

import AnimatedPage from "../AnimatedPage";
import Loading from "../UI/molecules/Loading";
import Error from "./Error";

const SingleRecipeLayout = lazy(() =>
  import("../UI/layout/SingleRecipeLayout")
);

const SingleRecipe = () => {
  const infoData = useLoaderData();

  return (
    <AnimatedPage>
      <Suspense fallback={<Loading />}>
        <Await resolve={infoData} errorElement={<Error />}>
          <SingleRecipeLayout infoData={infoData} />
        </Await>
      </Suspense>
    </AnimatedPage>
  );
};

export default SingleRecipe;
