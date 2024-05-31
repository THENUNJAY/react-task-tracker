import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [showAddTask, setshowAddTask] = useState(false)

  const [tasks,setTasks] = useState([
    {
        "id": 1,
        "text": "Doctors Appointment",
        "day": "Jan 5th at 2:30pm",
        "reminder": true
      },
      {
        "id": 2,
        "text": "Meeting at School",
        "day": "Feb 6th at 1:30pm",
        "reminder": true
      },
      {
        "id": 3,
        "text": "Food Shopping",
        "day": "Apr 5th at 2:30pm",
        "reminder": false
      },{
        "id": 4,
        "text": "Clothes Shopping",
        "day": "Mar 5th at 6:20pm",
        "reminder": false
      },{
        "id": 5,
        "text": "Movie ",
        "day": "Nov 25th at 12:30pm",
        "reminder": false
      }
])
//Add task
const addTask = (task) => {
const id = Math.floor(Math.random() * 10000) + 1
console.log(id)
const newTask = {id, ...task }
 setTasks([...tasks, newTask])
}


//delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !==
  id))
}

// toggle reminder
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) => 
    task.id === id ? {...task, reminder: 
      !task.reminder } : task
      ))
}
  
  return (
    <div className="container">
      <Header  
      onAdd={() => setshowAddTask(!showAddTask)} 
      showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} 
      />}
      {tasks.length > 0 ? (<Tasks tasks={tasks}
       onDelete=
      {deleteTask} onToggle={toggleReminder}  
      />
       ): (
        'No Tasks To Show' )}
    </div>
  )
}

export default App;
