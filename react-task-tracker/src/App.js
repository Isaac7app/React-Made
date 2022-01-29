import Header from "./components/Header";
import { useState } from "react";
import Task from "./components/Tasks";

function App() {
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

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle Reminder
const toggleReminder = (id) =>{
  console.log(id)

}

  return (
    <div className="container">
     <Header />
     {tasks.length > 0 ?<Task tasks={tasks} 
     onDelete={deleteTask} onToggle={toggleReminder}
     /> : 'No Tasks To Show'}
    </div>
  );
}

export default App;
