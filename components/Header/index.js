import Container from "../Layout/Layout";
import styles from "../../styles/Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header_wrapper}>
          <h3 className={styles.logo}>MTS</h3>
          <nav className={styles.nav}>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">Signup</a>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
