import React from "react";
import style from "./index.module.css";

export default ({ exp, profile, lang }) => {
  const profiles = [...profile.code, profile.cv[0]].map(profile => (
    <span key={profile.title}>
      <a href={profile.url} target="_blank" rel="noopener noreferrer">
        {profile["title" + lang]}
      </a>
      <br />
    </span>
  ));

  return (
    <div>
      <h2>
        <img className={style.logo} src={exp.logo} alt={exp["title" + lang]} />
        {exp["title" + lang]}
      </h2>
      <h3>{exp.relevant["title" + lang]}</h3>
      <p>
        {exp["devExperience" + lang]()}
        {exp.relevant["explanation" + lang].map(str => (
          <span key={str}>
            {str}
            <br />
          </span>
        ))}
      </p>
      <p>{profiles}</p>
      <hr />
      <h3>{exp.nonRelevant["title" + lang]}</h3>
      <p>{exp.nonRelevant["explanation" + lang]}</p>
    </div>
  );
};
