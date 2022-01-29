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

  return (
    <div className="container">
     <Header />
     <Task tasks={tasks}/>
    </div>
  );
}

export default App;
