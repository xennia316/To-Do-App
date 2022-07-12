import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import ToDo from "../ToDo/ToDo";
import styles from "./display.module.css";
import ToDo2 from "../ToDo/ToDo2";
import Modal from "../Modal/Modal";

const Display = () => {
  const [show, setShow] = useState(false);

  const modalClick = () => {
    setShow(() => true);
  };

  const listOfList = [
    { text: "Call granny" },
    { text: "Rubbbish all around me " },
    { text: "Tsuiiiiiiiiiiiiiiiiiiiiiiiiiiiiiip" },
    { text: "Wow Sonia #laughing" },
    { text: "Yam head like you" },
    { text: "I'll report to Nadege :)" },
    { text: "Sharap ya mouth yam #all-laughing" },
  ];

  const list2 = [
    { text: "Call granny" },
    { text: "Rubbbish all around me " },
    { text: "Tsuiiiiiiiiiiiiiiiiiiiiiiiiiiiiiip" },
  ];

  const individualList = listOfList.map((elem, index) => {
    return (
      <>
        <span className={styles.date}>date</span>
        <ToDo key={index} text={elem.text} />
      </>
    );
  });

  const finished = list2.map((elem, index) => {
    return (
      <>
        <span className={styles.date}>date</span>
        <ToDo2 key={index} text={elem.text} />
      </>
    );
  });
  return (
    <section className={styles.body}>
      <Modal show={show} onClose={() => setShow(false)} />
      <section className={styles.top}>
        <h2>To Do List</h2>
      </section>
      <section className={styles.topNext}>
        <h2 className={styles.smaller}>To Do List</h2>
        <button className={styles.btnTop} onClick={modalClick}>
          Add a task <FontAwesomeIcon icon={faAdd} />
        </button>{" "}
      </section>
      <section className={styles.todosection}>
        {finished}
        {individualList}
      </section>
    </section>
  );
};

export default Display;
