import React from "react";

export default function Preloader() {
  return (
    <div className="loading">
      <img src={require("./loading.gif")} alt="loading" />
    </div>
  );
}
