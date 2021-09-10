import car1 from "./car1.jpg";
import car2 from "./car2.jpg";
import car3 from "./car3.jpg";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import styles from "./CarShowcase.module.scss";
import { useState } from "react";
const CarShowcase = () => {
  const [cars, setCars] = useState([car1, car2, car3]);

  const images = (
    <div className={styles.ImagesContainer}>
      {cars.map((car, index) => (
        <img
          className={styles.Image}
          key={index}
          src={car}
          alt={`Car ${index}`}
        />
      ))}
    </div>
  );
  const SlideForward = () => {
    let newCars = [...cars];
    const firstElement = newCars.pop();
    newCars = [firstElement, ...newCars];
    setCars(newCars);
  };
  const SlideBack = () => {
    let newCars = [...cars];
    const lastElement = newCars.shift();
    newCars = [...newCars, lastElement];
    setCars(newCars);
  };

  return (
    <div className={styles.Container}>
      <GrFormPrevious className={styles.Arrow} onClick={SlideBack} />
      {images}
      <GrFormNext className={styles.Arrow} onClick={SlideForward} />
    </div>
  );
};

export default CarShowcase;
