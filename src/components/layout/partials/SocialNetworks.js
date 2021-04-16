import React from "react";
import classNames from "classnames";

const SocialNetworks = ({ className, ...props }) => {
  /*
    const classes = classNames(
      'footer-social',
      className
    );
    */

  return (
    <div {...props}>
      <ul className="list-reset">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
        >
          <li>
            <i className="fab fa-twitter"></i>
          </li>
        </a>
        <a
          href="https://reddit.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
        >
          <li>
            <i className="fab fa-reddit"></i>
          </li>
        </a>
        <a
          href="https://telegram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
        >
          <li>
            <i className="fab fa-telegram"></i>
          </li>
        </a>
      </ul>
    </div>
  );
};
export default SocialNetworks;
