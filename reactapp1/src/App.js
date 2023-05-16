import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

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
  const [task, setTasks] = useState([
    {
        id: 1,
        text: 'Watch Netflix',
        day: 'April 3, 2023',
        reminder: true
    },
    {
        id: 2,
        text: 'Play Witcher III',
        day: 'April 4, 2023',
        reminder: true
    },
    {
        id: 3,
        text: 'Buy Groceries',
        day: 'April 5, 2023',
        reminder: false
    },
    {
        id: 4,
        text: 'Study exercise for web dev',
        day: 'April 6, 2023',
        reminder: false
    }
]);

  return (
    <div className="container">
      <Header/>
      <Tasks task={task}/>
    </div>
  );
}

export default App;