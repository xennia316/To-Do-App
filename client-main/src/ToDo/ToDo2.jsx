import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTrash,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./toDo2.module.css";

const ToDo2 = (param) => {
  return (
    <section className={styles.body}>
      <section className={styles.twoSide}>
        <section className={styles.check}>
          <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
        </section>
        <section className={styles.content}>{param.text}</section>
      </section>
      <section className={styles.twoSide}>
        <section className={styles.edit}>
          <FontAwesomeIcon icon={faPen} className={styles.icon} />
        </section>
        <section className={styles.trash}>
          {" "}
          <FontAwesomeIcon icon={faTrash} className={styles.icon} />{" "}
        </section>
      </section>
    </section>
  );
};

export default ToDo2;
