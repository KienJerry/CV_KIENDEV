import React from "react";
import style from "./index.module.css";

export default ({ projects, lang }) => {
  const counter = (step = 1) => {
    let collector = 0;
    return () => (collector += step);
  };
  const inc = counter();

  return (
    <div>
      <h2>
        <img
          className={style.logo}
          src={projects.logo}
          alt={projects["title" + lang]}
        />
        {projects["title" + lang]}
      </h2>
      {projects.list.map(project => (
        <article className={style.project} key={`${project.title}${inc()}`}>
          <h2>
            <a
              href={project?.links?.[0]?.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.title}
            </a>
          </h2>
          <p>{project["description" + lang]}</p>
          {project?.links?.map(link => (
            <span key={link.url}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.name}
              </a>
              <br />
            </span>
          ))}
        </article>
      ))}
    </div>
  );
};
