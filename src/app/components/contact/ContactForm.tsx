"use client";

import styles from "@/app/page.module.css";
import SubjectField from "@/app/components/contact/SubjectField";
import EmailField from "@/app/components/contact/EmailField";
import MessageField from "@/app/components/contact/MessageField";

export default function ContactForm() {
  return (
    <form className={styles.contactFormGrid}>
      <div className={styles.contactFormSide}>
        <SubjectField />
        <EmailField />
        <button type="submit" className={styles.submitButton}>
          submit
        </button>
      </div>
      <div className={styles.contactFormSide}>
        <MessageField />
      </div>
    </form>
  );
}

