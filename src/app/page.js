"use client";

import Mainpage from "./component/MainPage";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Mainpage />
    </main>
  );
}
