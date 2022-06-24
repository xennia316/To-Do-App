import React from "react";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <section className={styles.body}>
      <section className={styles.main}>
        <section className={styles.navItems}>
          <a href="#">All</a>
        </section>
        <section className={styles.navItems}>
          <a href="#">Completed</a>
        </section>
        <section className={styles.navItems}>
          <a href="#">Uncompleted</a>
        </section>
        <section className={styles.navItems}>
          <a href="#">Due Soon</a>
        </section>
        <section className={styles.navItems}>
          <a href="#">Very important</a>
        </section>
      </section>
    </section>
  );
};

export default Nav;
