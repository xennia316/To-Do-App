import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTrash,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./toDo2.module.css";
import Modal from "../Modal/Modal";
import axios from "axios";

const ToDo2 = (param) => {
  const [show, setShow] = useState(false);

  const showEditModal = () => {
    setShow(() => true);
  };

  const deleter = (e) => {
    e.preventDefault();
    axios.delete(`/api/todo/delete/${param._id}`);
  };

  let stat = param.completed;

  const statclick = () => {
    axios.post(`api/todo/complete/${param._id}`);
    stat = !stat;
    console.log(stat);
  };
  useEffect(() => {
    statclick();
  }, [param]);
  return (
    <section className={styles.body}>
      <Modal show={show} onClose={() => setShow(false)} />
      <section className={styles.twoSide}>
        <section className={styles.check}>
          <FontAwesomeIcon
            icon={faCheckCircle}
            className={styles.icon}
            onClick={statclick}
          />
        </section>
        <section className={styles.content}>{param.text}</section>
      </section>
      <section className={styles.twoSide}>
        <section className={styles.edit} onClick={showEditModal}>
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

export default ToDo2;
