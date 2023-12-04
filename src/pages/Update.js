import React from "react";
import { useLoaderData } from "react-router-dom";

function Update() {
  const { data } = useLoaderData();

  return <div>{data.title}</div>;
}

export default Update;
