import LicensePlateInfoFields from "./LicensePlateInfoFields/LicensePlateInfoFields";
import styles from "./LicensePlateInfo.module.scss";
const LicensePlateInfo = ({ data }) => {
  if (!data) {
    return <div></div>;
  }
  const tradeName = `${data?.merk} ${data?.handelsbenaming}`;
  const date = data.datum_eerste_toelating;
  const fuelDescription = data?.brandstof[0]?.brandstof_omschrijving;
  return (
    <div className={styles.Container}>
      <LicensePlateInfoFields fieldName="Trade name" fieldInfo={tradeName} />
      <LicensePlateInfoFields
        fieldName="Date of first admission"
        fieldInfo={date}
      />
      <LicensePlateInfoFields
        fieldName="Fuel Description"
        fieldInfo={fuelDescription}
      />
    </div>
  );
};

export default LicensePlateInfo;
