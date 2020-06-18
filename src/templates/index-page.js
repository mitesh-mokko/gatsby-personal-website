import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
//import Features from "../components/Features";
//import BlogRoll from "../components/BlogRoll";
import { HTMLContent } from "../components/Content";

export const IndexPageTemplate = ({ image, title, heading, html }) => (
  <div>
    {/*
    <section className="section">
      <div className="container">
        <div
          className="full-width-image margin-top-0"
          style={{
            backgroundImage: `url(${
              !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`,
            backgroundPosition: `top left`,
            backgroundAttachment: `fixed`,
          }}
        >
          <div
            style={{
              display: "flex",
              height: "150px",
              lineHeight: "1",
              justifyContent: "space-around",
              alignItems: "left",
              flexDirection: "column",
            }}
          >
            <h1
              className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
              style={{
                boxShadow:
                  "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
                backgroundColor: "rgb(255, 68, 0)",
                color: "white",
                lineHeight: "1",
                padding: "0.25em",
              }}
            >
              {title}
            </h1>
          </div>
        </div>
      </div>
    </section>
    */}

    <section className="section section--gradient">
      <div className="container">
        <HTMLContent content={html} />
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
