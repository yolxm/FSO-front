import React from "react";
import personService from "../services/personService";

export default function Persons({ personsCopy, persons, setPersonsCopy }) {
  console.log(personsCopy);
  const deletePerson = (id, name) => {
    // const newPerson = persons.filter((p) => p.id !== id);
    // setPersonsCopy(newPerson);
    console.log(id, name);
    if (window.confirm(`Delete ${name}?`)) {
      personService.removePerson(id).then(() => {
        setPersonsCopy(persons.filter((person) => person.id !== id));
      });
    }
  };

  return (
    <div>
      {personsCopy.map((person) => (
        <p key={person.id}>
          {person.name} {person.number}{" "}
          <button onClick={() => deletePerson(person.id, person.name)}>
            Delete
          </button>
        </p>
      ))}
    </div>
  );
}
