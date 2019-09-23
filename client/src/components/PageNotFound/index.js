import React from "react";

const PageNotFound = () => (
  <div className="error">
    <h1 className="error__header">404 Page Not Found</h1>
    <h2 className="notFoundTitle">Oops! That page can’t be found.</h2>
    <p className="notFoundDesc">
      It looks like nothing was found at this location. Maybe try one of the
      links in the menu or press back to go to the previous page.
    </p>
  </div>
);

export default PageNotFound;
