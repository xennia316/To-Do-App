import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import ToDo from "../ToDo/ToDo";
import styles from "./display.module.css";
import ToDo2 from "../ToDo/ToDo2";
import Modal from "../Modal/Modal";
import axios from "axios";

const Display = () => {
  const [show, setShow] = useState(false);

  const modalClick = () => {
    setShow(() => true);
  };

  const [data, setData] = useState(null);
  const url = "/api/todo/display";

  useEffect(() => {
    const allTodos = () => {
      axios
        .get(`${url}`)
        .then((response) => {
          const allTask = response.data.data;
          setData(allTask);
          console.log(allTask);
        })
        .catch((error) => console.error(`Error${error}`));
    };
    allTodos();
    console.log(data);
  }, [data]);

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
        {data?.map((todo, index) => {
          if (!todo.completed)
            return (
              <ToDo
                _id={todo._id}
                completed={todo.completed}
                text={todo.content}
                key={index}
              />
            );

          return <ToDo2 _id={todo._id} text={todo.content} key={index} />;
        })}
      </section>
    </section>
  );
};

export default Display;
