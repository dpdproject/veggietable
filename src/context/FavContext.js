import { createContext, useEffect, useState } from "react";

// CREATE THE CONTEXT
const FavContext = createContext();

// CREATE THE CONTEXT PROVIDER
const FavContextProvider = ({ children }) => {
  // FAVORITE STATE
  const [fav, setFav] = useState([]);
  const [iconFav, setIconFav] = useState(false);

  // HANDLER FAVORITE STATE
  useEffect(() => {
    const favRecipes = JSON.parse(localStorage.getItem("favourite--recipes"));

    if (favRecipes) {
      setFav(favRecipes);
    } else return;
  }, []);

  const setLocalStorage = (item) => {
    localStorage.setItem("favourite--recipes", JSON.stringify(item));
  };

  // ADD AND REMOVE FAVOURITE FUNCTION
  const myFav = (recipe) => {
    if (!fav.find((item) => item.id === recipe.id)) {
      const newFavList = [recipe, ...fav];
      setFav(newFavList);
      setLocalStorage(newFavList);
      setIconFav(false);
    } else if ((item) => item.id === recipe.id) {
      const newFavList = fav.filter((item) => item.id !== recipe.id);

      setFav(newFavList);
      setLocalStorage(newFavList);
      setIconFav(true);
    }
    return;
  };

  return (
    <FavContext.Provider value={{ myFav, fav, iconFav }}>
      {children}
    </FavContext.Provider>
  );
};

export { FavContext, FavContextProvider };
