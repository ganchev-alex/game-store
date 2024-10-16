import { useState, useEffect } from "react";
import Image from "next/image";

import {
  getRandomPrice,
  getRandomSalePrice,
} from "@/utility/functions/pricesManagement";

import styles from "./DisplayCard.module.scss";
import plusSrc from "../../../public/assets/icons/plus.png";

const DisplayCard: React.FC<{
  gameTitle: string;
  thumb: string;
  saleMode?: boolean;
}> = function ({ gameTitle, thumb, saleMode }) {
  const [priceData, setPriceData] = useState<
    | number
    | {
        salePrice: string;
        actualPrice: number;
        percentage: number;
      }
  >(0);

  useEffect(() => {
    if (saleMode) {
      setPriceData(
        getRandomSalePrice(
          [69.99, 59.99, 59.99, 49.99, 25.99],
          [10, 10, 10, 10, 20, 20, 20, 25, 25, 50]
        )
      );
    } else {
      setPriceData(getRandomPrice([20.99, 25.99, 49.99, 69.99]));
    }
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
        {saleMode && typeof priceData != "number" && (
          <p className={styles["prices__percentage"]}>
            -{priceData.percentage}%
          </p>
        )}
        <p className={styles["prices__original"]}>
          € {typeof priceData == "number" ? priceData : priceData.actualPrice}
        </p>
        {saleMode && typeof priceData != "number" && (
          <p className={styles["prices__sale"]}>€ {priceData.salePrice}</p>
        )}
      </div>
    </div>
  );
};

export default DisplayCard;
