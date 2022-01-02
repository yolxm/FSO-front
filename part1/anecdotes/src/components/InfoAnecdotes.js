import React from "react";

export default function InfoAnecdotes({ text, vote }) {
  return (
    <>
      <p>{text}</p>
      <p>
        Has {vote} vote{vote === 1 ? "" : "s"}
      </p>
    </>
  );
}
