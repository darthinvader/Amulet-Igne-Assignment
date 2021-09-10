import { useEffect, useState } from "react";
import LicensePlateInput from "./LicensePlateInput/LicensePlateInput";
import image from "./car1.jpg";
import styles from "./LicensePlate.module.scss";
import LicensePlateInfo from "./LicensePlateInfo/LicensePlateInfo";
import CarShowcase from "./CarShowcase/CarShowcase";

const LicensePlate = () => {
  const [data, setData] = useState(null);

  return (
    <>
      <img className={styles.Image} src={image} alt="Old Car" />
      <LicensePlateInput setData={setData} />
      {data ? (
        <>
          <LicensePlateInfo data={data} /> <CarShowcase />
        </>
      ) : null}
    </>
  );
};

export default LicensePlate;
