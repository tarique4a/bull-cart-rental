import React from "react";

function DefaultLayout(props) {
  return (
    <div>
      <div className="hearder bs1">
        <div className="d-flex justify-content-between">
          <h1>TeZ-CaR</h1>
         
        </div>
      </div>
      <div className="content">
          {props.children}
      </div>
    </div>
  );
}

export default DefaultLayout;
