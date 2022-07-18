import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "./Modal.module.css";

const Modal2 = (props) => {
  const today = new Date();
  const day = today.toDateString();

  const [task, setTask] = useState({
    content: props.details.text,
    dueDate: props.details.dueDate.split("T")[0],
    priority: props.details.priority,
  });

  const clear = () => {
    setTask({ content: "", dueDate: "", priority: 1 });
  };

  const handleTaskChange = (e) => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value,
    });
    console.log(task);
  };

  const checkProperties = (task) => {
    if (
      task.content === "" ||
      task.priority < 1 ||
      task.priority > 3 ||
      task.dueDate < today
    ) {
      alert("Please make proper changes");
      setTask({
        content: props.details.text,
        dueDate: props.details.dueDate,
        priority: props.details.priority,
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (checkProperties(task)) {
      let result = await axios.post(`/api/todo/update`, {...task, _id: props._id
    });
      if (result.status === 200) {
        clear();
        props.onClose();
      } else {
        alert("Sorry, operation unsuccessful");
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
                placeholder="please enter an expiry date for task here"
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
                placeholder="Enter a priority"
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

export default Modal2;
