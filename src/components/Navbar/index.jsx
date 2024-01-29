import React from "react";
import { NavLink } from "react-router-dom";
import style from "./index.module.css";

export default ({ nav, lang }) => {
  return (
    <nav>
      <ul className={style.nav}>
        {Object.values(nav)
          .filter(el => el.isNav)
          .map(el => (
            <li className={style.list} key={el["title" + lang]}>
              <NavLink exact activeClassName={style.current} to={el.path}>
                <img
                  className={style.logo}
                  src={el.logo}
                  alt={el["title" + lang]}
                />
                <span className={style.hiddenformobile}>
                  {el["title" + lang].toUpperCase()}
                </span>
              </NavLink>
            </li>
          ))}
      </ul>
    </nav>
  );
};
