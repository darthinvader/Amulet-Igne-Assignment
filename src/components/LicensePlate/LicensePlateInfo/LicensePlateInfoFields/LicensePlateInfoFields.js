import styles from "./LicensePlateInfoFields.module.scss";
const LicensePlateInfoFields = ({ fieldName, fieldInfo }) => {
  return (
    <div className={styles.Container}>
      <h3 className={styles.FieldName}>{fieldName}</h3>
      <h2 className={styles.FieldInfo}>{fieldInfo}</h2>
    </div>
  );
};

export default LicensePlateInfoFields;
