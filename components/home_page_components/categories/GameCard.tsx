"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import styles from "./GameCard.module.scss";
import { IGameResult } from "@/utility/interfaces/IGameResult";
import { getRandomPrice } from "@/utility/functions/pricesManagement";

import plusSrc from "../../../public/assets/icons/plus.png";
import windowsSrc from "../../../public/assets/icons/windows-platform-logo.png";
import macSrc from "../../../public/assets/icons/mac-os-logo.png";
import xboxSrc from "../../../public/assets/icons/xbox-logo.png";
import ps4Src from "../../../public/assets/icons/ps4.png";
import nintendoSrc from "../../../public/assets/icons/nintendo-switch.png";

const GameCard: React.FC<{ gameData: IGameResult; isUpcoming: boolean }> =
  function ({ gameData, isUpcoming }) {
    const [price, setPrice] = useState(0);
    const [tag, setTag] = useState<{ tag: string; styles: {} } | undefined>(
      undefined
    );

    useEffect(() => {
      setPrice(
        getRandomPrice([
          25.99, 35.99, 35.99, 49.99, 49.99, 49.99, 59.99, 59.99, 59.99, 59.99,
          69.99,
        ])
      );
      setTag(isUpcoming ? getRandomUpcomingTag() : getRandomTag());
    }, []);

    return (
      <div className={styles.card}>
        <div className={styles["card__thumb"]}>
          <div />
          <button>
            <Image
              src={plusSrc}
              alt="Wishlist button"
              width={35}
              height={35}
              style={{ width: "30px", height: "30px", position: "static" }}
            />
          </button>
          <img src={gameData.background_image} />
        </div>
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
            <p className={styles["card__price"]}>
              {tag?.tag === "Coming Soon" ? "Coming Soon" : `€ ${price}`}
            </p>
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
          {tag && tag.tag !== "Coming Soon" && (
            <p className={styles["card__tag"]} style={tag.styles}>
              {tag.tag}
            </p>
          )}
        </span>
      </div>
    );
  };

function getRandomTag() {
  const tags = [
    {
      tag: "DLC",
      styles: {
        backgroundColor: "#d972ff",
        color: "white",
      },
    },
    {
      tag: "DLC",
      styles: {
        backgroundColor: "#d972ff",
        color: "white",
      },
    },
    {
      tag: "Early Access",
      styles: {
        backgroundColor: "white",
        color: "#003f88",
      },
    },
    {
      tag: "Pre-purchase",
      styles: {
        backgroundColor: "#004e98",
        color: "white",
      },
    },
  ];
  const randomValue = Math.random();

  if (randomValue < 0.6) {
    return undefined;
  } else {
    const randomIndex = Math.floor(Math.random() * tags.length);
    return tags[randomIndex];
  }
}

function getRandomUpcomingTag() {
  const tags = [
    {
      tag: "Coming Soon",
      styles: {},
    },
    {
      tag: "Coming Soon",
      styles: {},
    },
    {
      tag: "Pre-purchase",
      styles: {
        backgroundColor: "#004e98",
        color: "white",
      },
    },
    {
      tag: "Early Access",
      styles: {
        backgroundColor: "white",
        color: "#003f88",
      },
    },
  ];
  return tags[Math.floor(Math.random() * tags.length)];
}

export default GameCard;
