import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Navigation.css";
import Aux from "../../hoc/aux";
import Links from "./links/links";

const navigation = (props) => {
  return (
    <Aux>
      <div className="navbar w-100 bg-dark text-light pt-3 pb-3 d-flex justify-content-between">
        <a href="/" className="text-decoration-none text-light">
          <div className="ms-3 brander">Shrink It...</div>
        </a>
        <div>
          <Links
            link="https://github.com/captcha781/"
            icon="fa-brands github me-3 fa-github"
          />
          <Links
            link="https://twiiter.com/iamrealbhuvi"
            icon="fa-brands github me-3 fa-twitter"
          />
          <Links
            link="https://www.linkedin.com/in/bhuvaneshwaran-s-5930911a5"
            icon="fa-brands github me-3 fa-linkedin"
          />
        </div>
      </div>
    </Aux>
  );
};

export default navigation;
