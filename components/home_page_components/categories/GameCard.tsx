"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import styles from "./GameCard.module.scss";
import { IGameResult } from "@/utility/interfaces/IGameResult";
import { getRandomPrice } from "@/utility/functions/pricesManagement";

import windowsSrc from "../../../public/assets/icons/windows-platform-logo.png";
import macSrc from "../../../public/assets/icons/mac-os-logo.png";
import xboxSrc from "../../../public/assets/icons/xbox-logo.png";
import ps4Src from "../../../public/assets/icons/ps4.png";
import nintendoSrc from "../../../public/assets/icons/nintendo-switch.png";

const GameCard: React.FC<{ gameData: IGameResult; isUpcoming: boolean }> =
  function ({ gameData, isUpcoming }) {
    const price = getRandomPrice([
      25.99, 35.99, 35.99, 49.99, 49.99, 49.99, 59.99, 59.99, 59.99, 59.99,
      69.99,
    ]);

    const tag = isUpcoming ? getRandomUpcomingTag() : getRandomTag();

    return (
      <div className={styles.card}>
        <img
          className={styles["card__thumb"]}
          src={gameData.background_image}
        />
        <span className={styles["card__details"]}>
          <h6 className={styles["card__title"]}>{gameData.name}</h6>
          <p className={styles["card__genres"]}>
            {gameData.genres.map(
              (genre, index) =>
                genre.name.toString().charAt(0).toUpperCase() +
                genre.name.toString().slice(1) +
                (index !== gameData.genres.length - 1 ? ", " : "")
            )}
          </p>
          <span className={styles["card__platforms"]}>
            {tag !== "Coming Soon" && (
              <p className={styles["card__price"]}>€ {price}</p>
            )}
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
          <p>{tag}</p>
        </span>
      </div>
    );
  };

function getRandomTag() {
  const tags = ["DLC", "DLC", "Early Access", "Pre-Purchace"];
  const randomValue = Math.random();

  if (randomValue < 0.6) {
    return undefined;
  } else {
    const randomIndex = Math.floor(Math.random() * tags.length);
    return tags[randomIndex];
  }
}

function getRandomUpcomingTag() {
  const tags = ["Coming Soon", "Coming Soon", "Pre-purchase", "Early Access"];
  return tags[Math.floor(Math.random() * tags.length)];
}

export default GameCard;
