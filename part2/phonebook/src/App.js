import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [personsCopy, setPersonsCopy] = useState(persons);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:3001/persons`).then((response) => {
      console.log(response);
      setPersons(response.data);
      setPersonsCopy(response.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const personRepeated = persons.find((person) => person.name === newName);
    if (personRepeated) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons([...persons, { name: newName, number: newNumber }]);
      setPersonsCopy([...persons, { name: newName, number: newNumber }]);
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
      <Persons personsCopy={personsCopy} />
    </div>
  );
};

export default App;
