import styles from "./ContactFields.module.css";

export default function SubjectField() {
  return (
    <label className={styles.fieldLabel}>
      <span>subject</span>
      <input
        type="text"
        name="subject"
        placeholder="subject"
        className={styles.textInput}
      />
    </label>
  );
}
