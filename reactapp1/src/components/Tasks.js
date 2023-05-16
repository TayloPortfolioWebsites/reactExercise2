import Task from "./Task"

const Tasks = ({task})=>{

    return(
        // tasks.push will not work
        // setTasks([...task, {}])
        <>
        {
            task.map((task)=>(<Task key={task.id} task={task}/>))
        }
        </>
    )
}

export default Tasks


/*
const task = [
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
];

const Tasks = ()=>{
    return(
        // <div>LIST OF TASKS</div>
        <>
        {
            task.map((task)=>(<h3 key={task.id}>{task.day}</h3>))
        }
        </>
    )
}

export default Tasks
*/