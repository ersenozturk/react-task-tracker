import { useState } from "react";
import "./App.css";
import AddTasks from "./components/addtask/AddTasks";
import Header from "./components/header/Header";
import Tasks from "./components/tasks/Tasks";

function App() {
  //EXAMPLE TASKS
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Study React Pre-Class Notes",
      day: "Dec 12th at 2:30pm",
      isDone: false,
    },
    {
      id: 2,
      text: "Feed the Dog",
      day: "Dec 13th at 1:30pm",
      isDone: true,
    },
    {
      id: 3,
      text: "Attend In-Class",
      day: "Dec 14th at 3:00pm",
      isDone: false,
    },
  ]);

  const [showAddTask, setShowAddTask] = useState(false);


  //ADD TASK
  const addTaskFunc = (newTask) => {
    const id = Math.floor(Math.random() * 1000);
    const addedNewTask = { id, ...newTask };
    setTasks([...tasks, addedNewTask]);
  };

  //TOGGLE DONE
  const toggleDone = (toggledID) => {
    // console.log(toggledID);
    setTasks(
      tasks.map((eachTask) =>
        eachTask.id === toggledID
          ? { ...eachTask, isDone: !eachTask.isDone }
          : eachTask
      )
    );
  };

  // DELETE TASK
  const deleteTask = (deletedTaskID) => {
    console.log({ deletedTaskID });
    setTasks(tasks.filter((taskk) => taskk.id !== deletedTaskID)); //!breakpoint
  };

  // TOGGLE SHOW 
  const toggleShow = () => setShowAddTask(!showAddTask);


  return (
    <div className="container">
      <Header title="Task Tracker" showAddTask={showAddTask} toggleShow={toggleShow}/>

      {showAddTask && <AddTasks myAddTask={addTaskFunc} />}
      
      {
        tasks.length > 0 ? (
          <Tasks
            myTasks={tasks}
            myDeleteTaskFunc={deleteTask}
            myToggleDone={toggleDone}
          />
        ) : (
          <h3 style={{ textAlign: "center" }}>No Task To Show</h3>
        )
      }
    </div>
  );
}

export default App;
