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
    color: "#61dafb",
    bg: "#222",
  },
  {
    id: "2",
    name: "React Native",
    bg: "#61dafb",
    color: "#222",
  },
  {
    id: "3",
    name: "Node.js",
    bg: "#026e00",
  },
  {
    id: "4",
    name: "MongoDB",
    bg: "#13aa52",
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
  },
];

const CoolCardContainer = styled.div`
  position: relative;
  border-radius: 0.5rem;
  padding: 1rem;
  background-color: ${(props) => props.bg || "#48e"};
  color: ${(props) => props.color || "white"};
  height: 8rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  transition: box-shadow 1s ease, transform 1s ease;
  transform-style: preserve-3d;
  //  overflow: hidden;

  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    transition: box-shadow 250ms ease;
    z-index: 5;
  }
`;

const CoolCardContent = styled.div`
  position: relative;
  transform: perspective(100px) translateZ(12px);
  pointer-events: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const Shine = styled.div`
  position: absolute;
  opacity: 0.25;
  background: radial-gradient(white, transparent 50%);
  border-radius: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  transform: translateZ(1px);

  ${(props) =>
    props.offset
      ? `transform: translateX(${props.offset.x * 100}px) translateY(${
          props.offset.y * 60
        }px) translateZ(1px) scale3d(2, 2, 2)`
      : null};
`;

const CoolCard = ({ label, bg, color }) => {
  const [mousePos, setMousePos] = useState(null);
  const enableShine = false;
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

        setMousePos({
          x: event_offsetX,
          y: event_offsetY,
          width: currentTargetRect.width,
          height: currentTargetRect.height,
        });
      }}
      bg={bg}
      color={color}
      isMouseOver={!!mousePos}
      style={{
        transform: !!mousePos
          ? `rotateY(${-mousePos.x * yRange}deg) rotateX(${
              mousePos.y * xRange
            }deg) perspective(100px) scale3d(1.06, 1.06, 1.06)`
          : null,
      }}
    >
      <CoolCardContent>{label}</CoolCardContent>
      {enableShine && !!mousePos && <Shine offset={mousePos} />}
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
              <CoolCard label={t.name} color={t.color} bg={t.bg} />
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
