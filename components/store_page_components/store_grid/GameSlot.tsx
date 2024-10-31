"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { IGameResult } from "@/utility/interfaces/IGameResult";

import styles from "./GameSlot.module.scss";
import windowsSrc from "../../../public/assets/icons/windows-platform-logo.png";
import macSrc from "../../../public/assets/icons/mac-os-logo.png";
import linuxSrc from "../../../public/assets/icons/linux.png";
import xboxSrc from "../../../public/assets/icons/xbox-logo.png";
import playStationSrc from "../../../public/assets/icons/play-station.png";
import nintendoSrc from "../../../public/assets/icons/nintendo-switch.png";
import cartSrc from "../../../public/assets/icons/cart.png";

const GameSlot: React.FC<{ gameData: IGameResult }> = function ({ gameData }) {
  const [previewIndex, setPreviewIndex] = useState(1);

  return (
    <motion.div
      className={styles.slot}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      <div className={styles["slot__visuals"]}>
        <img
          src={gameData.background_image}
          className={styles["slot__thumb"]}
        />
        <div className={styles["slot__preview"]}>
          <img src={gameData.short_screenshots[previewIndex].image} />
          <div className={styles["slot__navigation"]}>
            {Array.from(
              { length: gameData.short_screenshots.length },
              (_, i) => (
                <span
                  key={i}
                  style={{
                    width: `${90 / gameData.short_screenshots.length}%`,
                    opacity: `${i === previewIndex ? 1 : 0.45}`,
                  }}
                  onMouseEnter={() => setPreviewIndex(i)}
                />
              )
            )}
          </div>
        </div>
      </div>
      <div className={styles.description}>
        <span className={styles["description__platforms"]}>
          {gameData.platforms != null ? (
            <>
              {gameData.platforms.some(
                (platform) => platform.platform.id === 4
              ) && <Image src={windowsSrc} alt="Windows Logo" />}
              {gameData.platforms.some(
                (platform) => platform.platform.id === 5
              ) && <Image src={macSrc} alt="MacOS Logo" />}
              {gameData.platforms.some(
                (platform) => platform.platform.id === 3
              ) && <Image src={linuxSrc} alt="Linux Logo" />}
              {gameData.platforms.some(
                (platform) => platform.platform.id === 1
              ) && <Image src={xboxSrc} alt="Xbox Logo" />}
              {gameData.platforms.some(
                (platform) => platform.platform.id === 18
              ) && <Image src={playStationSrc} alt="Play Station Logo" />}
              {gameData.platforms.some(
                (platform) => platform.platform.id === 7
              ) && <Image src={nintendoSrc} alt="Nindendo Logo" />}
            </>
          ) : (
            <Image src={windowsSrc} alt="Windows Logo" />
          )}
        </span>
        <h5 className={styles["slot__title"]}>{gameData.name}</h5>
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
          <h6>Rating:</h6>
          <p>{gameData.rating} / 5</p>
        </span>
        <span style={{ border: "none" }}>
          <h6>Genres:</h6>
          <p>
            {gameData.genres
              .slice(0, 2)
              .map((genre) => genre.name)
              .join(", ")}
          </p>
        </span>
        <button>Show more like this</button>
      </div>
    </motion.div>
  );
};

export default GameSlot;
