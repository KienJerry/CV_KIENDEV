import React from "react";
import style from "./index.module.css";

export default ({ contact, profile, lang }) => {
  const { logo, interactions } = contact;
  const { cv, code } = profile;
  const contacts = [interactions, code, cv];

  const id = ((stp = 1) => {
    let acc = 0;
    return () => (acc += stp);
  })(1);

  const desktopVersion = contacts.map(each => (
    <div key={id()} className={style.block}>
      {each.map(contact => (
        <span key={contact.title}>
          <a className={style.contacts} href={contact.url}>
            {contact["title" + lang]}
          </a>
          <br />
        </span>
      ))}
    </div>
  ));

  const mobileVersion = contacts.map(each =>
    each
      .filter(contact => contact.iconForMobileVersion)
      .map(contact => (
        <span key={id()}>
          <a href={contact.url}>
            <img
              src={contact.iconForMobileVersion}
              alt={contact["title" + lang]}
              className={style.logo}
            />
          </a>
          <br />
        </span>
      )),
  );

  return (
    <>
      <div className={style.hiddenformobile}>
        <h2>
          <img
            className={style.logo}
            src={logo}
            alt={contact["title" + lang]}
          />
          {contact["title" + lang]}
        </h2>
        <div>{desktopVersion}</div>
      </div>

      <div className={style.showformobile}>
        <hr />
        {mobileVersion}
      </div>
    </>
  );
};
