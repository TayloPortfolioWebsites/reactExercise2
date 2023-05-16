import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

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
]); // end of setTasks

// ADD TASK

const addTask = (task) =>{
  console.log(task);
}

// DELETE TASK

const deleteTask = (id) => {
  alert('delete test',id);
  console.log('This is a delete task code block function.',id);
}

// TOGGLE TASK

const toggleActive = (id) => {
  setTasks(
    task.map((task)=> task.id === id ? {...task, reminder: !task.reminder}: task)
  )
}

  return (
    <div className="container animate__heartBeat">
      <Header/>
      <AddTask onAdd={addTask}/>
      {task.length > 0 ? <Tasks task={task} onDelete={deleteTask} onToggle={toggleActive}/> : 'No Tasks to Accomplish.'}
    </div>
  );
}

export default App

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