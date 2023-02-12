// IMPORT

import Counter from "./components/Counter";
import CounterComponent from "./components/CounterComponent";

//  main code
function App() {
  //  let counter = [10, 20, 30, 50, 70];
  // loop in react => map (only)
  // if else in component
  return (
    <>
      <center>
        <Counter start={10} />
        <CounterComponent start={20} />
      </center>

      {/* <center>
        {counter.map((count, index) => {
          return <Counter key={index} start={count} />;
        })}
      </center> */}
    </>
  );
}

// EXPORT

export default App; // ES6
//module.exports = App // ES5
