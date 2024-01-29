import React from "react";
import style from "./index.module.css";

export default ({ skills: { logo, list }, skills, lang }) => {
  return (
    <div>
      <h2>
        <img className={style.logo} src={logo} alt={skills["title" + lang]} />
        {skills["title" + lang]}
      </h2>
      <ul>
        {list.map(skill => (
          <li className={style.skill} key={skill}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};
