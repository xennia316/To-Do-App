import React, {useState} from "react";
import styles from "./Modal.module.css";
import axios from "axios"

const Modal = (props) => {

  const [task, setTask] = useState("");
  const [priority, setPriority] = useState(1);

  const handleTaskChange = () =>{
    
  }

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
            <label>
              {" "}
              Task
              <input
                className={styles.input}
                type="text"
                placeholder="Please enter your next task here"
              />
            </label>{" "}
            <label>
              priority
              <input
                className={styles.input}
                type="Number"
                max="3"
                min="1"
                placeholder="Enter a priority"
              />
            </label>
            <button className={styles.btn}>Submit</button>
          </form>
        </section>
      </section>
    </section>
  );
};

export default Modal;
