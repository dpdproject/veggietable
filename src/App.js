import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./components/pages/RootLayout";
import Home from "./components/pages/Home";
import Recipes, { loader as recipesLoader } from "./components/pages/Recipes";
import Favorites from "./components/pages/Favorites";
import SingleRecipe from "./components/pages/SingleRecipe";
import SearchedRecipes from "./components/pages/SearchedRecipes";
import Contacts from "./components/pages/Contacts";
import Error from "./components/pages/Error";
import { infoAPI, searchAPI } from "./adapters/clientAPI";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="/recipes" element={<Recipes />} loader={recipesLoader} />
      <Route
        path="/recipes/:id"
        element={<SingleRecipe />}
        loader={({ params }) => {
          return infoAPI(params.id);
        }}
      />
      <Route
        path="/recipes/search/:query"
        element={<SearchedRecipes />}
        loader={({ params }) => {
          return searchAPI(params.query);
        }}
      />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/contacts" element={<Contacts />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
