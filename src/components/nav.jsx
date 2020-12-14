import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between mb-5">
      <div className="container">
        <h1>
          <Link className="text-light" to={"/"}>
            CRUD - React, Redux, RestAPI and Axios
          </Link>
        </h1>
      </div>
      <Link
        className="btn btn-danger nuevo-post d-block d-md-inline-block"
        to={"products/new"}
      >
        Add new product &#43;
      </Link>
    </nav>
  );
};

export default Nav;
