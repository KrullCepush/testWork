import React from "react";
import { useSelector } from "react-redux";
import Preloader from "../../components/preloader";

export default function Main(props) {
  const loading = useSelector(state => state.loading);
  return <main>{loading ? <Preloader /> : props.children}</main>;
}
