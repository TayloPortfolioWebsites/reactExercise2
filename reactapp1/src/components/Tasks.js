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
            task.map((task)=>(<h3>{task.text}</h3>))
        }
        </>
    )
}

export default Tasks