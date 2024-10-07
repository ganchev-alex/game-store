import Image from "next/image";

import styles from "./SaleCard.module.scss";
import plusSrc from "../../../public/assets/icons/plus.png";

const SaleCard: React.FC<{ gameTitle: string; thumb: string }> = function ({
  gameTitle,
  thumb,
}) {
  return (
    <div className={styles.card}>
      <button className={styles["card__button"]}>
        <Image src={plusSrc} alt="Whishlist Button" />
      </button>
      <span className={styles["card__thumb"]}>
        <div />
        <img src={thumb} alt={`${gameTitle}'s Thumbnail`} />
      </span>
      <h5 className={styles["card__title"]}>{gameTitle}</h5>
      <div className={styles.prices}>
        <p className={styles["prices__percentage"]}>-67%</p>
        <p className={styles["prices__original"]}>69.99</p>
        <p className={styles["prices__sale"]}>23.09</p>
      </div>
    </div>
  );
};

export default SaleCard;
