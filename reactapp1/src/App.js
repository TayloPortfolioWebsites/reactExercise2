import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState , useEffect } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [task, setTasks] = useState([]); // end of setTasks

  useEffect(()=>{
    const getTasks = async()=>{
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }

    getTasks();
  }, []);

  // FETCH TASKS

  const fetchTasks = async() =>{
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    return data;
  }

// ADD TASK

const addTask = (tasklist) =>{
  const id = Math.floor(Math.random() * 10000) + 1;
  
  const newTask = {id, ...tasklist}
  setTasks([...task, newTask]);
}

// DELETE TASK

const deleteTask = (id) => {
  setTasks(task.filter((task) => task.id !== id));
}

// TOGGLE TASK

const toggleActive = (id) => {
  setTasks(
    task.map((task)=> task.id === id ? {...task, reminder: !task.reminder}: task)
  )
}

  return (
    <div className="container animate__heartBeat">
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
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