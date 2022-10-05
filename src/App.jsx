import { Post } from "../src/components/posts/Post";
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
          <Post />
          <Post />
        </main>
      </div>
    </div>
  );
}
