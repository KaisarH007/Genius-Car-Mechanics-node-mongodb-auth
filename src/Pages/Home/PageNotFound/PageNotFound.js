import React from "react";
import { Link } from "react-router-dom";
import photo from "../../../images/404.jpg";
const PageNotFound = () => {
  return (
    <div>
      <div>
        <img style={{ width: "100%", height: "90vh" }} src={photo} alt="" />
      </div>
      <Link to="/">
        <button className="btn btn-primary">Go Back</button>
      </Link>
    </div>
  );
};

export default PageNotFound;
