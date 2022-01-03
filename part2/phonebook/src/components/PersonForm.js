import React from "react";

export default function PersonForm({
  handleSubmit,
  newName,
  setNewName,
  newNumber,
  setNewNumber,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name:{" "}
        <input value={newName} onChange={(e) => setNewName(e.target.value)} />
      </div>
      <br />
      <div>
        number:{" "}
        <input
          value={newNumber}
          onChange={(e) => setNewNumber(e.target.value)}
        />
      </div>
      <br />
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}
