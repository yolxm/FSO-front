import React from "react";
import InfoAnecdotes from "./InfoAnecdotes";

export default function MoreVotes(props) {
  const { anecdotes, points } = props;
  const selected = points.reduce((accumulator, currentValue, index, array) => {
    return array[accumulator] < currentValue ? index : accumulator;
  }, 0);
  console.log(selected);
  return (
    <>
      <InfoAnecdotes text={anecdotes[selected]} vote={points[selected]} />
    </>
  );
}
