import { Posts } from "./Posts";
import styles from "./App.module.css";
import { Header } from "./components/header/Header";
import "./global.css";
import { Siderbar } from "./components/sidebar/Sidebar";

export function App() {
  const user = "Ryan Esteves";

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Siderbar />

        <main>
          <Posts
            author="Ryan Esteves"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias adipisci odit cum vero facere cumque quis aspernatur facilis? At ea fuga omnis cumque adipisci fugiat quo doloremque maxime ad non!"
          />
          <Posts
            author="Jiliana Paes"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias adipisci odit cum vero facere cumque quis aspernatur facilis? At ea fuga omnis cumque adipisci fugiat quo doloremque maxime ad non!"
          />
        </main>
      </div>
    </div>
  );
}
