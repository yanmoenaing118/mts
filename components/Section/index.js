import Container from "../Layout/Layout";
import styles from "./../../styles/Section.module.scss";

export default function Section(props) {
  return (
    <section
      className={styles.section}
      style={{
        backgroundColor: props.background,
      }}
    >
      <Container>
        <div className={styles.section_wrapper}>{props.children}</div>
      </Container>
    </section>
  );
}
