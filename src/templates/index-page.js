import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../components/Layout'
import ParallaxTile from '../components/ParallaxTile'
import AvailablePill from '../components/AvailablePill'

const techStack = [
  {
    id: '1',
    name: 'React',
    color: '#61dafb',
    bg: '#222',
    logo: require('../img/react-icon.svg')
  },
  {
    id: '2',
    name: 'React Native',
    color: '#61dafb',
    bg: '#222',
    logo: require('../img/react-icon.svg')
  },
  {
    id: '3',
    name: 'Node.js',
    bg: '#026e00',
    logo: require('../img/nodejs-icon.svg')
  },
  {
    id: '4',
    name: 'MongoDB',
    bg: '#13aa52',
    logo: require('../img/mongodb-icon.svg')
  },
  {
    id: '5',
    name: 'Express',
    bg: '#eeeeee',
    color: 'black'
  },
  {
    id: '6',
    name: 'Expo',
    bg: '#4630eb',
    logo: require('../img/expo-icon.svg')
  }
]

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  html,
  availableFullTime,
  availableFreelance
}) => (
  <div>
    <section className="section section--gradient">
      <div className="container">
        <div style={{ marginTop: '3rem', marginBottom: '2rem' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap'
            }}
          >
            <AvailablePill
              available={availableFullTime}
              label="Available for full-time remote work"
              style={{ marginRight: '1rem' }}
            />
            <AvailablePill
              available={availableFreelance}
              label="Available for freelance projects"
            />
          </div>
          <div>
            Connect for work:&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="mailto:mitesh@mokko.io" style={{ marginRight: '2rem' }}>
              mitesh@mokko.io
            </a>
            <a href="tel:(312) 409-1803" style={{ marginRight: '2rem' }}>
              text: (312) 409-1803
            </a>
          </div>
        </div>

        <h2 style={{ marginBottom: '1rem' }}>Technologies</h2>

        <div className="columns is-multiline">
          {techStack.map(t => (
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
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string
}

const IndexPage = ({ data }) => {
  const { body, frontmatter } = data.mdx

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        html={body}
        availableFullTime={frontmatter.availableFullTime}
        availableFreelance={frontmatter.availableFreelance}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    mdx(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        availableFullTime
        availableFreelance
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
      }
      body
    }
  }
`
