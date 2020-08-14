import React from 'react'
import { Link } from 'gatsby'
//import github from "../img/github-icon.svg";

const myAvatarSize = 48

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: ''
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active'
            })
          : this.setState({
              navBarActiveClass: ''
            })
      }
    )
  }

  onKeyDown = evt => {
    if (evt.keyCode === 13) {
      this.toggleHamburger()
    }
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <img
                alt={`Mitesh Shah - Profile Shot`}
                src={require('../img/mitesh-320.jpg')}
                height={`${myAvatarSize}`}
                style={{
                  width: myAvatarSize,
                  height: myAvatarSize,
                  maxHeight: 'none',
                  marginRight: '0.5rem',
                  borderRadius: '100%'
                }}
              />
              <strong>Mitesh Shah</strong>
            </Link>
            {/* Hamburger menu */}
            <div
              role="button"
              tabindex="0"
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
              onKeyDown={this.onKeyDown}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-centered">
              <Link className="navbar-item" to="/">
                Home
              </Link>
              <Link className="navbar-item" to="/projects">
                Projects
              </Link>
              <a
                className="navbar-item"
                href="/files/Mitesh-Shah-Resume-2020-B.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
              {/*
                <Link className="navbar-item" to="/about">
                  About
                </Link>
                <Link className="navbar-item" to="/products">
                  Products
                </Link>
                <Link className="navbar-item" to="/blog">
                  Blog
                </Link>
                <Link className="navbar-item" to="/contact">
                  Contact
                </Link>

                */}
              {/*
                  <a
                    className="navbar-item"
                    href="https://github.com/mitesh-mokko"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="icon">
                      <img src={github} alt="Github" />
                    </span>
                  </a>
                  */}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
