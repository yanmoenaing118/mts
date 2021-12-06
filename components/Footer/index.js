import Container from "../Layout/Layout";
import styles from "./../../styles/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer_wrapper}>
          <p>Copyrigh &copy; 2021 MTS. All right reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
