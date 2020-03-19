import React from "react";
import { useSelector } from "react-redux";
import Preloader from "../../components/preloader";
import "./index.css";

export default function Main(props) {
  const loading = useSelector(state => state.loading);
  return (
    <main className="component-main">
      {loading ? <Preloader /> : props.children}
    </main>
  );
}
