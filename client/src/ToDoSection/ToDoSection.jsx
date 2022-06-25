import React from "react";
import ToDo from "../ToDo/ToDo";
import styles from "./ToDoSection.module.css";

const ToDoSection = () => {
  return (
    <>
      <section className={styles.body}>
        <section className={styles.intro}>
          <h1>Welcome </h1>
          <h4>Here's what we have for you</h4>
        </section>
        <section className={styles.todo}>
          <ToDo />
        </section>
      </section>
      <section className={styles.adder}>
        <input type="text" placeholder="Add your list here" />
      </section>
    </>
  );
};

export default ToDoSection;
