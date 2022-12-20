import React, { lazy, Suspense } from "react";
import { useLoaderData, Await } from "react-router-dom";
import "./css/recipes.css";

import { fetchAPI } from "../../adapters/clientAPI";
import Loading from "../UI/molecules/Loading";
import Error from "./Error";
import AnimatedPage from "../AnimatedPage";

const RecipesLayout = lazy(() => import("../UI/layout/RecipesLayout"));

export function loader() {
  return fetchAPI();
}

function Recipes() {
  const data = useLoaderData();

  // REFRESH PAGE FUNCTION
  function refreshPage() {
    window.location.reload();
  }

  return (
    <AnimatedPage>
      <Suspense fallback={<Loading />}>
        <Await resolve={data} errorElement={<Error />}>
          <RecipesLayout handleRefresh={refreshPage} />
        </Await>
      </Suspense>
    </AnimatedPage>
  );
}

export default Recipes;
