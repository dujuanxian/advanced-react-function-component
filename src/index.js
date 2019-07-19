import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>
        It is <span className="date">{props.date.toLocaleTimeString()}</span>.
      </h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(<Clock date={new Date()} />, document.getElementById("root"));
}

setInterval(tick, 2000);
