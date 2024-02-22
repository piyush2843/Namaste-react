import React from "react";
import ReactDOM from "react-dom";

import Body from "./src/Components/Body";
import Header from "./src/Components/Header";

const AppLayout = () => {
  return (
    <React.Fragment>
     <Header />
      <Body />
     
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);