import { useState } from "react";
import styles from "./LicensePlateInput.module.scss";
const LicensePlateInput = () => {
  const [plateNum, setPlateNum] = useState("6-XXH-68");
  return (
    <div>
      <input
        type="text"
        value={plateNum}
        onChange={(ev) => {
          setPlateNum(ev.target.value);
        }}
        className={styles.Input}
      />
      <button>Send</button>
    </div>
  );
};

export default LicensePlateInput;
