import React from "react";
import { Link } from "gatsby";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container has-text-centered">
          <a href="mailto:mitesh@mokko.io">mitesh@mokko.io</a>
        </div>
      </footer>
    );
  }
};

export default Footer;
