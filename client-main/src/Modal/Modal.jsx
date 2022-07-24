import React, { useState } from "react";
import styles from "./Modal.module.css";
import axios from "axios";

const Modal = (props) => {
  const [task, setTask] = useState({
    content: "",
    dueDate: "",
    priority: 1,
  });
  const today = new Date();
  const day = today.toDateString();
  // console.log(day);
  const clear = () => {
    setTask({ content: "", dueDate: day, priority: 1 });
  };

  const handleTaskChange = (e) => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value,
    });
  };

  const checkProperties = (task) => {
    let date1 = new Date(task.dueDate).getTime();
    let date2 = new Date(today).getTime();
    if (
      task.content === "" ||
      task.priority < 1 ||
      task.priority > 3 ||
      date1 < date2
    ) {
      alert("This information cannot be registered");
      setTask({ content: "", dueDate: "", priority: 1 });

      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (checkProperties(task)) {
      let result = await axios.post("/api/todo/add", task).then((data) => data);
      if (result.status === 200) {
        // localStorage.setItem("todo", JSON.stringify(result.data.data));
        clear();
        props.onClose();
      } else {
        alert("Unsuccessful!");
      }
    }
  };

  if (!props.show) {
    return null;
  }
  return (
    <section className={styles.main} onClick={props.onClose}>
      <section className={styles.body} onClick={(e) => e.stopPropagation()}>
        <section title="closing mark" className={styles.closerContainer}>
          <div className={styles.closer} onClick={props.onClose}>
            x
          </div>
        </section>
        <section className={styles.inputSection}>
          <form className={styles.form}>
            <label className={styles.label}>
              {" "}
              Task
              <input
                name="content"
                value={task.content}
                className={styles.input}
                type="text"
                placeholder="Please enter your next task here"
                onChange={handleTaskChange}
              />
            </label>{" "}
            <label className={styles.label}>
              {" "}
              Due Date
              <input
                value={task.dueDate}
                className={styles.input}
                type="date"
                name="dueDate"
                placeholder="PExpiry date for task here"
                onChange={handleTaskChange}
              />
            </label>{" "}
            <label className={styles.label}>
              priority
              <input
                value={task.priority}
                name="priority"
                className={styles.input}
                type="Number"
                max="3"
                min="1"
                placeholder="Enter a priority for this task"
                onChange={handleTaskChange}
              />
            </label>
            <button className={styles.btn} onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </section>
      </section>
    </section>
  );
};

export default Modal;
