import React, { useState } from "react";
import style from "./index.module.css";

export default ({ certificates, lang }) => {
  const { logo, list } = certificates;

  const [show, setShow] = useState(false);

  const btnLabel =
    lang === "_en"
      ? ["Hide certificates", "Show certificates"]
      : ["Развидеть сертификаты", "Посмотреть сертификаты"];

  return (
    <div>
      {/* <h2>
        <img
          className={style.logo}
          src={logo}
          alt={certificates["title" + lang]}
        />
        {certificates["title" + lang]}
      </h2>
      {list.map(school => (
        <p key={school.description}>
          {school["description" + lang]}
          <br />
          {school.certs.map(course => (
            <span key={course.name}>
              <a href={course.url} target="_blank" rel="noopener noreferrer">
                {course["name" + lang]}
              </a>{" "}
              - {course["effort" + lang]}
              <br />
            </span>
          ))}
        </p>
      ))}

      <button className={style.button} onClick={() => setShow(!show)}>
        {show ? btnLabel[0] : btnLabel[1]}
      </button>

      {show && (
        <p>
          {list.map(school => {
            return school.certs.map(image => (
              <img
                src={image.pathLocal}
                alt={image["name" + lang]}
                className={style.certificate}
                key={image.name}
              />
            ));
          })}
        </p>
      )} */}
    </div>
  );
};
