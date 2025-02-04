"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IGameResult } from "@/utility/interfaces/IGameResult";
import Image from "next/image";

import styles from "./GameSlot.module.scss";
import windowsSrc from "../../../public/assets/icons/windows-platform-logo.png";
import macSrc from "../../../public/assets/icons/mac-os-logo.png";
import xboxSrc from "../../../public/assets/icons/xbox-logo.png";
import playStationSrc from "../../../public/assets/icons/play-station.png";
import nintendoSrc from "../../../public/assets/icons/nintendo-switch.png";
import cartSrc from "../../../public/assets/icons/cart.png";

const GameSlot: React.FC<{ gameData: IGameResult }> = function ({ gameData }) {
  const [hoveredIndicator, setHoveredIndicator] = useState(0);
  const [isScreenshotLoaded, setIsScreenshotLoaded] = useState(false);

  useEffect(() => {
    if (!gameData.short_screenshots.length) return;

    const img = new window.Image();
    img.src = gameData.short_screenshots[hoveredIndicator].image;

    img.onload = () => setIsScreenshotLoaded(true);
  }, [hoveredIndicator]);

  return (
    <motion.div
      className={styles.slot}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      onMouseLeave={() => setHoveredIndicator(0)}
    >
      <div className={styles.visuals}>
        <img
          loading="lazy"
          src={gameData.background_image}
          className={styles["visuals__thumb"]}
        />
        <div
          className={styles["slot__screenshots"]}
          style={{
            backgroundImage: `url(${gameData.short_screenshots[hoveredIndicator].image})`,
          }}
        >
          {Array.from(
            { length: gameData.short_screenshots.length },
            (_, index) => (
              <div
                key={index}
                className={`${styles["visuals__indicator"]} ${
                  index === hoveredIndicator
                    ? styles["visuals__indicator--active"]
                    : ""
                }`}
                style={{
                  width: `calc(80% / ${gameData.short_screenshots.length})`,
                }}
                onMouseEnter={() => setHoveredIndicator(index)}
              />
            )
          )}
        </div>
      </div>
      <div className={styles.description}>
        <span className={styles["description__platforms"]}>
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
          ) && <Image src={playStationSrc} alt="Play Station Logo" />}
          {gameData.platforms.some(
            (platform) => platform.platform.id === 7
          ) && <Image src={nintendoSrc} alt="Nindendo Logo" />}
        </span>
        <h5 className={styles["description__title"]}>{gameData.name}</h5>
        <div className={styles["description__actions"]}>
          <button className={styles["slot__add"]}>
            <Image src={cartSrc} alt="Add To Cart Button" />
            Add
          </button>
          <button className={styles["slot__wish"]}>+ Wish</button>
        </div>
      </div>
      <div className={styles["slot__additional"]}>
        <span>
          <h6>Release Date:</h6>
          <p>{gameData.released}</p>
        </span>
        <span>
          <h6>Genres:</h6>
          <p>
            {gameData.genres
              .slice(0, 3)
              .map((g) => g.name)
              .join(", ")}
          </p>
        </span>
        <span style={{ border: "none" }}>
          <h6>Player's Rating:</h6>
          <p>{gameData.rating} / 5.0</p>
        </span>
        <button>Show more like this</button>
      </div>
    </motion.div>
  );
};

export default GameSlot;
