"use client";

import styles from "./NavBar.module.css";

export default function Navbar() {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={styles.navContainer}>
      <div className={styles.leftSide}>
        <h1>welcome to my portfolio!</h1>
      </div>
      <div className={styles.rightSide}>
        <button type="button" onClick={() => handleScroll("experience")}>experience</button>
        <button type="button" onClick={() => handleScroll("projects")}>projects</button>
        <button type="button" onClick={() => handleScroll("contact")}>contact</button>
      </div>
    </div>
  );
}