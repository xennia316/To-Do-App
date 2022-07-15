import React, { useState, useEffect } from "react";
import styles from "./toDo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTrash,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modal/Modal";

const ToDo = (param) => {
  const [editor, setEditor] = useState(null);

  const handleClick = () => {
    return <Modal />;
  };

  return (
    <section className={styles.body}>
      <section className={styles.twoSide}>
        <section className={styles.check}>
          <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
        </section>
        <section className={styles.content}>{param.text}</section>
      </section>
      <section className={styles.twoSide}>
        <section className={styles.edit} onClick={handleClick}>
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

export default ToDo;
