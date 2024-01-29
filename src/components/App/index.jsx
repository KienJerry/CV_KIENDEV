import React, { useState } from "react";
import aboutMe from "../../aboutMe";
import style from "./index.module.css";
import Bar from "../Bar";
import Info from "../Info";

export default () => {
  const [lang, setLang] = useState("_en");

  const toggleLanguage = () => {
    if (lang === "_en") setLang("");
    else setLang("_en");
  };

  return (
    <div className={style.main}>
      <div></div>
      <div className={style.content}>
        <aside className={style.bar}>
          <Bar bar={aboutMe} lang={lang} />
        </aside>
        <main className={style.info}>
          <button
            type="submit"
            className={style.toggleLanguage}
            onClick={toggleLanguage}
          >
            {lang === "" ? "EN" : "VI "}
          </button>
          <Info info={aboutMe} lang={lang} />
        </main>
      </div>
      <div></div>
    </div>
  );
};
