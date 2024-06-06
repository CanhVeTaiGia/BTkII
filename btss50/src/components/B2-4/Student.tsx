import React, { useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

export default function Student() {
  const url = useParams();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const studentName = params.get('studentName');
  console.log("name=", url.name);
  return (
    <>
      <p>name={url.name}</p>
      <h1>Student Name: {studentName}</h1>
    </>
  );
}
