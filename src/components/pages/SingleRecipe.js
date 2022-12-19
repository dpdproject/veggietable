import React, { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import "./css/singleRecipe.css";

import AnimatedPage from "../AnimatedPage";
import SingleRecipeLayout from "../UI/layout/SingleRecipeLayout";
import Loading from "../UI/molecules/Loading";
import Error from "./Error";

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
