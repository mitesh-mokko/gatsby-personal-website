import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container has-text-centered flex-row">
          <a href="mailto:mitesh@mokko.io" style={{ marginRight: '2rem' }}>
            mitesh@mokko.io
          </a>

          <a
            className="social"
            href="https://linkedin.com/in/theprotagony"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: '2rem', marginRight: '1rem' }}
          >
            <img
              alt="LinkedIn"
              src={require('../img/social/linkedin.svg')}
              style={{ height: 32 }}
            />
          </a>
          <a
            className="social"
            href="https://github.com/mitesh-mokko"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="Github" style={{ height: 32 }} />
          </a>
        </div>
      </footer>
    )
  }
}

export default Footer
