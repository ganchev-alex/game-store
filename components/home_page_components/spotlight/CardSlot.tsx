import styles from "./CardSlot.module.scss";

const CardSlot = function () {
  return (
    <div className={styles.card}>
      <img
        src="https://www.team17.com/wp-content/uploads/2020/07/ThumbnailKA.jpg"
        className={styles["card__thumb"]}
      />
      <div className={styles.display}>
        <span className={styles["display__titles"]}>
          <h5>Midweek Madness</h5>
          <p>Offer ends 17 September at 9 pm.</p>
        </span>
        <span className={styles["display__pricing"]}>
          <div className={styles["display__discount"]}>
            <p>-50%</p>
          </div>
          <div className={styles["display__prices"]}>
            <p>€ 66.99</p>
            <p>€ 23.09</p>
          </div>
        </span>
      </div>
    </div>
  );
};

export default CardSlot;
