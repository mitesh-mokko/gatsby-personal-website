import React from "react";
import Layout from "../../components/Layout";

const data = [
  {
    id: 1,
    name: "Alogent Design Language",
    link: "https://alogent-design-language.netlify.app",
  },
  {
    id: 2,
    name: "Alogent NXT Scout",
    link: "https://nxt-scout.netlify.app",
  },
  {
    id: 3,
    name: "SQRL Workforce / Design System",
    link: "https://sqrl.me",
  },
];

export default () => (
  <Layout>
    <section className="section">
      <div className="container">
        <h1>Projects</h1>

        <p style={{ marginBottom: "2rem" }}>
          Take a look at some of my finest work in the last 15 years. Lately I
          have been obsessed with React based Design Systems.
        </p>

        {data.map((project) => (
          <div key={"prj_" + project.id} className="box">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <h3>{project.name}</h3>
            </a>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);
