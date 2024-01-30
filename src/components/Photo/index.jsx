import React, { useState, useEffect } from "react";
import style from "./index.module.css";

export default () => {
  const [photo, setPhoto] = useState("./img/wink.svg");

  useEffect(() => {
    setTimeout(() => {
      const url = "https://api.github.com/users/samolevich";
      fetch(url)
        .then((res) => res.json())
        .then((data) => setPhoto(data.avatar_url))
        .catch((err) =>
          console.log("Something is not working as expected =>", err)
        );
    }, 2048);
  }, []);

  return (
    <img
      id="face"
      className={style.photo}
      src="/img/cert/avt.png"
      alt="my face"
      style={{ width: "250px", height: "250px", objectFit: "cover" }}
    />
  );
};
