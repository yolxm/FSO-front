import React from "react";

export default function Header(props) {
  const { course } = props;
  return (
    <>
      <h1>{course}</h1>
    </>
  );
}
