import React from "react";
import { NavLink } from "react-router-dom";
import style from "./index.module.css";

export default ({ nav, lang }) => {
  return (
    <nav>
      <ul className={style.nav}>
        {Object.values(nav)
          .filter((el) => el.isNav)
          .map((el) => (
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
        <li className="Navbar_list__wLmGI">
          <div className={style.current}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{width:'24px', height:'24px', paddingRight: '8px', filter: 'brightness(0) saturate(100%) invert(65%) sepia(37%) saturate(556%) hue-rotate(309deg) brightness(97%) contrast(97%)'}}>
              <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
            </svg>
            <span className={style.hiddenformobile} style={{color:'#25c1e8', cursor:'pointer'}}>DownLoad CV</span>
          </div>
        </li>
      </ul>
    </nav>
  );
};
