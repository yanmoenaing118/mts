import styles from "./../../styles/Layout.module.scss";

export default function Container({ children }) {
  return <div className={styles.container}>{children}</div>;
}
