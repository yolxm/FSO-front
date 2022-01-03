import React from "react";

export default function Total({ parts }) {
  const totalParts = parts.reduce((acc, value) => {
    return acc + value.exercises;
  }, 0);

  return (
    <p>
      <b>Total of {totalParts} exercises</b>
    </p>
  );
}
