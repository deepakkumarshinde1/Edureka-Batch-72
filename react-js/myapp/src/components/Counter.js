// function component
import { useEffect, useState } from "react";

function Counter(props) {
  let { start } = props;
  let [count, setCount] = useState(start); // [ value, updateFunction ]

  let incCount = () => {
    count++;
    setCount(count);
  };

  useEffect(() => {
    console.log("function component mounting");

    return () => {
      console.log("function component unmounting");
    };
  }, []); // ()=>,[state] (DependencyList)

  // [] => mounting state

  useEffect(() => {
    console.log("function component update");
  }, [count]); // [state] => updating

  useEffect(() => {
    console.log("function component update for all state");
  });

  return (
    <>
      <h1>{count}</h1>
      <button onClick={incCount}>Function Inc Counter</button>
    </>
  );
}

export default Counter;
