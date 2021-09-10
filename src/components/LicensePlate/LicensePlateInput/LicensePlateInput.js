import axios from "axios";
import { useState } from "react";
import styles from "./LicensePlateInput.module.scss";

const LicensePlateInput = () => {
  const [plateNum, setPlateNum] = useState("6-XXH-68");

  const requestData = async () => {
    const data = await axios.get(
      `https://api.overheid.io/voertuiggegevens/${plateNum}?ovio-api-key=${process.env.REACT_APP_API_KEY}`
    );
    console.log(data);
  };
  return (
    <span className={styles.Container}>
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
    </span>
  );
};

export default LicensePlateInput;
