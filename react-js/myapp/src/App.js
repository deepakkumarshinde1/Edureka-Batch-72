// IMPORT

import { useState } from "react";
import Counter from "./components/Counter";
import CounterComponent from "./components/CounterComponent";

//  main code
function App() {
  // if else in component => () ? true : false;
  let [toggle, setToggle] = useState(true);
  return (
    <>
      <center>
        <button onClick={() => setToggle(!toggle)}>Toggle</button>
        {toggle === true ? (
          <Counter start={10} />
        ) : (
          <CounterComponent start={20} />
        )}
      </center>
    </>
  );
}

// EXPORT

export default App; // ES6
//module.exports = App // ES5
