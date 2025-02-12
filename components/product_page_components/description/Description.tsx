import styles from "./Description.module.scss";

const Description: React.FC<{
  description?: string;
  genres: string[];
  lastUpdated: string;
}> = function ({ description, genres, lastUpdated }) {
  return (
    <section className={styles.details}>
      <p className={styles["details__description"]}>{description}</p>
      <span className={styles["details__additional"]}>
        <h6>Genre:</h6>
        <p>{genres.join(", ")}</p>
      </span>
      <span className={styles["details__additional"]}>
        <h6>Last Updated:</h6>
        <p>{lastUpdated.split("T")[0]}</p>
      </span>
    </section>
  );
};

export default Description;
