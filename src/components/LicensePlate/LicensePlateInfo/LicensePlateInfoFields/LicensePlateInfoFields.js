import styles from "./LicensePlateInfoFields.module.scss";
const LicensePlateInfoFields = ({ fieldName, fieldInfo }) => {
  return (
    <>
      <h3 className={styles.FieldName}>{fieldName}</h3>
      <h2 className={styles.FieldInfo}>{fieldInfo}</h2>
    </>
  );
};

export default LicensePlateInfoFields;
