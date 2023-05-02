import Header from "./components/Header";
import Tasks from "./components/Tasks";

/*
function App() {
  const name = 'tiff';
  return (
    <div className="App">
      <h1>Hello World! React</h1>
      <h2>Welcome {name} to our react crash course!</h2>
    </div>
  );
}

export default App;
*/

/*
function App() {
  const name = 'tiff';
  return (
    <>
      <h1>Hello World! React</h1>
      <h2>Welcome {name} to our react crash course!</h2>
    </>
  );
}

export default App;
*/

/*
function App() {
  const name = 'tiff';
  // add const variable and assign a value of false boolean
  const a = true;
  const b = 5+5;
  return (
    <>
      <h1>Hello World! React</h1>
      <h2>Welcome {name} to our react crash course!</h2>
      <h2>I am new to JSX and I love it! {a ? 'yes': 'no'}</h2>
      <h2>{5+5}</h2>
      <h2>{b}</h2>
    </>
  );
}

export default App;
*/

/*
function App() {
  const name = 'tiff';
  // add const variable and assign a value of false boolean
  const a = true;
  const b = 5+5;
  return (
    <div className="container">
      <h1>Hello World! React</h1>
      <h2>Welcome {name} to our react crash course!</h2>
      <h2>I am new to JSX and I love it! {a ? 'yes': 'no'}</h2>
      <h2>{5+5}</h2>
      <h2>{b}</h2>
    </div>
  );
}

export default App;
*/

function App() {
  return (
    <div className="container">
      <Header/>
      <Tasks/>
    </div>
  );
}

export default App;