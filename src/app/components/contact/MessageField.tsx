import styles from "./ContactFields.module.css";

export default function MessageField() {
  return (
    <label className={styles.fieldLabel}>
      <span>message</span>
      <textarea
        name="message"
        placeholder="message"
        className={styles.textArea}
      />
    </label>
  );
}
