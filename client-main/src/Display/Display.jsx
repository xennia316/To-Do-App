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
  const [data, setData] = useState(null);
  const [todayData, setTodayData] = useState(null);
  const [laterData, setLaterData] = useState(null);

  const today = new Date();
  const day = today.toDateString();

  const modalClick = () => {
    setShow(() => true);
  };

  const url = "/api/todo/display";

  const allTodos = async () => {
    await axios
      .get(`${url}`)
      .then((response) => {
        const allTask = response.data.data;

        setData(allTask);
      })
      .catch((error) => console.error(`Error${error}`));
  };

  useEffect(() => {
    allTodos();
  }, [show, data]);

  useEffect(() => {
    setTodayData(
      data?.filter((todo) => {
        const tempDate = new Date(todo.dueDate).toDateString();
        if (tempDate === day) {
          return tempDate;
        }
      })
    );
    setLaterData(
      data?.filter((todo) => {
        return new Date(todo.dueDate).toDateString() !== day;
      })
    );
  }, [data]);

  return (
    <section className={styles.body}>
      <Modal
        show={show}
        onClose={() => {
          setShow(false);
          allTodos();
        }}
      />
      <section className={styles.top}>
        <h2>Your To Do List</h2>
      </section>
      <section className={styles.topNext}>
        <h2 className={styles.smaller}>Welcome</h2>
        <button className={styles.btnTop} onClick={modalClick}>
          Add a task <FontAwesomeIcon icon={faAdd} />
        </button>{" "}
      </section>
      <section className={styles.todosection}>
        {todayData ? (
          <section>
            <h2 className={styles.h3}>Due Today</h2>
            {todayData
              ?.sort((a, b) => b.priority - a.priority)
              .map((todo, index) => {
                if (!todo.completed) {
                  return (
                    <ToDo
                      dueDate={todo.dueDate}
                      priority={todo.priority}
                      _id={todo._id}
                      completed={todo.completed}
                      text={todo.content}
                      key={index}
                    />
                  );
                }
                return (
                  <ToDo2
                    dueDate={todo.dueDate}
                    priority={todo.priority}
                    _id={todo._id}
                    text={todo.content}
                    key={index}
                  />
                );
              })}
          </section>
        ) : (
          <p className={styles.jsp}> No tasks due today</p>
        )}
        {laterData ? (
          <section>
            <h2 className={styles.h3}>Due Later</h2>
            {laterData
              ?.sort((a, b) => b.priority - a.priority)
              .map((todo, index) => {
                if (!todo.completed) {
                  return (
                    <ToDo
                      dueDate={todo.dueDate}
                      priority={todo.priority}
                      _id={todo._id}
                      completed={todo.completed}
                      text={todo.content}
                      key={index}
                    />
                  );
                }
                return (
                  <ToDo2
                    dueDate={todo.dueDate}
                    priority={todo.priority}
                    _id={todo._id}
                    text={todo.content}
                    key={index}
                  />
                );
              })}
          </section>
        ) : (
          <p className={styles.jsp}> No tasks due later</p>
        )}
      </section>
    </section>
  );
};

export default Display;
