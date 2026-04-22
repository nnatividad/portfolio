"use client";

import styles from "@/app/page.module.css";

export default function ContactForm() {
  return (
    <div className={styles.contactContent}>
      <p className={styles.contactMessage}>
        I&apos;m open to full-time roles and freelance work. Reach out anytime — I&apos;d love to hear from you.
      </p>
      <div className={styles.contactLinks}>
        <a href="mailto:natetividad@gmail.com" className={styles.contactLink}>
          <u>{"-->email"}</u>
        </a>
        <a href="https://www.linkedin.com/in/nathaniel-natividad-bb3871227/" className={styles.contactLink}>
          <u>{"-->linkedin"}</u>
        </a>
      </div>
    </div>
  );
}

