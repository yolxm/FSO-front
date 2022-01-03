import React, { useState, useEffect } from "react";
import axios from "axios";
import personService from "./services/personService";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [personsCopy, setPersonsCopy] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  // Success and error messages are controlled with errorMessage state
  const [errorMessage, setErrorMessage] = useState({});

  useEffect(() => {
    personService.getPersons().then((response) => {
      setPersons(response);
      setPersonsCopy(response);
    });
    // axios.get(`http://localhost:3001/persons`).then((response) => {
    //   console.log(response);
    //   setPersons(response.data);
    //   setPersonsCopy(response.data);
    // });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const personRepeated = persons.find((person) => person.name === newName);
    if (personRepeated) {
      if (
        window.confirm(
          `${newName} is already in the phonebook, replace the old number with a new one?`
        )
      ) {
        const newPerson = { ...personRepeated, number: newNumber };
        personService
          .putPerson(newPerson, newPerson.id)
          .then((returnedPerson) => {
            setPersonsCopy(
              persons.map((person) =>
                person.id !== newPerson.id ? person : returnedPerson
              )
            );
          });
      }
    } else {
      setPersons([
        ...persons,
        { name: newName, number: newNumber, id: persons.length + 1 },
      ]);
      setPersonsCopy([
        ...persons,
        { name: newName, number: newNumber, id: persons.length + 1 },
      ]);
      setNewName("");
      setNewNumber("");
    }
  };

  const handleChange = (e) => {
    setPersonsCopy(
      persons.filter((person) => {
        return person.name.toLowerCase().includes(search);
      })
    );
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        search={search}
        setSearch={setSearch}
        handleChange={handleChange}
      />
      <h2>Add a new</h2>
      <PersonForm
        handleSubmit={handleSubmit}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />
      <h2>Numbers</h2>
      <Persons
        personsCopy={personsCopy}
        setPersonsCopy={setPersonsCopy}
        persons={persons}
      />
    </div>
  );
};

export default App;
