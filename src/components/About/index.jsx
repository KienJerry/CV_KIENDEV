import React from "react";
import { NavLink } from "react-router-dom";
import style from "./index.module.css";

export default ({ info, lang }) => {
  const {
    about,
    skills,
    projects,
    certificates,
    expirience,
    futureVision,
    education,
  } = info;

  const id = ((stp = 1) => {
    let acc = 0;
    return () => (acc += stp);
  })(1);

  const dataRepresentation = [
    {
      title: about[`title` + lang],
      path: about.path,
      logo: about.logo,
      explanation: () => `${about["explanation" + lang]}`,
    },
    {
      title: skills[`title` + lang],
      path: skills.path,
      logo: skills.logo,
      explanation: () => skills.list.join(", "),
    },
    {
      title: projects[`title` + lang],
      path: projects.path,
      logo: projects.logo,
      explanation: () => (
        <>
          {projects["explanation" + lang]}
          <br />
          <NavLink to={projects.path}>
            {projects[`title` + lang].toUpperCase()}
          </NavLink>
          .
        </>
      ),
    },
    // {
    //   title: certificates[`title` + lang],
    //   path: certificates.path,
    //   logo: certificates.logo,
    //   explanation: () => (
    //     <>
    //       {certificates.list.map((school) => {
    //         return school.certs.map((course) => (
    //           <span key={course.name}>
    //             {course["name" + lang]} - {course["effort" + lang]}.<br />
    //           </span>
    //         ));
    //       })}
    //       <NavLink to={certificates.path}>
    //         {certificates[`title` + lang].toUpperCase()}
    //       </NavLink>
    //       .
    //     </>
    //   ),
    // },
    {
      title: expirience[`title` + lang],
      path: expirience.path,
      logo: expirience.logo,
      explanation: () => (
        <>
          {expirience.relevant[`title` + lang]}
          <br />
          {expirience["devExperience" + lang]()}
          <br />
          <br />
          {expirience.nonRelevant[`title` + lang]}
          <br />
          {expirience.nonRelevant["explanation" + lang]}
        </>
      ),
    },
    {
      title: futureVision[`title` + lang],
      path: futureVision.path,
      logo: futureVision.logo,
      explanation: () => (
        <>
          {futureVision["description" + lang].map((plan) => (
            <span key={plan}>
              {plan}
              <br />
            </span>
          ))}
        </>
      ),
    },
    {
      title: education[`title` + lang],
      path: education.path,
      logo: education.logo,
      explanation: () => education["description" + lang],
    },
  ];

  const description = dataRepresentation.map((article) => (
    <section key={id()}>
      <h2>
        <NavLink to={article.path}>
          <img className={style.logo} src={article.logo} alt={article.title} />
          {article.title}
        </NavLink>
      </h2>
      <p>{article.explanation()}</p>
    </section>
  ));


  return (
    <div>
      <h1>{info["title" + lang]}</h1>
      {description}
    </div>
  );
};
