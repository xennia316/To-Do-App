import React from "react";
import styles from "./toDo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTrash,
  faPen,
} from "@fortawesome/free-solid-svg-icons";

const ToDo = (param) => {
  return (
    <section className={styles.body}>
      <section className={styles.twoSide}>
        <section className={styles.check}>
          <FontAwesomeIcon icon={faCheckCircle} />
        </section>
        <section className={styles.content}>{param.text}</section>
      </section>
      <section className={styles.twoSide}>
        <section className={styles.edit}>
          <FontAwesomeIcon icon={faPen} />
        </section>
        <section className={styles.trash}>
          {" "}
          <FontAwesomeIcon icon={faTrash} />{" "}
        </section>
      </section>
    </section>
  );
};

export default ToDo;
