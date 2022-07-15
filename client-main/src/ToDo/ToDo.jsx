import React, { useState, useEffect } from "react";
import styles from "./toDo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTrash,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modal/Modal";
import axios from "axios";

const ToDo = (param) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(() => true);
  };

  const deleter = async (e) => {
    e.preventDefault();
    await axios.delete(`api/todo/delete/${param._id}`);
  };

  return (
    <section className={styles.body}>
      <Modal show={show} onClose={() => setShow(false)} />
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
        <section className={styles.trash} onClick={deleter}>
          {" "}
          <FontAwesomeIcon icon={faTrash} className={styles.icon} />{" "}
        </section>
      </section>
    </section>
  );
};

export default ToDo;
