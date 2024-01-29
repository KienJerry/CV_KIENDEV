import React from "react";
import style from "./index.module.css";

export default ({ location, lang }) => {
  return (
    <h2 className={style.hiddenformobile}>
      <img
        src={location.logo}
        alt={location["title" + lang]}
        className={style.logo}
      />
      {location["title" + lang]}
    </h2>
  );
};
