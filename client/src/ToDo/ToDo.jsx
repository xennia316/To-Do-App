import React from "react";
import styles from "./ToDo.module.css";

const ToDo = () => {
  return (
    <section className={styles.Body}>
      <section className={styles.body}>
        <p className={styles.close}>X</p>
        <section className={styles.content}>
          {" "}
          <p className={styles.p}>
            {" "}
            Leave me out of this. I have no accomplishments whatsoever{" "}
          </p>
        </section>
        <section className={styles.options}>
          <section className={styles.option}> Due date</section>
          <section className={styles.option}>
            {" "}
            <select>
              <option>Very important</option>
              <option>Not important</option>
              <option>Important</option>
            </select>
          </section>
          <section className={styles.option}> Completed</section>
        </section>
      </section>
    </section>
  );
};

export default ToDo;
