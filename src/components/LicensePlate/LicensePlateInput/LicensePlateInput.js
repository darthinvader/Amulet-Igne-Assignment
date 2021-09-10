import axios from "axios";
import { useState } from "react";
import styles from "./LicensePlateInput.module.scss";

const LicensePlateInput = ({ setData }) => {
  const [plateNum, setPlateNum] = useState("6-XXH-68");

  const requestData = async () => {
    const request = await axios.get(
      `https://api.overheid.io/voertuiggegevens/${plateNum}?ovio-api-key=${process.env.REACT_APP_API_KEY}`
    );
    setData(request.data);
    console.log(request.data);
  };
  return (
    <div className={styles.Container}>
      <h1 className={styles.Header}>Please enter your license plate number</h1>
      <div className={styles.InputContainer}>
        <input
          type="text"
          value={plateNum}
          onChange={(ev) => {
            setPlateNum(ev.target.value);
          }}
          className={styles.Input}
        />
        <button className={styles.Button} onClick={requestData}>
          Send
        </button>
      </div>
    </div>
  );
};

export default LicensePlateInput;
