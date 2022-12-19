import React, { useContext } from "react";
import { FavContext } from "../../../context/FavContext";

import MyLink from "../atoms/MyLink";

const NavLinks = (props) => {
  const { fav } = useContext(FavContext);

  return (
    <ul className={props.class}>
      <li>
        <MyLink
          linkTo={"/recipes/"}
          iconClass={"fi fi-rr-apps"}
          title={"Recipes"}
        />
      </li>
      <li>
        <MyLink
          linkTo={"/favorites/"}
          iconClass={fav.length > 0 ? "fi fi-sr-heart" : "fi fi-rr-heart"}
          title={"Favorites"}
          span={
            <span className="text-red">
              {fav.length > 0 ? fav.length : null}
            </span>
          }
        />
      </li>
      <li>
        <MyLink
          linkTo={"/contacts/"}
          iconClass={"fi fi-rr-comment"}
          title={"Contacts"}
        />
      </li>
    </ul>
  );
};

export default NavLinks;
