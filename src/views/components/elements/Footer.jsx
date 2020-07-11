import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

import "../../../assets/stylesheets/components/elements/background.scss";

import logo from "../../../assets/images/logo.png";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-background">
          <div className="footer-overlay">
            <div className="container d-flex align-items-center justify-content-center py-5">
              <div className="row d-flex justify-content-center text-center">
                <div className="col-md-12">
                  <img src={logo} width="100" alt="" />
                  <p className="mt-3 text-white">
                    <FontAwesomeIcon icon={faCopyright} className="mr-1" />
                    Lucasfilm Ltd. All Rights Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
