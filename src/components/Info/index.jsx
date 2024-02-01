import React from "react";
import Skills from "../Skills";
import { Route } from "react-router-dom";
import About from "../About";
import Projects from "../Projects";
import Certif from "../Certif";
import Expirience from "../Expirience";

export default ({ info, lang }) => {
  const { skills, projects, expirience, certificates, profile } = info;
  return (
    <div>
      <Route
        exact
        path={info.about.path}
        component={() => <About info={info} lang={lang} />}
      />
      <Route
        path={skills.path}
        component={() => <Skills skills={skills} lang={lang} />}
      />
      <Route
        path={projects.path}
        component={() => <Projects projects={projects} lang={lang} />}
      />
      {/* <Route
        path={certificates.path}
        component={() => <Certif certificates={certificates} lang={lang} />}
      /> */}
      <Route
        path={expirience.path}
        component={() => (
          <Expirience exp={expirience} profile={profile} lang={lang} />
        )}
      />
    </div>
  );
};
