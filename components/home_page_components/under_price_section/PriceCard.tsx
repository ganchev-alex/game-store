"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import { IGameResult } from "@/utility/interfaces/IGameResult";
import { getRandomPrice } from "@/utility/functions/pricesManagement";
import styles from "./PriceCard.module.scss";

import windowsSrc from "../../../public/assets/icons/windows-platform-logo.png";
import macSrc from "../../../public/assets/icons/mac-os-logo.png";
import xboxSrc from "../../../public/assets/icons/xbox-logo.png";
import ps4Src from "../../../public/assets/icons/ps4.png";
import nintendoSrc from "../../../public/assets/icons/nintendo-switch.png";

const PriceCard: React.FC<{ gameData: IGameResult; isUnderTen: boolean }> =
  function ({ gameData, isUnderTen }) {
    const [price, setPrice] = useState(0);

    useEffect(() => {
      if (isUnderTen) {
        setPrice(
          getRandomPrice([2.99, 5.99, 5.99, 6.99, 6.99, 8.99, 8.99, 9.99, 9.99])
        );
      } else {
        setPrice(getRandomPrice([10.99, 15.99, 19.99]));
      }
    }, []);

    return (
      <div className={styles.card}>
        <div className={styles["card__filter"]} />
        <img
          src={gameData.background_image}
          alt={`${gameData.name}'s cover.`}
          className={styles["card__cover"]}
        />
        <div className={styles["card__preview"]}>
          <p suppressHydrationWarning>{price} $</p>
          <span className={styles["card__platforms"]}>
            {gameData.platforms.some(
              (platform) => platform.platform.id === 4
            ) && <Image src={windowsSrc} alt="Windows Logo" />}
            {gameData.platforms.some(
              (platform) => platform.platform.id === 5
            ) && <Image src={macSrc} alt="MacOS Logo" />}
            {gameData.platforms.some(
              (platform) => platform.platform.id === 1
            ) && <Image src={xboxSrc} alt="Xbox Logo" />}
            {gameData.platforms.some(
              (platform) => platform.platform.id === 18
            ) && <Image src={ps4Src} alt="PS4 Logo" />}
            {gameData.platforms.some(
              (platform) => platform.platform.id === 7
            ) && <Image src={nintendoSrc} alt="Nindendo Logo" />}
          </span>
        </div>
      </div>
    );
  };

export default PriceCard;
