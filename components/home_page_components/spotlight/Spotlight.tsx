"use client";

import React, { useState } from "react";
import Image from "next/image";

import CardSlot from "./CardSlot";

import styles from "./Spotlight.module.scss";
import arrowSrc from "../../../public/assets/icons/arrow.png";
import { IGameResult } from "@/utility/interfaces/IGameResult";

const Spotlight: React.FC<{ gamesData: IGameResult[] }> = function ({
  gamesData,
}) {
  const [startIndex, setStartIndex] = useState(0);

  const swipeGames = function (increment: boolean) {
    if (increment) {
      setStartIndex((currentStartIndex) => {
        let newStartIndex = currentStartIndex + 5;
        return newStartIndex >= gamesData.length
          ? currentStartIndex
          : newStartIndex;
      });
    } else {
      setStartIndex((currentStartIndex) => {
        let newStartIndex = currentStartIndex - 5;
        return newStartIndex < 0 ? currentStartIndex : newStartIndex;
      });
    }
  };

  return (
    <React.Fragment>
      <div className={styles.heading}>
        <h2>Spotlight</h2>
        <span className={styles["heading__controls"]}>
          <button
            onClick={() => swipeGames(false)}
            disabled={startIndex <= 0}
            style={startIndex <= 0 ? { opacity: 0.4 } : {}}
          >
            <Image src={arrowSrc} alt="Left Arrow Icon" draggable={false} />
          </button>
          <button
            onClick={() => swipeGames(true)}
            disabled={startIndex >= gamesData.length - 5}
            style={startIndex >= gamesData.length - 5 ? { opacity: 0.4 } : {}}
          >
            <Image src={arrowSrc} alt="Rigth Arrow Icon" draggable={false} />
          </button>
        </span>
      </div>
      <section className={styles.grid}>
        {gamesData.slice(startIndex, startIndex + 5).map((game, index) => (
          <CardSlot key={game.id} gameData={game} primaryOffer={index === 0} />
        ))}
      </section>
    </React.Fragment>
  );
};

export default Spotlight;
