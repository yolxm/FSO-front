import React from "react";

export default function Persons({ personsCopy }) {
  return (
    <div>
      {personsCopy.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
}
