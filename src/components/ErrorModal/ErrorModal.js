import Modal from "../Modal/Modal";
import styles from "./ErrorModal.module.scss";
import CarCrash from "./CarCrash.png";
const ErrorModal = ({ onClose, description, title }) => {
  return (
    <Modal>
      <button className={styles.CloseButton} onClick={onClose}>
        Close
      </button>
      <img
        className={styles.Img}
        src={CarCrash}
        title="source: imgur.com"
        alt="Crash"
      />
      <h1 className={styles.ErrorModal}>Error</h1>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.Description}>{description}</p>
    </Modal>
  );
};

export default ErrorModal;
