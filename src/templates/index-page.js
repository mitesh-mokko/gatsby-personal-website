import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
//import Features from "../components/Features";
//import BlogRoll from "../components/BlogRoll";
import { HTMLContent } from "../components/Content";
import ParallaxTile from "../components/ParallaxTile";

const techStack = [
  {
    id: "1",
    name: "React",
    color: "#61dafb",
    bg: "#222",
    logo: require("../img/react-icon.svg"),
  },
  {
    id: "2",
    name: "React Native",
    color: "#61dafb",
    bg: "#222",
    logo: require("../img/react-icon.svg"),
  },
  {
    id: "3",
    name: "Node.js",
    bg: "#026e00",
    logo: require("../img/nodejs-icon.svg"),
  },
  {
    id: "4",
    name: "MongoDB",
    bg: "#13aa52",
    logo: require("../img/mongodb-icon.svg"),
  },
  {
    id: "5",
    name: "Express",
    bg: "#eeeeee",
    color: "black",
  },
  {
    id: "6",
    name: "Expo",
    bg: "#4630eb",
    logo: require("../img/expo-icon.svg"),
  },
];

export const IndexPageTemplate = ({ image, title, heading, html }) => (
  <div>
    <section className="section section--gradient">
      <div className="container">
        <HTMLContent content={html} />

        <h2 style={{ marginBottom: "1rem" }}>Technologies</h2>

        <div className="columns is-multiline">
          {techStack.map((t) => (
            <div key={t.id} className="column is-4">
              <ParallaxTile
                label={t.name}
                color={t.color}
                bg={t.bg}
                logo={t.logo}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
};

const IndexPage = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        html={html}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
      }
      html
    }
  }
`;
