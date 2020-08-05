import React, { useState } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/Layout";
//import Features from "../components/Features";
//import BlogRoll from "../components/BlogRoll";
import { HTMLContent } from "../components/Content";

const techStack = [
  {
    id: "1",
    name: "React",
  },
  {
    id: "2",
    name: "React Native",
  },
  {
    id: "3",
    name: "Node",
  },
  {
    id: "4",
    name: "MongoDB",
  },
  {
    id: "5",
    name: "Express",
  },
];

const CoolCardContainer = styled.div`
  position: relative;
  border-radius: 1rem;
  padding: 1rem;
  background-color: #fff;
  height: 8rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  transition: box-shadow 1s ease, transform 1s ease;
  transform-style: preserve-3d;

  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    transition: box-shadow 250ms ease;
    z-index: 5;
  }
`;

const CoolCardContent = styled.div`
  position: relative;
  transform: perspective(100px) translateZ(30px);
`;

const CoolCard = ({ label }) => {
  const [mousePos, setMousePos] = useState(null);
  const xRange = 12;
  const yRange = 20;

  return (
    <CoolCardContainer
      onMouseOver={() => setMousePos({ x: 0, y: 0 })}
      onMouseOut={() => setMousePos(null)}
      onMouseMove={(event) => {
        let currentTargetRect = event.currentTarget.getBoundingClientRect();
        const event_offsetX =
            ((event.pageX - currentTargetRect.left) / currentTargetRect.width) *
              2 -
            1.0,
          event_offsetY =
            ((event.pageY - currentTargetRect.top) / currentTargetRect.height) *
              2 -
            1.0;

        setMousePos({ x: event_offsetX, y: event_offsetY });
      }}
      isMouseOver={!!mousePos}
      style={{
        transform: !!mousePos
          ? `rotateY(${-mousePos.x * yRange}deg) rotateX(${
              mousePos.y * xRange
            }deg) scale3d(1.06, 1.06, 1.06)`
          : null,
      }}
    >
      <CoolCardContent>{label}</CoolCardContent>
    </CoolCardContainer>
  );
};
export const IndexPageTemplate = ({ image, title, heading, html }) => (
  <div>
    <section className="section section--gradient">
      <div className="container">
        <HTMLContent content={html} />

        <h2 style={{ marginBottom: "1rem" }}>Technologies</h2>

        <div className="columns is-multiline">
          {techStack.map((t) => (
            <div key={t.id} className="column is-4">
              <CoolCard label={t.name} />
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
