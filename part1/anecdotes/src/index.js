import React, { useState } from "react";
import ReactDOM from "react-dom";
import InfoAnecdotes from "./components/InfoAnecdotes";
import MoreVotes from "./components/MoreVotes";

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const App = (props) => {
  const { anecdotes } = props;
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));

  const anecdotesRandom = () =>
    anecdotes[setSelected(Math.floor(Math.random() * anecdotes.length))];

  const saveVote = () => {
    const copyPoints = [...points];
    copyPoints[selected] += 1;
    setPoints(copyPoints);
  };
  return (
    <>
      <h1> Anecdote of the day </h1>
      <InfoAnecdotes text={anecdotes[selected]} vote={points[selected]} />
      <button onClick={anecdotesRandom}>Next anecdote</button>
      <button onClick={saveVote}>Vote</button>
      <h2>Anecdote with most votes</h2>
      <MoreVotes anecdotes={anecdotes} points={points} />
    </>
  );
};

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
