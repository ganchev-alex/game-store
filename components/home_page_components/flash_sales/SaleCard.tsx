import { useState, useEffect } from "react";
import Image from "next/image";

import { getRandomSalePrice } from "@/utility/functions/pricesManagement";

import styles from "./SaleCard.module.scss";
import plusSrc from "../../../public/assets/icons/plus.png";

const SaleCard: React.FC<{ gameTitle: string; thumb: string }> = function ({
  gameTitle,
  thumb,
}) {
  const [{ salePrice, actualPrice, percentage }, setPriceData] = useState({
    salePrice: "",
    actualPrice: 0,
    percentage: 0,
  });

  useEffect(() => {
    setPriceData(
      getRandomSalePrice(
        [69.99, 59.99, 59.99, 49.99, 25.99],
        [10, 10, 10, 10, 20, 20, 20, 25, 25, 50]
      )
    );
  }, []);

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
        <p className={styles["prices__percentage"]}>-{percentage}%</p>
        <p className={styles["prices__original"]}>€ {actualPrice}</p>
        <p className={styles["prices__sale"]}>€ {salePrice}</p>
      </div>
    </div>
  );
};

export default SaleCard;
