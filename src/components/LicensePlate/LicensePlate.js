import { useState } from "react";
import LicensePlateInput from "./LicensePlateInput/LicensePlateInput";
import image from "./car1.jpg";
import styles from "./LicensePlate.module.scss";
import LicensePlateInfo from "./LicensePlateInfo/LicensePlateInfo";
import CarShowcase from "./CarShowcase/CarShowcase";
import ErrorModal from "../ErrorModal/ErrorModal";
const LicensePlate = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const onError = () => {
    setError(true);
  };

  const errorModal = error ? (
    <ErrorModal
      title="License Plate Does Not Exist"
      onClose={() => {
        setError(false);
      }}
    />
  ) : null;

  return (
    <>
      {errorModal}
      <img className={styles.Image} src={image} alt="Old Car" />
      <LicensePlateInput setData={setData} onError={onError} />
      {data ? (
        <>
          <LicensePlateInfo data={data} /> <CarShowcase />
        </>
      ) : null}
    </>
  );
};

export default LicensePlate;
