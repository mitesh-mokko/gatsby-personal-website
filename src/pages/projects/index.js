import React from "react";
import Layout from "../../components/Layout";
import ParallaxTile from "../../components/ParallaxTile";

const data = [
  {
    id: "1",
    name: "Route",
    link: "https://getroute.com",
  },
  {
    id: "2",
    name: "Alogent Design Language",
    link: "https://alogent-design-language.netlify.app",
  },
  {
    id: "3",
    name: "Alogent NXT Scout",
    link: "https://nxt-scout.netlify.app",
  },
  {
    id: "4",
    name: "SQRL Workforce / Design System",
    link: "https://sqrl.me",
  },
  {
    id: "5",
    name: "Tiffinity",
    link: "https://demo.tiffinity.com",
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

        <div className="columns is-multiline">
          {data.map((project) => (
            <div key={"prj_" + project.id} className="column is-4">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <ParallaxTile label={project.name}></ParallaxTile>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);
