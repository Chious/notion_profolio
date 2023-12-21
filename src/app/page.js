import Mainpage from "./component/MainPage";
import styles from "./page.module.css";

export const metadata = {
  title: "Sam's Blog",
};

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Mainpage />
      </main>
    </>
  );
}
