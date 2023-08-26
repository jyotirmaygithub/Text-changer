import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

export default function navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.colormode} - bg-${props.colormode} mb-4`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.description}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="form-check form-switch text-light">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
            onClick={props.tochangecolor}
          />
          <label
            className="form-check-label"
            htmlFor="flexSwitchCheckDefault"
            style={props.coloroftext}
          >
            {props.modename}
          </label>
        </div>
      </nav>
      {/* other than props we have some other methods also, which need some highligting to understand it better */}
      {/* other than props we have : props types (similiar of data types of the other programming language which enable us to write that specific data inside of an variable) */}
      {/* another is default props just like default behaviour of something */}

      {/* now lets get familarise with some imp conceps of props  */}
    </>
  );
}

// here we will gonna write our props
navbar.propTypes = { title: PropTypes.string, description: PropTypes.string };

// this one is for default behaviour of the props but always remember p should be capital here to
// default props will appear only when i dont write any custom props
navbar.defaultProps = {
  title: "this is mine",
  description: "i will do what ever i want to do ",
};
