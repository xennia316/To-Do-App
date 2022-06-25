import Nav from "./Nav/Nav";
import ToDoSection from "./ToDoSection/ToDoSection";
import styles from "./ToDo/ToDo.module.css";

function App() {
  return (
    <section className={styles.mainly}>
      <Nav />
      <ToDoSection />
    </section>
  );
}

export default App;
