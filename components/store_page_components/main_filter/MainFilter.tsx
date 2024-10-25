"use client";
import { useState } from "react";
import Image from "next/image";

import styles from "./MainFilter.module.scss";

import anySrc from "../../../public/assets/icons/any-platform.png";
import windowsSrc from "../../../public/assets/icons/windows-platform-logo.png";
import macSrc from "../../../public/assets/icons/mac-os-logo.png";
import linuxSrc from "../../../public/assets/icons/linux.png";

import steamSrc from "../../../public/assets/icons/steam.png";
import epicGamesSrc from "../../../public/assets/icons/epic-games.png";
import gogSrc from "../../../public/assets/icons/gog.png";
import itchSrc from "../../../public/assets/icons/itch-io.png";
import xboxSrc from "../../../public/assets/icons/xbox-logo.png";
import playStationSrc from "../../../public/assets/icons/play-station.png";
import nintendoSrc from "../../../public/assets/icons/nintendo-switch.png";

const platformsSrc = [
  { src: anySrc, alt: "Any Platform Filter" },
  { src: windowsSrc, alt: "Windows Platform Filter" },
  { src: macSrc, alt: "Mac Platform Filter" },
  { src: linuxSrc, alt: "Linux Platform Filter" },
];

const storesSrc = [
  { src: steamSrc, alt: "Steam Store Filter" },
  { src: epicGamesSrc, alt: "Epic Games Store Filter" },
  { src: gogSrc, alt: "GOG Store Filter" },
  { src: itchSrc, alt: "Itch IO Store Filter" },
  { src: xboxSrc, alt: "Xbox Store Filter" },
  { src: playStationSrc, alt: "PlayStation Store Filter" },
  { src: nintendoSrc, alt: "Nintendo Store Filter" },
];

const options = [
  { value: "-added", label: "Data added" },
  { value: "-name", label: "Name" },
  { value: "-date", label: "Release Date" },
  { value: "-popularity", label: "Popularity" },
  { value: "-metacritic", label: "Avg. Rating" },
];

const MainFilter: React.FC = function () {
  const [orderByStatement, setOrderByStatement] = useState("-added");

  return (
    <menu className={styles.filter}>
      <div className={styles["filter__sub"]}>
        <div className={styles.property}>
          <h6 className={styles["filter__label"]}>Systems</h6>
          {platformsSrc.map((platform, index) => (
            <button
              key={index}
              className={`${styles["property__button"]} ${styles["property__button--disabled"]}`}
            >
              <Image src={platform.src} alt={platform.alt} />
              {index === 0 && (
                <span style={{ margin: "0 7.5px 0 5.5px" }}>Any</span>
              )}
            </button>
          ))}
        </div>
        <div className={styles.property} style={{ border: "none" }}>
          <h6 className={styles["filter__label"]}>Store Partners</h6>
          {storesSrc.map((platform, index) => (
            <button
              key={index}
              className={`${styles["property__button"]} ${styles["property__button--disabled"]}`}
            >
              <Image src={platform.src} alt={platform.alt} />
            </button>
          ))}
        </div>
      </div>
      <div className={styles["filter__select-wrapper"]}>
        <label htmlFor="order" className={styles["filter__select-label"]}>
          Order by:
        </label>
        <select
          name="order"
          id="order"
          className={styles["filter__select"]}
          value={orderByStatement}
          onChange={(e) => setOrderByStatement(e.target.value)}
        >
          {options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </menu>
  );
};

export default MainFilter;
