import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.infoContainer}>
        <div className={styles.temp}/>
        <div className={styles.info}>
          <h2>Nate Natividad</h2>
          <p>B.S in Computer Science from UC Riverside</p>
          <ul>
            <li><a href="/"><u>github</u></a></li>
            <li><a href="/"><u>linkedIn</u></a></li>
            <li><a href="/"><u>resume</u></a></li>
          </ul>
        </div>
      </div>
      <div className={styles.componentContainer}>
        Right Side
      </div>
    </div>
  );
}
