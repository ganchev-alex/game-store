"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import styles from "./CardSlot.module.scss";

import { IGameResult } from "@/utility/interfaces/IGameResult";
import {
  getTimeRemaining,
  padZero,
} from "@/utility/functions/timersManagement";
import { getRandomSalePrice } from "@/utility/functions/pricesManagement";

const CardSlot: React.FC<{ gameData: IGameResult; primaryOffer: boolean }> =
  function ({ gameData, primaryOffer }) {
    const [countDown, setCountDown] = useState(getTimeRemaining(!primaryOffer));
    const [priceData, setPriceData] = useState({
      salePrice: "",
      actualPrice: 0,
      percentage: 0,
    });

    useEffect(() => {
      const interval = setInterval(() => {
        setCountDown(getTimeRemaining(!primaryOffer));
      }, 1000);

      setPriceData(
        getRandomSalePrice(
          [59.99, 49.99, 39.99],
          [10, 10, 10, 10, 10, 10, 25, 25, 25, 25, 25, 50, 50, 50, 50, 60, 90]
        )
      );

      return () => clearInterval(interval);
    }, []);

    return (
      <motion.div
        className={styles.card}
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        key={gameData.id}
      >
        <div className={styles["card__thumb"]}>
          <div />
          <img src={gameData.background_image} />
        </div>
        <div className={styles.display}>
          <span className={styles["display__titles"]}>
            <h5>{gameData.name}</h5>
            <p suppressHydrationWarning>
              {primaryOffer
                ? `Weekly Offer Ends in: ${countDown.days} days and ${padZero(
                    countDown.hours
                  )}:${padZero(countDown.minutes)}:${padZero(
                    countDown.seconds
                  )} hours`
                : `Daily Offer Ends In: ${padZero(countDown.hours)}:${padZero(
                    countDown.minutes
                  )}:${padZero(countDown.seconds)} hours`}
            </p>
          </span>
          <span className={styles["display__pricing"]}>
            <div className={styles["display__discount"]}>
              <p>- {priceData.percentage}%</p>
            </div>
            <div className={styles["display__prices"]}>
              <p>€ {priceData.actualPrice}</p>
              <p>€ {priceData.salePrice}</p>
            </div>
          </span>
        </div>
      </motion.div>
    );
  };

export default CardSlot;
