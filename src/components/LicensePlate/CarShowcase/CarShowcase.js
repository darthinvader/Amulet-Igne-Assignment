import car1 from "./car1.jpg";
import car2 from "./car2.jpg";
import car3 from "./car3.jpg";
import { FcNext, FcPrevious } from "react-icons/fc";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import styles from "./CarShowcase.module.scss";
const CarShowcase = () => {
  const images = (
    <div className={styles.ImagesContainer}>
      <img className={styles.Image} src={car1} alt="Car 1" />
      <img className={styles.Image} src={car2} alt="Car 2" />
      <img className={styles.Image} src={car3} alt="Car 3" />
    </div>
  );
  return (
    <div className={styles.Container}>
      <GrFormPrevious className={styles.Arrow} />
      {images}
      <GrFormNext className={styles.Arrow} />
    </div>
  );
};

export default CarShowcase;
