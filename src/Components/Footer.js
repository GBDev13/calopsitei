import styles from "./Footer.module.css";
import { ReactComponent as Dogs } from "../Assets/dogs-footer.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Dogs />
      <p>Calopsitei. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
