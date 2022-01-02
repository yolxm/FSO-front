import React from "react";
import Statistic from "./Statistic";

export default function Statistics(props) {
  const { good, neutral, bad } = props;

  const all = good + neutral + bad;

  if (all === 0) {
    return <p>No feedback given</p>;
  } else {
    return (
      <table>
        <tbody>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="all" value={all} />
          <Statistic text="average" value={(good - bad) / all} />
          <Statistic text="positive" value={(good / all) * 100 + " %"} />
        </tbody>
      </table>
    );
  }
}
