import React from "react";
import "./index.css";

export default function Preloader() {
  return (
    <div className="loading">
      <img src={require("./loading.gif")} alt="loading" />
    </div>
  );
}
