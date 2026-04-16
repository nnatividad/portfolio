import styles from "./ContactFields.module.css";

export default function EmailField() {
  return (
    <label className={styles.fieldLabel}>
      <span>email</span>
      <input
        type="email"
        name="email"
        placeholder="email"
        className={styles.textInput}
      />
    </label>
  );
}
