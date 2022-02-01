import Header from "./components/Header";
import { useState } from "react";
import Task from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState
  (false)
  const [tasks, setTasks] = useState([
    {
        id:1,
        text: 'Doctors Appointment',
        day: 'Feb 5th AT 2:30pm',
        reminder: true,
    },
    {
        id:2,
        text: 'Meeting at school',
        day: 'Feb 6th AT 11:30pm',
        reminder: true,
    },
    {
        id:3,
        text: 'Food shoping',
        day: 'Feb 5th AT 2:30pm',
        reminder: false,
    }


])

// Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])

}

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle Reminder
const toggleReminder = (id) =>{
  setTasks(
    tasks.map((task)=> 
      task.id === id ? {...task, reminder:
      !task.reminder} : task
      )
      )

}

  return (
    <div className="container">
     <Header onAdd ={() => setShowAddTask
      (!showAddTask)} 
      showAdd={showAddTask}
      />
     {showAddTask && <AddTask onAdd={addTask} />}
     {tasks.length > 0 ? (<Task tasks={tasks} 
     onDelete={deleteTask} onToggle={toggleReminder}
     /> ) :( 'No Tasks To Show')}
    </div>
  );
}

export default App;
