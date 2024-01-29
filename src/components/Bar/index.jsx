import React from "react";
import Photo from "../Photo";
import Contacts from "../Contacts";
import Navbar from "../Navbar";
import Location from "../Location";

export default ({ bar, lang }) => {
  const { location, contact, profile } = bar;
  return (
    <>
      <Photo />
      <Navbar nav={bar} lang={lang} />
      <Location location={location} lang={lang} />
      <Contacts contact={contact} profile={profile} lang={lang} />
    </>
  );
};
