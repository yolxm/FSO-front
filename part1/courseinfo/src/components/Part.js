import React from "react";

export default function Part(props) {
  const { part, exercises } = props;
  return (
    <div>
      <p>
        {part} {exercises}
      </p>
    </div>
  );
}
