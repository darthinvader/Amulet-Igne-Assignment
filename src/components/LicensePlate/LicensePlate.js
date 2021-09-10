import { useState } from "react";
import LicensePlateInput from "./LicensePlateInput/LicensePlateInput";
import image from "./car1.jpg";
import styles from "./LicensePlate.module.scss";

const LicensePlate = () => {
  const [data, setData] = useState({});

  return (
    <>
      <img className={styles.Image} src={image} alt="Old Car" />
      <LicensePlateInput setData={setData} />
    </>
  );
};

export default LicensePlate;
