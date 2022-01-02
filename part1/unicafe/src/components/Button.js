import React from "react";

export default function Button(props) {
  const { click, text } = props;
  return (
    <>
      <button onClick={click}>{text}</button>
    </>
  );
}
