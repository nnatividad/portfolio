import Image from "next/image";
import styles from "./page.module.css";
import profilePic from "../../public/profilePic.jpeg";


export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.infoContainer}>
        <Image src={profilePic} alt="profile image" height={600} width={800} className={styles.image} loading="eager"/>
        <div className={styles.info}>
          <h2>Nate Natividad</h2>
          <p>B.S in Computer Science from UC Riverside</p>
          <ul>
            <li><a href="https://github.com/nnatividad"><u>{"-->github"}</u></a></li>
            <li><a href="https://www.linkedin.com/in/nathaniel-natividad-bb3871227/"><u>{"-->linkedIn"}</u></a></li>
            <li><a href="/"><u>{"-->resume"}</u></a></li>
          </ul>
        </div>
      </div>
      <div className={styles.componentContainer}>
        <div className={styles.about}>
          <div className={styles.title}><h1>ABOUT</h1></div>
          <div className={styles.textContainer}>
            <p>
              My name is Nate Natividad, and this is my portfolio. I graduated from UC Riverside in 2024 with my degree in Computer Science.
              I'm currently building a custom e-commerce platform called rob's garments to sell curated vintage clothing. I'm seeking opportunities
              in software engineering. I'm interested in solving new problems, and I write code that will make sense later.
            </p>
          </div>
        </div>
        <div className={styles.experience}>
          <div className={styles.title}><h1>EXPERIENCE</h1></div>
          <div>

          </div>
        </div>
        <div className={styles.projects}>
          <div className={styles.title}><h1>PROJECTS</h1></div>
        </div>
        <div className={styles.contact}>
          <div className={styles.title}><h1>CONTACT</h1></div>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
}
