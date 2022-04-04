import { useState } from "react";

const AddTasks = ({ myAddTask }) => {

  const [text, setText] = useState("");
  const [day, setDay] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    myAddTask({
      text,
      day,
      isDone: false,
    });
    setDay('')
    setText('')
  };

  return (
    <div>
      <form action="" className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="task">Task</label>
          <input
            type="text"
            id="task"
            name="text"
            placeholder="Add Task"
            required
            onChange={(e) => setText(e.target.value)}
            value = {text} 
          />
        </div>

        <div className="form-control">
          <label htmlFor="day">Day & Day Time</label>
          <input
            type="text"
            id="day"
            name="text"
            placeholder="Add Day & Day Time"
            required
            onChange={(e) => setDay(e.target.value)}
            value = {day} 
          />
        </div>

        <input type="submit" value="Save Task" className="btn btn-block" />
      </form>
    </div>
  );
};

export default AddTasks;
